import React from 'react';
import './TopNavbar.css';
import { Link } from 'react-router-dom';

export default function topNavbarDom() {
    return (
        <div>
            <nav className="navbar-background">
                <div className="row">
                    <div className="col-md-12">
                        <a className="navbar-brand" >
                            <h1><i>Dating website</i></h1>
                        </a>
                        <Link to="/home">
                            <button className="btn btn-warning btn-md">Login</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div >
    )
}