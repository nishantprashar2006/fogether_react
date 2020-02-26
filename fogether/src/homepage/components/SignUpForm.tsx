import React from 'react';

import Email from '../../common/contactInfo/components/Email';
import PhoneNumber from '../../common/contactInfo/components/PhoneNumber';
import Password from '../../common/contactInfo/components/Password';
import SignUpButton from './SignUpButton';

const DEFAULT_CLASSNAME: string = 'sign-up-form';
class SignUpForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Email />
          <PhoneNumber />
          <Password />
          <SignUpButton />
        </form>
      </div>
    );
  }


}

export default SignUpForm;
