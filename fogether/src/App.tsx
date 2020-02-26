import React from 'react';
import './App.css';
// import axios from 'axios';

// import { 
//   dispatch, 
//   getState 
// } from './redux/store/Store';
// import { actionCreators } from './redux/actions/action';
// import { getIUserState } from './redux/reducers/reducer';
import AppHeaderContainer from './homepage/components/AppHeaderContainer';
import AppBodyContainer from './homepage/components/AppBodyContainer';
import AppFooterContainer from './homepage/components/AppFooterContainer';

const DEFAULT_CLASSNAME = 'App';

class App extends React.Component {
   render() {
        return (
          <div className={DEFAULT_CLASSNAME}>
            <AppHeaderContainer/>
            <AppBodyContainer />
            <AppFooterContainer />
         </div>
        );
    }

  // addUser: any = async () => {

  //   await axios.post("http://localhost:5000/user/createUser", {id: 100, name: 'Nish'}).then(user => {
  //      dispatch(actionCreators.addUser(user.data));
  //      console.log(user);
  //   })
  // }
  
  //  getUsers = () => {
  //    console.log(getState());
  //    console.log(getIUserState());      
  //  }
}

export default App;
