import React from 'react';

const DEFAULT_CLASSNAME: string = 'app-footer-container';
const FOOTER_LABEL: string = 'FOOTER';

class AppFooterContainer extends React.Component {
  render() {
    return (
      <div className={DEFAULT_CLASSNAME}>
      { 'FOOTER' }
      </div>
    );
  }
}

export default AppFooterContainer;
