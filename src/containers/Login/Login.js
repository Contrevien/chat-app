import React from 'react'
import './Login.css'

class Login extends React.Component {

  constructor(props){
    super(props);
    this.onKeyup = this.onKeyup.bind(this);
  }

  state={
    username: '',
    password: '',
  }

  onKeyup = (e) => {
    if(e.keyCode===13){
      this.handleSubmit()
    }
  }

  onChangeHandler = (event) => {
    let value = event.target.value
    let name = event.target.name
    this.setState({
      [name]: value
    })
  }

  login = (username, x) => {
    this.props.logged(username, x);
  }

  handleSubmit = () => {
    let app = this.props.db.database().ref('key');
    
    app.once('value',(snapshot) => {
      let value = snapshot.val();
      if(value===this.state.password){
        this.login(this.state.username, 'private');
      }
      else{
        if(this.state.password==='pigsnout'){
          this.login(this.state.username, 'public');
        }
        else{
          alert("Key is not Valid");
        }
      }
    })
    // let app = null;
    // let value = null
    //   app = this.props.db.database().ref('users')
    //   value = app.orderByChild('username').equalTo(username)
    // if(value === null)
    //   alert("iqhefie")
    // else
    //   alert(value)
    
  }

  render(){
    return(
      <div className="LoginPage">
        <div className="Login">
          <h2 style={{'color':'#222','letterSpacing':'1px'}}>Public Key: "pigsnout"</h2>
          <br/>
          <input
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler}
            onKeyUp={this.onKeyup}
            placeholder="Username"
            className="LoginInput" /><br/>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            onKeyUp={this.onKeyup}
            placeholder="Key"
            className="LoginInput" /><br />
          <button className="LoginBtn" onClick={this.handleSubmit} onKeyUp={this.onKeyup}></button>
        </div>
      </div>
    )
  }
}

export default Login