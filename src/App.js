import React from "react";
import * as firebase from "firebase";
import Messages from "./containers/Messages/Messages";
import Login from "./containers/Login/Login";


class App extends React.Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCqtYTnKLYe9rNCt0j5Xc302fpj4tMTDk4",
        authDomain: "react-chat-contrevien.firebaseapp.com",
        databaseURL: "https://react-chat-contrevien.firebaseio.com",
        projectId: "react-chat-contrevien",
        storageBucket: "react-chat-contrevien.appspot.com",
        messagingSenderId: "1009231256967"
      });
    }
  }

  state={
    verfied: false,
    me: '',
    access:'',
    other: 'Null Zone',
  }

  loginHandler = (username, x) => {
    this.setState({
      verfied: true,
      me: username,
      access: x
    })
    console.log(x);
  }

  render() {

    let view = null;

    if(this.state.verfied)
      view = <Messages db={firebase} me={this.state.me} other={this.state.other} access={this.state.access} />
    else
      view = <Login db={firebase} logged={this.loginHandler} />

    return (
      <div>
        {view}
      </div>
    );
  }
}

export default App;
