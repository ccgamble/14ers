import React, { Component } from 'react';
import { Link } from 'react-router';
import SignIn from './SignIn'
import SignOut from './SignOut'

const Header = () => {
	  return (
	    <header>
	      <Link to='/'>
					<img className="header-photo" src="../images/PEAKeasy-logo2.png" />
	      </Link>
				{/* <Link to='/favorites'> */}
					<button className="favorites-link">Display Favorites</button>
				{/* </Link> */}
	    </header>
	  )
}

module.exports = Header
