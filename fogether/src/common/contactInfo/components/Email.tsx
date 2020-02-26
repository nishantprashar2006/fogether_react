import React from 'react';

const EMAIL_PLACEHOLDER: string = 'EMAIL';
class Email extends React.Component {
  render() {
    return (
      <div>
       <input type="Email" value="" placeholder={EMAIL_PLACEHOLDER} />
      </div>
    );
  }
}

export default Email;
