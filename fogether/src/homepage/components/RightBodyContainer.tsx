import React from 'react';

import SignUpForm from './SignUpForm';

const DEFAULT_CLASSNAME: string = 'right-body-container';
class RightBodyContainer extends React.Component {
  render() {
    return (
      <div className={DEFAULT_CLASSNAME}>
      <SignUpForm />
      </div>
    );
  }
}

export default RightBodyContainer;
