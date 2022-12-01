import React from 'react';
import './TopCard.css';
import img from '../images/logo.svg'

function TopCard() {
  return (
    <div className='topCard'>
      <div className='topCard-left'>
        <p>My balance</p>
        <h3>$921.48</h3>
      </div>
      <div className='topCard-right'>
        <img className='topCard-logo' src={img} />
      </div>
    </div>
  )
}

export default TopCard
