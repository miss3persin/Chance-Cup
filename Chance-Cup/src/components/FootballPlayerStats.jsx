import { useState, useEffect } from 'react';
import '../styles/FootBallPlayerStats.css'
import axios from 'axios';

const FootballPlayerStats = () => {
    const [goalScorers, setGoalScorers] = useState([]);
    const [assisters, setAssisters] = useState([]);

    const API_URL = import.meta.env.VITE_CHANCE_CUP_API_URL;

    const fetchGoalScorers = async () => {
        try {
          const response = await axios.get(API_URL + '/player/list', {
            params: { event: 'goal' }
          });
          if (response.data && response.data.data) {
            const sortedGoalScorers = Object.entries(response.data.data).sort(
                ([, a], [, b]) => b.goal - a.goal
              );
              setGoalScorers(sortedGoalScorers);
          } else {
            console.error('Invalid API Response:', response.data);
          }
        } catch (error) {
          console.error('Error fetching goal scorers:', error);
        }
      };
    
      const fetchAssisters = async () => {
        try {
          const response = await axios.get(API_URL + '/player/list', {
            params: { event: 'assist' }
          });
          if (response.data && response.data.data) {
            const sortedAssisters = Object.entries(response.data.data).sort(
                ([, a], [, b]) => b.assist - a.assist
              );
              setAssisters(sortedAssisters);
          } else {
            console.error('Invalid API Response:', response.data);
          }
        } catch (error) {
          console.error('Error fetching assisters:', error);
        }
      };

      useEffect(() => {
        fetchGoalScorers();
        fetchAssisters();
      });

  return (
    <div className='player-stats__container'>
       <div style={{ '--stacks': 3 }} className='section-title'>
          {Array.from({ length: 3 }).map((_, index) => (
            <p style={{ '--index': index }} key={index}>PLAYER STATS</p>
          ))}
        </div>

        {/* <div className='actual-player-stats'>
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
        </div> */}


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
            <tbody >
              {goalScorers.map(([player, stats], index) => (
                <tr key={index}>
                  <td>{player}</td>
                  <td>{stats.team}</td>
                  <td>{stats.goal}</td>
                </tr>
              ))}
            </tbody>
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
            <tbody>
              {assisters.map(([player, stats], index) => (
                <tr key={index}>
                  <td>{player}</td>
                  <td>{stats.team}</td>
                  <td>{stats.assist}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FootballPlayerStats