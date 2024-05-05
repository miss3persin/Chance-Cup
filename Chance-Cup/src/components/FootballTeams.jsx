// import React from 'react'
import '../styles/FootballTeams.css'

const FootballTeams = () => {
  return (
    <div className='football-teams__container'>
<div style={{ '--stacks': 3 }} className='section-title'>
          {Array.from({ length: 3 }).map((_, index) => (
            <p style={{ '--index': index }} key={index}>TEAMS</p>
          ))}
        </div>



      <div className='actual-football-teams__container'>

          <div className='team-list__container'>

          <div className='team-list__container-1'>
            
          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>
          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>
          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>
          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>
          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>
          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>

           </div>

          <div className='team-list__container-1'>

          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>
          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>
          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>
          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>
          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>
          <div className='team-divs'>
          <p>COMP SCI.</p>
           </div>

           </div>

          </div>
            
          <div className='team-members__container'>
          <div className='team-name'><p>COMP SCI.</p></div>

          <div className='team-members__position'>
            <h1 className='position-title'>FORWARDS</h1>
            <p>mosi</p>
            <p>mosi</p>
            <p>mosi</p>
            <p>mosi</p>

            <h1 className='position-title'>MIDFIELDERS</h1>
            <p>mosi</p>
            <p>mosi</p>
            <p>mosi</p>
            <p>mosi</p>

            <h1 className='position-title'>DEFENDERS</h1>
            <p>mosi</p>
            <p>mosi</p>
            <p>mosi</p>
            <p>mosi</p>

            <h1 className='position-title'>GOALKEEPERS</h1>
            <p>mosi</p>
            <p>mosi</p>
            <p>mosi</p>
            <p>mosi</p>

            <h1 className='position-title'>COACHES</h1>
            <p>mosi</p>
            <p>mosi</p>
            <p>mosi</p>
            <p>mosi</p>
          </div>


          </div>
      </div>
    </div>
  )
}

export default FootballTeams