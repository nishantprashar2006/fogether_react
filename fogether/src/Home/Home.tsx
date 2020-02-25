import React from 'react';
import homeDom from './HomeDom'

class Home extends React.Component {
  
   render() {
        return (
          homeDom.call(this)
        );
    }

}

export default Home;
