import React, { Component } from 'react';
import { Link } from 'react-router';
import SignIn from './SignIn'
import SignOut from './SignOut'

class Header extends Component {
  constructor(props) {
    super(props);
		}


	render() {
	  return (
	    <header>
				<SignIn user={this.props.user}/>
				<SignOut user={this.props.user}/>
	      <Link to='/'>
					<img className="header-photo" src="../images/PEAKeasy-logo2.png" />
	      </Link>
	    </header>
	  )
	}
}

module.exports = Header
