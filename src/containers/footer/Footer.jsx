import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Address: lorum ipsum lorem ipsum , All Rights Reserved</p>
          </div> 
          <div className='gpt3__footer-links_div'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-links_div'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privecy Policy</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-links_div'>
            <h4>Get in touch</h4>
            <p>Addis Ababa, Ethiopia, Bole 21st Street</p>
            <p>+251 XXX-XXX-XXX</p>
            <p>xxx@XX.com</p>
          </div>
          </div>
          <div className='gpt3__footer-copyright'>
            <p>© 2021 GPT-3. All rights reserved.</p>
          </div>
    </div>
  )
}

export default Footer
