import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/views/Main';
import Login from './components/views/login';
import Signup from './components/views/signup';
import routes from './routes';

const Root = () => {
    return (
    <BrowserRouter>
        <div>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        </div>
    </BrowserRouter>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));