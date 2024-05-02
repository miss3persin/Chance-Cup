// import React from 'react'
import '../styles/FootballMatches.css'
import team_1 from '../assets/team_1.png'
import team_2 from '../assets/team_2.png'

const FootballMatches = () => {
  return (
    <div className='football-matches__container'>
        <div className='match-list__container'>
            <div className='section-title'><p>MATCH SCHEDULE</p></div>

            <div className='match-list'>
                
                <div className='team-pair'>
                  <div className='team-pair__team'>
                    <img src={team_1} alt="team 1" />
                    <p>TEAM 1</p>
                  </div>
                  <p className='match-scores'>VS</p>
                  <div className='team-pair__team'>
                    <img src={team_2} alt="team 2" />
                    <p>TEAM 2</p>
                  </div>
                </div>

                <div className='team-pair'>
                  <div className='team-pair__team'>
                    <img src={team_1} alt="team 1" />
                    <p>TEAM 1</p>
                  </div>
                  <p className='match-scores'>VS</p>
                  <div className='team-pair__team'>
                    <img src={team_2} alt="team 2" />
                    <p>TEAM 2</p>
                  </div>
                </div>

                <div className='team-pair'>
                  <div className='team-pair__team'>
                    <img src={team_1} alt="team 1" />
                    <p>TEAM 1</p>
                  </div>
                  <p className='match-scores'>VS</p>
                  <div className='team-pair__team'>
                    <img src={team_2} alt="team 2" />
                    <p>TEAM 2</p>
                  </div>
                </div>

            </div>
        </div>
        <div></div>
    </div>
  )
}

export default FootballMatches