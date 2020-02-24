import React from 'react';
import './App.css';
import axios from 'axios';
import { dispatch, getState } from './redux/store/Store';
import { actionCreators } from './redux/actions/action';
import { getIUserState } from './redux/reducers/reducer';
import appDom from './AppDom';
import Signup from './components/Signup/Signup';


class App extends React.Component {
  
   render() {
        return (
          appDom.call(this)
        );
    }


    showSignup(){
        
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
