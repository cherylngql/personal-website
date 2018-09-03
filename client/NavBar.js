import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="nav-container">
      <Link to={'/'}><p className="home-link">Cheryl Ng</p><img id="icon" src="icon.png"/></Link>
      <Link to={'/about'}><p className="nav-link">About Me</p></Link>
      <Link to={'/projects'}><p className="nav-link">Projects</p></Link>
      <Link to={'/contact'}><p className="nav-link">Contact</p></Link>
    </div>
  )
}

export default NavBar