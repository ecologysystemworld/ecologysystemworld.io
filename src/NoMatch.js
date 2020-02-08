// --- Post bootstrap -----
import React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import AppFooter from './modules/views/AppFooter';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <div>
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
      </div>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
