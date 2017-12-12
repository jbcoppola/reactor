import React from 'react';
import axios from 'axios';

class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({email: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        let url = 'http://dev3.apppartner.com/Reactors/scripts/add-email.php';
        var form = new FormData();
        form.append('email', this.state.email);

        return axios.post(url, form)
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
            <div className="subscription">
                <div>
                <h1>Subscribe to newsletter</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.email} placeholder='Your Email' onChange={this.handleChange}/><button type='submit'>Subscribe</button>
                </form>
            </div>
            )
    }
}

export default Subscription;