import React from 'react';
import './TopNavbar.css';

export default function topNavbarDom() {
    return (
        <div>
            <nav className="bg-dark navbar-dark">
                <div className="row">
                    <div className="col-md-6">
                        <a className="navbar-brand" >
                            <h1><i>Dating website</i></h1>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <form className="formTop">
                            <button className="btn btn-success my-2 my-sm-0">Sign Up</button>
                        </form>
                    </div >
                </div>
            </nav >
        </div >
    )
}