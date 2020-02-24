import React from 'react';
import TopNavbar from './components/Navbar/TopNavbar/TopNavbar';
import Signup from './components/Signup/Signup';

export default function appDom() {
    return (
        <div className="App">
            <TopNavbar hidden="false"/>
            <Signup />
        </div>
    );
}