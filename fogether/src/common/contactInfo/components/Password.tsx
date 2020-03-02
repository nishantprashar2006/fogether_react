import React from 'react';

interface IPasswordProps {
  setPassword: (phoneNumber: string) => void;
}

const PASSWORD_PLACEHOLDER: string = 'Password'; 
const CONFIRM_PASSWORD_PLACEHOLDER: string = 'Confirm password'; 

class Password extends React.Component<IPasswordProps, {}> {

  private passwordRef = React.createRef<HTMLInputElement>();
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
       <input type="password" placeholder={PASSWORD_PLACEHOLDER} ref={this.passwordRef} onBlur={this.setPassword}/>
       <input type="password" placeholder={CONFIRM_PASSWORD_PLACEHOLDER} />
      </div>
    );
  }

  setPassword = () => {
    if (this.passwordRef.current !== null) {
      console.log(this.passwordRef.current.value);
      this.props.setPassword(this.passwordRef.current.value);
    }
  }

}

export default Password;
