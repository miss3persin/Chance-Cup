// import React from 'react'
import '../styles/FootballStandings.css'

const FootballStandings = () => {
  return (
    <div className='football-standings__container'>

         <div style={{'--stacks': 3}} className='section-title'>
            <p style={{'--index': 0}}>STANDINGS</p>
            <p style={{'--index': 1}}>STANDINGS</p>
            <p style={{'--index': 2}}>STANDINGS</p>
            </div>

         <div className='groupings-container'>
            <p className='group-number'>GROUP 1</p>
            <table>
            <tr className='table-header'>
            <td>Pos</td>
          <td>Team</td>
          <td>MP</td>
          <td>W</td>
          <td>D</td>
          <td>L</td>
          <td>GF</td>
          <td>GA</td>
          <td>GD</td>
          <td>Pts</td>
        </tr>

        <tr>
            <td><div className='pos-div'>1st</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>
        <tr>
            <td><div className='pos-div'>2nd</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>

        <tr>
            <td><div className='pos-div'>3rd</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>
        <tr className='exception-styling'>

            <td><div className='pos-div'>4th</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>

            </table>
         </div>

         <div className='groupings-container'>
            <p className='group-number'>GROUP 2</p>
            <table>
            <tr className='table-header'>
            <td>Pos</td>
          <td>Team</td>
          <td>MP</td>
          <td>W</td>
          <td>D</td>
          <td>L</td>
          <td>GF</td>
          <td>GA</td>
          <td>GD</td>
          <td>Pts</td>
        </tr>

        <tr>
            <td><div className='pos-div'>1st</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>
        <tr>
            <td><div className='pos-div'>2nd</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>

        <tr>
            <td><div className='pos-div'>3rd</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>
        <tr className='exception-styling'>

            <td><div className='pos-div'>4th</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>

            </table>
         </div>

         <div className='groupings-container'>
            <p className='group-number'>GROUP 3</p>
            <table>
            <tr className='table-header'>
            <td>Pos</td>
          <td>Team</td>
          <td>MP</td>
          <td>W</td>
          <td>D</td>
          <td>L</td>
          <td>GF</td>
          <td>GA</td>
          <td>GD</td>
          <td>Pts</td>
        </tr>

        <tr>
            <td><div className='pos-div'>1st</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>
        <tr>
            <td><div className='pos-div'>2nd</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>

        <tr>
            <td><div className='pos-div'>3rd</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>
        <tr className='exception-styling'>

            <td><div className='pos-div'>4th</div></td>
            <td>Comp Sci.</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            </tr>

            </table>
         </div>
    </div>
  )
}

export default FootballStandings