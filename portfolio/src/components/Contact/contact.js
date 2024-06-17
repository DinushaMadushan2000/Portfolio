import React, {useRef} from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_8p64fql', 'template_hgq3b1h', form.current, {
            publicKey: 'QO9RlQLprQyB_UCqxPZiB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


 
  return (
    <section id='contactPage'>
        <div className='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Yoiur Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button> 
                <div className='links'>
                    <img src={FacebookIcon} alt='Facebook' className='link' />
                    <img src={TwitterIcon} alt='Twitter' className='link' />
                    <img src={YouTubeIcon} alt='YouTube' className='link' />
                    <img src={InstagramIcon} alt='Instagram' className='link' />
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact