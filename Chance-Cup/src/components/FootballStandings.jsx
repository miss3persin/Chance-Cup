import { useState, useEffect } from 'react';
import '../styles/FootballStandings.css'
import axios from 'axios';
import TournamentBracket from './TournamentBracket';

const FootballStandings = () => {
  // const [standings, setStandings] = useState([]);
  const [groupedStandings, setGroupedStandings] = useState({});

  const API_URL = import.meta.env.VITE_CHANCE_CUP_API_URL;


    //   const fetchStandings = async () => {
    //   try {
    //     const response = await axios.get(API_URL + '/team/list');
    //     if (Array.isArray(response.data.data)) {
    //       console.log("API Response:", response.data.data);
    //       setStandings(response.data.data);
    //     } else {
    //       console.error('Invalid API Response:', response.data);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching services:', error);
    //   }
    // };

    const fetchStandings = async () => {
      try {
        const response = await axios.get(API_URL + '/team/list');
        if (Array.isArray(response.data.data)) {
          console.log("API Response:", response.data.data);
          // setStandings(response.data.data);
  
        // Group the teams by their group number and sort them by points and goal difference
        const groups = response.data.data.reduce((acc, team) => {
          if (!acc[team.group]) {
            acc[team.group] = [];
          }
          acc[team.group].push(team);
          return acc;
        }, {});

        // Sort each group by points and then by goal difference in descending order
        Object.keys(groups).forEach(groupNumber => {
          groups[groupNumber].sort((a, b) => {
            if (b.point === a.point) {
              return b.goal_diff - a.goal_diff;
            }
            return b.point - a.point;
          });
        });

        setGroupedStandings(groups);
        } else {
          console.error('Invalid API Response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    useEffect(() => {
      fetchStandings();
    });
  return (
    <div className='football-standings__container'>

<div style={{ '--stacks': 3 }} className='section-title'>
          {Array.from({ length: 3 }).map((_, index) => (
            <p style={{ '--index': index }} key={index}>STANDINGS</p>
          ))}
        </div>

<TournamentBracket/>




        {Object.keys(groupedStandings).map((groupNumber) => (
        <div className='groupings-container' key={groupNumber}>
          <p className='group-number'>GROUP {groupNumber}</p>
          <table>
            <thead>
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
            </thead>
            <tbody className='another-styling'>
              {groupedStandings[groupNumber].map((team, index) => (
                <tr key={team.id} className={index % 2 === 0 ? '' : ''}>
                  <td><div className='pos-div'>{index + 1}</div></td>
                  <td>{team.fullname}</td>
                  <td>{team.match_played}</td>
                  <td>{team.win}</td>
                  <td>{team.draw}</td>
                  <td>{team.loss}</td>
                  <td>{team.goal_forward}</td>
                  <td>{team.goal_against}</td>
                  <td>{team.goal_diff}</td>
                  <td>{team.point}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

         {/* <div className='groupings-container'>
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
         </div> */}
    </div>
  )
}

export default FootballStandings