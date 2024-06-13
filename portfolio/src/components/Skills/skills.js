import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';



const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>About Me</span>
        <span className='skillDisc'>I'm an individual who is studying as a Software Engineering Undergraduate who has skills in front end development , cyber security , Ghrapic designing , Planning , Co-ordinating , Communicating , TeamWorking areas. l wish to help the company to achieve their goals , objectives and wish to work towards company's vision.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
             <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p>This is a demo text,you can write your own content here.</p>
             </div>
          </div>
          <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
             <div className='skillBarText'>
              <h2>Web Design</h2>
              <p>This is a demo text,you can write your own content here.</p>
             </div>
          </div>
          <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
             <div className='skillBarText'>
              <h2>Grapic Design</h2>
              <p>This is a demo text,you can write your own content here.</p>
             </div>
          </div>
        </div>
    </section>
  );
}

export default Skills