// --- Post bootstrap -----
import React from 'react';
import {MobilePDFReader} from 'react-read-pdf';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <div style={{overflow: 'scroll', height: 600}}>
        <MobilePDFReader url="http://localhost:3000/Brochure.pdf" />
      </div>
    </React.Fragment>
  );
}

export default withRoot(Index);
