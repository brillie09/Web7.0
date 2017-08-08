import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';

class App extends Component {
    render() {
        return (
          < div className = "App" >
            <Header />
          < /div>
        );
    }
}
export default App;
