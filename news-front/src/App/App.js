import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'

import React from 'react';
import './App.css';

import Nav from '../Nav/Nav';
import NewsPanel from '../NewsPanel/NewsPanel';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="container">
                    <NewsPanel/>
                </div>
            </div>
        );
    }
}

export default App;