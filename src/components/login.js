class Login extends Component {
    constructor(props){
      super(props);
      this.state={
      username:'',
      password:''
      }
     }
    render() {
        return (
          <div>
            <form>
              <input name='email' type="text" placeholder="enter email" onChange = {(event,newValue) => this.setState({email:newValue})}/>
              <input name='password' type="text" placeholder="enter password" onChange = {(event,newValue) => this.setState({password:newValue})}/>
              <button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
            </form>
          </div>
        );
      }
    }
    
    export default Login;