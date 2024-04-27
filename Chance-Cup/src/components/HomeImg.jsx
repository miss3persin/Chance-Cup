// import React from 'react'
import '../styles/HomeImg.css'
import abstract_bg from '../assets/abstract_bg.svg'
import player_img from '../assets/main_img_bg.png'

const HomeImg = () => {
  return (
    <div className='home-img__container'>
      {/* <div className='image-container'> */}
      <img src={abstract_bg} className='abstract_bg' alt="" />
      <img src={player_img} className='player_bg' alt="" />
      </div>
    // </div>
  )
}

export default HomeImg