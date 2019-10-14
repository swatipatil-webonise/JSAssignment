import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <button><Link to="/view"></Link>Hello</button>
      </div>
    </nav>
  )
}

export default Navbar;
