import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends React.Component<{}, {user : any}> {

  constructor(data: any){
    super(data);
    this.state = {
      user : ""
    }
  }
    
   render(){
        return (
          <div className="App">
          <h1>Hello  {this.state.user.name}</h1>
          <button className="btn btn-md btn-success" onClick = {this.getUser}>Click</button>
        </div>)
    }

    getUser = async () => {
      console.log("hello");
      await axios.get("http://localhost:5000/user/getUser").then(user => {
          this.setState({
            user: user.data
          });
      })
      console.log(this.state.user);
  }
  
}
   


export default App;
