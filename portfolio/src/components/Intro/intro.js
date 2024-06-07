import React from 'react';
import './intro.css';
import bg from '../../assets/dinu.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Dinusha Madushan</span></span>
            <p className="introPara">Software Engineering Undergraduate In University Of Kelaniya,<br/>Sri Lanka. </p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className="btnImg"/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />


    </section>
    
  )
}

export default Intro;