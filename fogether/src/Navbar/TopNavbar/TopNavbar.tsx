import React from 'react';
import topNavbarDom from './TopNavbarDom'

class TopNavbar extends React.Component {
  
   render() {
        return (
          topNavbarDom.call(this)
        );
    }


}

export default TopNavbar;
