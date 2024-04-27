// import React from 'react'
import '../styles/Home.css'
import NavLinks from '../components/NavLinks'
import HomeText from '../components/HomeText'
import HomeImg from '../components/HomeImg'

const Home = () => {
  return (
    <div className='fixed-bg'>
        <div className='dark-overlay'>
            <div className='cols-divide'>
            <HomeText/>
            <HomeImg/>
            </div>

            <NavLinks/>
        </div>
    </div>
  )
}

export default Home