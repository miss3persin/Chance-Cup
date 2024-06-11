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
      <p>Welcome to the official page of the Landmark University Chancellor&apos;s Cup. All information regarding every sports taking place during the Cup can be found here. Have fun!</p>
    </div>
  )
}

export default HomeText