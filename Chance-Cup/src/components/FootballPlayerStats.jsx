// import React from 'react'
import '../styles/FootBallPlayerStats.css'

const FootballPlayerStats = () => {
  return (
    <div className='player-stats__container'>
       <div style={{ '--stacks': 3 }} className='section-title'>
          {Array.from({ length: 3 }).map((_, index) => (
            <p style={{ '--index': index }} key={index}>PLAYER STATS</p>
          ))}
        </div>

        <div className='actual-player-stats'>
        <div className='goal-list__container'>
            <div className='goal-list__title'><p>PLAYER GOALS</p></div>

            <table>
            <tr className='table-header'>
                    <td>Player</td>
                    <td>Team</td>
                    <td>Goals</td>
                </tr>

            </table>
            
            <div className='goal-list__table'>
            <table>
                <tr>
                    <td>MOSI</td>
                    <td>COMP SCI.</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>MOSI</td>
                    <td>COMP SCI.</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>MOSI</td>
                    <td>COMP SCI.</td>
                    <td>2</td>
                </tr>

            </table>
            </div>
        </div>

        <div className='assist-list__container'>
        <div className='assist-list__title'><p>PLAYER ASSISTS</p></div>

        <table>
        <tr className='table-header'>
                <td>Player</td>
                <td>Team</td>
                <td>Assists</td>
            </tr>
        </table>

        <div className='assist-list__table'>
        <table>


            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
            <tr>
                <td>MOSI</td>
                <td>Comp Sci.</td>
                <td>2</td>
            </tr>
        </table>
        </div>
        </div>
        </div>
    </div>
  )
}

export default FootballPlayerStats