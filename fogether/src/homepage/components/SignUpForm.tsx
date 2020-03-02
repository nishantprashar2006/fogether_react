import React from 'react';

import Email from '../../common/contactInfo/components/Email';
import PhoneNumber from '../../common/contactInfo/components/PhoneNumber';
import Password from '../../common/contactInfo/components/Password';
import SignUpButton from './SignUpButton';
import { addUser } from '../model/HomepageModel';


interface ISignUpFormComponentState {
  email: string,
  phoneNumber: string,
  password: string
}

const DEFAULT_CLASSNAME: string = 'sign-up-form';
class SignUpForm extends React.Component<{}, ISignUpFormComponentState> {

  constructor(props:any) {
    super(props);
    this.state = {
      email: '',
      phoneNumber: '',
      password: ''
    };
  }

  render(): JSX.Element {
    return (
      <div>
        <form>
          <Email setEmail={this.setEmail} />
          <PhoneNumber setPhoneNumber={this.setPhoneNumber}/>
          <Password setPassword={this.setPassword}/>
          <SignUpButton onClick={this.signUp}/>
        </form>
      </div>
    );
  }

  setEmail = (email: string) => {
    this.setState({
      email: email
    });
  }

  setPhoneNumber = (phoneNumber: string) => {
    this.setState({
      phoneNumber: phoneNumber
    });
  }

  setPassword = (password: string) => {
    this.setState({
      password: password
    });
  }

  signUp = (): void => {
      addUser(this.state.email, this.state.phoneNumber, this.state.password);
  }


}

export default SignUpForm;
