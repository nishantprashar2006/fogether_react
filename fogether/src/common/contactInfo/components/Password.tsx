import React from 'react';

const PASSWORD_PLACEHOLDER: string = 'Enter password'; 
const CONFIRM_PASSWORD_PLACEHOLDER: string = 'Confirm password'; 

class Password extends React.Component {
  render() {
    return (
      <div>
       <input type="password" placeholder={PASSWORD_PLACEHOLDER} required/>
       <input type="password" placeholder={CONFIRM_PASSWORD_PLACEHOLDER} required/>
      </div>
    );
  }
}

export default Password;
