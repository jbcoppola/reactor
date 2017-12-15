import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Signup extends React.Component {
    constructor(props){
      super(props);
      this.state={
      username:'',
      email:'',
      password:''
      }
     }

     handleSubmit(event) {
      event.preventDefault();
      let url = 'http://dev3.apppartner.com/Reactors/scripts/user-signup.php';

      var form = new FormData(event.target);

      return axios.post(url, form)
        .then(function (response) {
          
          this.props.history.push('/');
          console.log(response);
          console.log(response.data);
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    }
    render() {
        return (
          <div className="login-page">
          <div className='links'><p>Signup</p><Link to={'/login/'}>Login</Link></div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input className='username' name='username' type='text' placeholder='Username' onChange = {(event,newValue) => this.setState({username:newValue})}/>
              <input className='email' name='email' type="text" placeholder="Email" onChange = {(event,newValue) => this.setState({email:newValue})}/>
              <input className='password' name='password' type="password" placeholder="Password" onChange = {(event,newValue) => this.setState({password:newValue})}/>
              <button label="Submit">Sign up</button>
            </form>
          </div>
        );
      }
    }
    
    export default Signup;