// import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='navbar-main__container'>
        <div className='navbar-container'>
        <div className='site-title'><p>CHANCE CUP - 2024</p></div>
        <div className='other-links'>
            <ul>
                <li>Football</li>
                <li>Basketball</li>
                <li>Volleyball</li>
                <li>FCC</li>
                </ul>
        </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar