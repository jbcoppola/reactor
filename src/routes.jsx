import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App';
import Signup from './components/views/signup';
import Login from './components/views/login';
import Main from './components/views/Main';

export default (
  <Route path='/' component={App}>
  <Route exact path="/" component={Main}/>
    <Route path='/signup' component={Signup} />
    <Route path='/login' component={Login} />
    <Route path='*' component={Main} />
  </Route>
);