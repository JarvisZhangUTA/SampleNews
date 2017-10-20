import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'

import React from 'react';
import logo from './logo.png';
import './Nav.css';

class Nav extends React.Component {

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
               <a>???</a>
            </li>
        );
    }
}

export default Nav;