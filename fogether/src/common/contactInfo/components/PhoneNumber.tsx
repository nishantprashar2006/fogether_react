import React from 'react';

const PHONE_NUMBER_PLACEHOLDER: string = 'Enter Phone Number';
class PhoneNumber extends React.Component {
  render() {
    return (
      <div>
       <input type="tel" value="" placeholder={PHONE_NUMBER_PLACEHOLDER} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
      </div>
    );
  }
}

export default PhoneNumber;
