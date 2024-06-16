import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';



const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Projects</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my works is pixel perfect.I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence </span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='' className=''/>
            <img src={Portfolio2} alt='' className=''/>
            <img src={Portfolio3} alt='' className=''/>
            <img src={Portfolio4} alt='' className=''/>
        </div>
    </section>
  );
}
export default Works
