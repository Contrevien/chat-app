import React from "react";
import Sender from "../../components/Sender/Sender";
import Received from "../../components/Received/Received";
import Name from "../../components/Name/Name";
import TextBox from "../TextBox/TextBox";
import "./Messages.css";
import _ from 'lodash';

class Messages extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      chats: []
    };
  }

  getData(values) {
    let messagesVal = values;
    let messages = _(messagesVal)
      .keys()
      .map(messageKey => {
        let cloned = _.clone(messagesVal[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
    this.setState({
      chats: messages
    });
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }



  componentDidMount() {
    this.scrollToBottom();
    let app = this.props.db.database().ref('chats');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  componentDidUpdate() {
    this.scrollToBottom();

  }

  render() {
    const Display = ({ chats }) => {
      if (this.state.chats.length === 0) {
        return (<div className='empty'>Say "Hi"</div>)
      } else {
        return (
          <div style={{ marginTop: "50px" }}>
            {this.state.chats.map((chat, i) => {
              if (chat.sender === this.props.me) {
                return <Sender message={chat.message} key={chat.key} />;
              } else {
                return <Received by={chat.sender} message={chat.message} key={chat.key} />;
              }
            })}
          </div>
        );
      }
    };

    return (
      <div className="Messages">
        <Name name={this.props.other} />
        <Display />
        <div style={{ height: "50px", float: "left", clear: "both" }}
          ref={(el) => { this.messagesEnd = el; }}>
        </div>
        { 
          this.props.access==="private"?<TextBox db={this.props.db} me={this.props.me} />:null
        }
      </div>
    );
  }
}

export default Messages;
