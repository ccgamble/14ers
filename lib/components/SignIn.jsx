import React, { Component } from 'react';
import firebase, {signIn, signOut} from '../firebase';

class SignIn extends Component {
	render() {
		let logIn;
		if (!this.props.user) {
			logIn = <button id="logIn-btn" onClick={() => signIn()}>Log In</button>
		} else {
			logIn = ""
		}

		return (
			<section className="signIn-container">
			{logIn}
			</section>
		)
		}
	}

module.exports = SignIn
