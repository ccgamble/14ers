import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <Link to='/'>
				<img className="header-photo" src="../images/PEAKeasy-logo2.png" />
      </Link>
    </header>
  )
}

module.exports = Header
