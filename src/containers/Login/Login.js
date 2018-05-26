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

  onKeyup(e){
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

  login = (username) => {
    this.props.logged(username);
  }

  handleSubmit = () => {
    let username = this.state.username
    let password = this.state.password
    let app = this.props.db.database().ref('users');
    
    app.once('value',(snapshot) => {
      if (!snapshot.hasChild(username)) {
        alert("That user does not exists");
      }
      else {
        let value = snapshot.val()
        
        if(value[username].toString() === password){
          this.login(username)
        } 
        else{
          alert("Wrong password")
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
          <h2 style={{'color':'#222','letterSpacing':'1px'}}>Unlock your world..</h2>
          <br/>
          <input 
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler}
            onKeyUp={this.onKeyup}
            placeholder="Username"
            className="LoginInput" /><br/>
          <input
            name="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            onKeyUp={this.onKeyup}
            placeholder="Password"
            className="LoginInput" /><br />
          <button className="LoginBtn" onClick={this.handleSubmit} onKeyUp></button>
        </div>
      </div>
    )
  }
}

export default Login