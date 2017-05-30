import React, { Component } from 'react';
import { Link } from 'react-router';
import SignIn from './SignIn'
import SignOut from './SignOut'

const Header = () => {
	  return (
	    <header>
	      <Link to='/'>
					<img className="header-photo" src="../public/images/PEAKeasy-logo2.png" />
	      </Link>
	    </header>
	  )
}

module.exports = Header
