import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with Our Team</h1>
        <p>None of us,ever do great things. But we can all do small things, with great love, and together we can do something wonderful.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Place your email here' />
          <button type='button'> Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in the last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header
