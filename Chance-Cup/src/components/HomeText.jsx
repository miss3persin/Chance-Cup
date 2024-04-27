// import { useEffect, useState } from 'react';
import '../styles/HomeText.css'

const HomeText = () => {


  return (
    <div className='home-text__container'>
      <div style={{'--stacks': 3}} className='chance-cup__header'>
      <h1 style={{'--index': 0}}>Chance Cup - 2024</h1>
      <h1 style={{'--index': 1}}>Chance Cup - 2024</h1>
      <h1 style={{'--index': 2}}>Chance Cup - 2024</h1>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim pharetra mollis. Quisque dignissim faucibus leo. Sed a pellentesque velit.</p>
    </div>
  )
}

export default HomeText