import React, { Component } from "react";
import axios from 'axios';

class Login extends Component {
    constructor(props){
      super(props);
      this.state={
      username:'',
      password:''
      }
     }

     handleSubmit(event) {
      event.preventDefault();
      let url = 'http://dev3.apppartner.com/Reactors/scripts/add-email.php';
      var querystring = require('querystring');
      return axios.post(url, querystring.stringify({
          email: '123@aol.com'
        }), {
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded"
        }})
        .then(function (response) {
          console.log(response);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    render() {
        return (
          <div>
            <form>
              <input name='email' type="text" placeholder="enter email" onChange = {(event,newValue) => this.setState({email:newValue})}/>
              <input name='password' type="text" placeholder="enter password" onChange = {(event,newValue) => this.setState({password:newValue})}/>
              <button label="Submit" onClick={(event) => this.handleClick(event)}/>
            </form>
          </div>
        );
      }
    }
    
    export default Login;