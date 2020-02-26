import React from 'react';

import AppLabel from '../../common/appInfo/components/AppLabel';
import AppLogo from '../../common/appInfo/components/AppLogo';
import LoginButton from './LoginButton';

class AppHeaderContainer extends React.Component {
  render() {
    return (
      <div>
        <AppLogo />
        <AppLabel />
        <LoginButton />
      </div>
    );
  }
}

export default AppHeaderContainer;
