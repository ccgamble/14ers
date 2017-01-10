import React, { Component } from 'react';
import { Link } from 'react-router';
import SignIn from './SignIn'
import SignOut from './SignOut'

class Header extends Component {
  constructor() {
    super();
	}

	render() {
	  return (
	    <header>
		
	      <Link to='/'>
					<img className="header-photo" src="../images/PEAKeasy-logo2.png" />
	      </Link>
	    </header>
	  )
	}
}

module.exports = Header
