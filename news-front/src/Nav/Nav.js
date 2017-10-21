import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'

import React from 'react';
import logo from './logo.png';
import './Nav.css';
import SignIn from "../SignIn/SignIn";

class Nav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <img className="brand-logo logo" src={logo}/>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.customerContent()}
                    </ul>
                </div>
            </nav>
        );
    }

    customerContent() {
        return (
            <li>
                <a onClick={this.toggleSignIn}>Sign In</a>
            </li>
        );
    }
}

export default Nav;