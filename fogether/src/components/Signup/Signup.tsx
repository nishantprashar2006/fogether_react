import React from 'react';
import './Signup.css';
import signupDom from './SignupDom'

class Signup extends React.Component {
  
   render() {
        return (
          signupDom.call(this)
        );
    }


}

export default Signup;
