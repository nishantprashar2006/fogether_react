import React from 'react';
import './App.css';

import AppHeaderContainer from './homepage/components/AppHeaderContainer';
import AppBodyContainer from './homepage/components/AppBodyContainer';
import AppFooterContainer from './homepage/components/AppFooterContainer';
import axios from 'axios';

const DEFAULT_CLASSNAME = 'App';

class App extends React.Component {
  render() {
    return (
      <div className={DEFAULT_CLASSNAME}>
        <AppHeaderContainer />
        <AppBodyContainer />
        <AppFooterContainer />
        <input type="file" onChange={this.fileUpload}/>
      </div>
    );
  }


  fileUpload = async (e: any) => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('userId', '10000');
    formData.append('description', 'Image');
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    await axios.post("http://localhost:5000/images/uploadImage", formData).then(image => {
      console.log(image);
    })
    //return post(url, formData, config)
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
