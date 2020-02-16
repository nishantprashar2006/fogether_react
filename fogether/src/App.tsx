import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { dispatch, getState } from './redux/state/Store';
import { actionCreators } from './redux/actions';
//import { getUsersFromStore } from './redux/reducers';

// const action = new Action();

class App extends React.Component {
  
   render(){
        return (
          <div className="App">
          <h1>Hello</h1>
          <button className="btn btn-md btn-success" onClick = {this.addUser}>Add User</button>
          <br/><br/>
          <button className="btn btn-md btn-success" onClick = {this.getUsers}>Get User</button>
        </div>)
    }


  //   getUser = async () => {
  //     console.log("hello");
  //     await axios.get("http://localhost:5000/user/getUser").then(user => {
  //         this.setState({
  //           user: user.data
  //         });
  //     })
  //     console.log(this.state.user);
  // }

  addUser = async () => {

    await axios.post("http://localhost:5000/user/createUser", {id: 100, name: 'Nish'}).then(user => {
       dispatch(actionCreators.addUser(user.data));
       console.log(user);
    })
   // console.log(store.getStore().dispatch(action.addUser({id: 1, name: 'Nish'})));
  }
  
   getUsers = () => {
     console.log(getState().initialState);
      //getUsersFromStore(store1.getState());
      
   }
}

export default App;
