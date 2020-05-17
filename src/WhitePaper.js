// --- Post bootstrap -----
import React from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import whitePaper from 'static/PDF/Brochure.pdf';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import withRoot from './modules/withRoot';
import DocumentViewer from './modules/components/DocumentViewer';

class WhitePaper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <React.Fragment>
        <AppAppBar />
        <div
          id="row"
          style={{
            display: 'flex',
            overflow: 'hidden',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: '1 0 auto'
          }}
        >
          <DocumentViewer document={whitePaper}></DocumentViewer>
        </div>
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default withRoot(WhitePaper);
