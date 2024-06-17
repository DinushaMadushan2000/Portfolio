import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='Logo' />
      <div className="desktopMenu">
        <Link className="detailsMenuListItem">Home</Link>
        <Link className="detailsMenuListItem">About</Link>
        <Link className="detailsMenuListItem">My Projects</Link>
        <Link className="detailsMenuListItem">Contact Me</Link>

      </div>
      <button className="desktopMenuBtn">
      <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me</button>
    </nav>
  )
}

export default Navbar;