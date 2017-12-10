import React from 'react';

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
        url: 'http://dev3.apppartner.com/Reactors/scripts/add-email.php';
        return axios.post(url, {
            email: this.state.email
          })
          .then(function (response) {
            console.log(response);
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
                <input type='text' value={this.state.email} placeholder='Your Email' /><button type='submit'>Subscribe</button>
                </form>
            </div>
            )
    }
}

export default Subscription;