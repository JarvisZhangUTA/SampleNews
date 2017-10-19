import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'

import React from 'react';
import logo from './logo.png'
import './App.css';

import NewsPanel from '../NewsPanel/NewsPanel';

class App extends React.Component {
    render() {
        return (
            <div>
                <img className='logo' src={logo} alt='Sample News'/>
                <div className='container'>
                    <NewsPanel/>
                </div>
            </div>
        );
    }
}

export default App;