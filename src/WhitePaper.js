// --- Post bootstrap -----
import React from 'react';
import {Page} from 'react-pdf';
import {Document} from 'react-pdf/dist/entry.webpack';
import whitePaper from 'static/PDF/Brochure.pdf';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  width: 1000,
};

class WhitePaper extends React.Component {
  state = {
    file: whitePaper,
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoadSuccess = ({numPages}) => {
    this.setState({numPages});
  };

  render() {
    const {pageNumber, file, numPages} = this.state;
    return (
      <React.Fragment>
        <AppAppBar />
        <div className="Example">
          <div className="Example__container">
            <div className="Example__container__document">
              <Document
                file={file}
                onLoadSuccess={this.onDocumentLoadSuccess}
                options={options}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Document>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRoot(WhitePaper);
