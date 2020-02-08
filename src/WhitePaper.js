// --- Post bootstrap -----
import throttle from 'lodash.throttle';
import React from 'react';
import {Page} from 'react-pdf';
import {Document} from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import whitePaper from 'static/PDF/Brochure.pdf';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import withRoot from './modules/withRoot';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  width: 1000,
};

class WhitePaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {width: null, file: whitePaper, numPages: null, pageNumber: 1};
  }

  componentDidMount() {
    this.setDivSize();
    window.addEventListener('resize', throttle(this.setDivSize, 500));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', throttle(this.setDivSize, 500));
  }

  setDivSize = () => {
    this.setState({width: this.pdfWrapper.getBoundingClientRect().width});
  };

  onDocumentLoadSuccess = ({numPages}) => {
    this.setState({numPages});
  };

  render() {
    const {pageNumber, file, numPages} = this.state;
    return (
      <React.Fragment>
        <AppAppBar />
        <div
          id="row"
          style={{
            width: '100vw',
            display: 'flex',
            overflow: 'hidden',
          }}
        >
          <div
            id="pdfWrapper"
            style={{width: '90vw'}}
            ref={ref => (this.pdfWrapper = ref)}
          >
            <Document
              file={file}
              onLoadSuccess={this.onDocumentLoadSuccess}
              options={options}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={this.state.width}
                />
              ))}
            </Document>
          </div>
        </div>
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default withRoot(WhitePaper);
