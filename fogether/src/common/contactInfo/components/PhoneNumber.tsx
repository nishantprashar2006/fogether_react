import React from 'react';

interface IPhoneNumberProps {
  setPhoneNumber: (phoneNumber: string) => void;
}

const PHONE_NUMBER_PLACEHOLDER: string = 'Phone Number';
class PhoneNumber extends React.Component<IPhoneNumberProps, {}> {

  private phoneNumberRef = React.createRef<HTMLInputElement>();
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="tel" placeholder={PHONE_NUMBER_PLACEHOLDER} ref={this.phoneNumberRef} onBlur={this.setPhoneNumber} />
      </div>
    );
  }

  setPhoneNumber = () => {
    if (this.phoneNumberRef.current !== null) {
      console.log(this.phoneNumberRef.current.value);
      this.props.setPhoneNumber(this.phoneNumberRef.current.value);
    }
  }
}

export default PhoneNumber;
