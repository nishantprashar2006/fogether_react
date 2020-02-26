import React from 'react';
import LeftBodyContainer from './LeftBodyContainer';
import RightBodyContainer from './RightBodyContainer';

class AppBodyContainer extends React.Component {
  render() {
    return (
      <div>
       <LeftBodyContainer />
       <RightBodyContainer />
      </div>
    );
  }
}

export default AppBodyContainer;
