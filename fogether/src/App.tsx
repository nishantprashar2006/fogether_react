import React from 'react';
import './App.css';
import axios from 'axios';
import { dispatch, getState } from './redux/store/Store';
import { actionCreators } from './redux/actions/action';
import { getIUserState } from './redux/reducers/reducer';
import test from './Test';

class App extends React.Component {
  
   render(){
        return (
          test.call(this)
        );
    }

  addUser = async () => {

    await axios.post("http://localhost:5000/user/createUser", {id: 100, name: 'Nish'}).then(user => {
       dispatch(actionCreators.addUser(user.data));
       console.log(user);
    })
  }
  
   getUsers = () => {
     console.log(getState());
     console.log(getIUserState());      
   }
}

export default App;
