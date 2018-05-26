import React from 'react'
import Radium from 'radium'
import send from '../../assets/send.svg'
import './TextBox.css'
import trim from 'trim'


const containerStyles = {
  'position': 'fixed',
  'width': '100%',
  'textAlign': 'center',
  'bottom':'30px',
}

const inputStyles = {
  'width':'calc(85% - 30px)',
  'height': '50px',
  'marginRight': '30px',
  'paddingLeft' : '30px',
  'paddingRight': '30px',
  'boxShadow': '5px 5px 20px 3px #ddd',
  'fontFamily':'Josefin Sans',
  'letterSpacing': '0.7px',
  'fontSize': '15px',
  'borderRadius': '50px',
  'border':'1px solid #ddd',
  ':focus':{
    'outline':'none',
    'boxShadow':'5px 5px 20px 3px #999',

  },
}

class TextBox extends React.Component{
  
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: ''
    };
  }
  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  onKeyup(e) {
    if (e.keyCode === 13 && trim(e.target.value) !== '') {
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/chats');
      dbCon.push({
        message: trim(e.target.value),
        sender: this.props.me,
      });
      this.setState({
        message: ''
      });
    }
  }

  send = (e) => {
    e.preventDefault();
    let dbCon = this.props.db.database().ref('/chats');
    dbCon.push({
      message: this.state.message,
      sender: this.props.me,
    });
    this.setState({
      message: ''
    });
  }

  render(){
    return(
      <div style={containerStyles}>
        <input type='text' 
              style={inputStyles}
              onChange={this.onChange}
              onKeyUp={this.onKeyup}
              spellCheck="false"
              value={this.state.message}
              className="TextBox"
              placeholder="Type here..." />
        
        <button className="Send" onClick={this.send}>
          <img src={send} alt="send" />
        </button>
      </div>
    )
  }
}

const ChatBox = Radium(TextBox)

export default ChatBox