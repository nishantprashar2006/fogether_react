import React from 'react';
import './App.css';
import axios from 'axios';
import { dispatch, getState } from './redux/store/Store';
import { actionCreators } from './redux/actions/action';
import { getIUserState } from './redux/reducers/reducer';
import Signup from './Signup/Signup';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import TopNavbar from './Navbar/TopNavbar/TopNavbar';


class App extends React.Component {
  render() {
    return (
      <main>
        <TopNavbar/>      
        <Switch>
          <Route path='/' component={Signup} exact/>
          <Route path='/home' component={Home} />
        </Switch>
      </main>
    );
  }


}

export default App;
