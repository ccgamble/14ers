import React, { Component } from 'react';
import firebase, {signOut} from '../firebase';

class SignOut extends Component {
  render() {
    let logOut;
    if (this.props.user) {
     logOut =
      <button id="logOut-btn" onClick={() => signOut()}>
      Log Out
      </button>
    } else {
     logOut= ''
    }

  return (
    <aside className="signIn-container">
     {logOut}
    </aside>
  )
}
}

module.exports = SignOut
