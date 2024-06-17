import React,{ useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='Logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="detailsMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="detailsMenuListItem">About Me</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-120} duration={500} className="detailsMenuListItem">My Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="detailsMenuListItem">Contact Me</Link>

      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
      }}>
      <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me</button>


      <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex' : 'none '}} >
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About Me</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-120} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>My Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>

      </div>

    </nav>
  );
}

export default Navbar;