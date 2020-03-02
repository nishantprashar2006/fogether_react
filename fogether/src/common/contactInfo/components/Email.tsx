import React from 'react';

interface IEmailProps {
  setEmail: (email: string) => void;
}

const EMAIL_PLACEHOLDER: string = 'Email';
class Email extends React.Component<IEmailProps, {}> {

  private emailRef = React.createRef<HTMLInputElement>();
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="Email" placeholder={EMAIL_PLACEHOLDER} ref={this.emailRef} onBlur={this.setEmail} />
      </div>
    );
  }

  setEmail = () => {
    if (this.emailRef.current !== null) {
      this.props.setEmail(this.emailRef.current.value);
    }
  }
  
}

export default Email;
