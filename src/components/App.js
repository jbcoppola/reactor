import React, { Component } from 'react';
import Main from './views/Main';
import Login from './views/login';
import Signup from './views/signup';

class App extends React.Component {
    render() {
        return (
            <div>
            {this.props.children}
          </div>
        )
    }
}

export default App;