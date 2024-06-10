import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/FootballMatches.css'
import team_1 from '../assets/team_1.png'
import team_2 from '../assets/team_2.png'
import axios from 'axios';

const FootballMatches = () => {
  const [selectedMatchId, setSelectedMatchId] = useState(null);
  const [matches, setMatches] = useState([]);
  // const [matchDetails, setMatchDetails] = useState({});

  const handleMatchClick = (matchId) => {
    setSelectedMatchId((prevMatchId) => (prevMatchId === matchId ? null : matchId));
  };


    const API_URL = import.meta.env.VITE_CHANCE_CUP_API_URL;

    const fetchMatches = async () => {
      try {
        const response = await axios.get(API_URL + '/match/list');
        if (Array.isArray(response.data.data)) {
          const matchList = response.data.data;
          const matchDetailPromises = matchList.map((match) =>
            axios.get(`${API_URL}/match/detail/${match.id}`)
          );
          const matchDetailResponses = await Promise.all(matchDetailPromises);
          const matchDetailsData = matchDetailResponses.map(response => response.data.data);
  
          const detailedMatches = matchList.map((match, index) => ({
            ...match,
            details: matchDetailsData[index],
          }));
  
          setMatches(detailedMatches);
        } else {
          console.error('Invalid API Response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    // const fetchMatches = async () => {
    //   try {
    //     const response = await axios.get(API_URL + '/match/list');
    //     if (Array.isArray(response.data.data)) {
    //       console.log("API Response:", response.data.data);
    //       setMatches(response.data.data);
    //     } else {
    //       console.error('Invalid API Response:', response.data);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching services:', error);
    //   }
    // };
    

    useEffect(() => {
      fetchMatches();
      // fetchMatchDetails;
    });

  // const selectedMatch = matches.find((match) => match.id === selectedMatchId);
  // const selectedMatch = matchDetails[selectedMatchId];

  const selectedMatch = matches.find((match) => match.id === selectedMatchId)?.details;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true, 
    centerPadding: '50px',
  };

  return (
    <div className='football-matches__container'>
        <div className='match-list__container'>
        <div style={{ '--stacks': 3 }} className='section-title'>
          {Array.from({ length: 3 }).map((_, index) => (
            <p style={{ '--index': index }} key={index}>MATCH SCHEDULE</p>
          ))}
        </div>
            <Slider {...settings} className='match-list'>
            {matches.map((match) => (
            <div key={match.id} className={`team-pair__container ${selectedMatch === match ? 'selected-one' : ''}`} onClick={() => handleMatchClick(match.id)}>
              <div className='team-pair'>
                <div className='team-pair__team'>
                  <img src={team_1} alt="team 1" />
                  <p>{match.home}</p>
                </div>
                <p className='match-scores'>{`${match.home_score} : ${match.away_score}`}</p>
                <div className='team-pair__team'>
                  <img src={team_2} alt="team 2" />
                  <p>{match.away}</p>
                </div>
              </div>
              <div className='match-time'><p>{match.date}</p></div>
            </div>
          ))}
         </Slider>
        </div>
          
        {selectedMatch && (
        <div className='selected-match__stats'>
          <table>
            <tr>
              <td>
                <div className='team-pair__team-scores'>
                <img src={team_1} alt="team 1" />
                <p>{selectedMatch.home}</p>
              </div>
              </td>

              <td>
                <div className='selected-match__scores'><p>
                {`${selectedMatch.home_score}  :  ${selectedMatch.away_score}`}
              </p></div>
              </td>

              <td>
              <div className='team-pair__team-scores'>
                <img src={team_2} alt="team 2" />
                <p>{selectedMatch.away}</p>
              </div>
              </td>
            </tr>

            {/* <tr className='goal-scorers__row'>
              <td><div className='goal-scorers'><p>mosi 14&apos; 36&apos; (2)</p><p>samuel 2&apos; 63&apos; (2)</p><p>clinton 17&apos; (1)</p><p>moses 18&apos; (1)</p></div></td>
              <td><div className='goal-scorers'><p></p></div></td>
              <td><div className='goal-scorers'><p>-</p></div></td>
            </tr> */}

            <tr className='goal-scorers__row'>
              <td>
                <div className='goal-scorers'>
                  {selectedMatch.home_goal_scorers.length > 0 ? selectedMatch.home_goal_scorers.map((scorer, index) => (
                    <p key={index}>{scorer.name}</p>
                  )) : <p>-</p>}
                </div>
              </td>
              <td>
                <div className='goal-scorers'><p></p></div>
              </td>
              <td>
                <div className='goal-scorers'>
                  {selectedMatch.away_goal_scorers.length > 0 ? selectedMatch.away_goal_scorers.map((scorer, index) => (
                    <p key={index}>{scorer.name}</p>
                  )) : <p>-</p>}
                </div>
              </td>
            </tr>

            <tr>
              <td><div className='shots'><p>{selectedMatch.home_shots || '-'}</p></div></td>
              <td><div className='shots'><p>SHOTS</p></div></td>
              <td><div className='shots'><p>{selectedMatch.away_shots || '-'}</p></div></td>
            </tr>

            <tr>
              <td><div className='shots-on-target'><p>{selectedMatch.home_shots_on_target || '-'}</p></div></td>
              <td><div className='shots-on-target'><p>SHOTS ON TARGET</p></div></td>
              <td><div className='shots-on-target'><p>{selectedMatch.away_shots_on_target || '-'}</p></div></td>
            </tr>

            <tr>
              <td><div className='passes'><p>{selectedMatch.home_passes || '-'}</p></div></td>
              <td><div className='passes'><p>PASSES</p></div></td>
              <td><div className='passes'><p>{selectedMatch.away_passes || '-'}</p></div></td>
            </tr>

            <tr>
              <td><div className='fouls'><p>{selectedMatch.home_fouls || '-'}</p></div></td>
              <td><div className='fouls'><p>FOULS</p></div></td>
              <td><div className='fouls'><p>{selectedMatch.away_fouls || '-'}</p></div></td>
            </tr>

            <tr>
              <td><div className='yellows'><p>{selectedMatch.home_yellow_cards || '-'}</p></div></td>
              <td><div className='yellows'><p>YELLOW CARDS</p></div></td>
              <td><div className='yellows'><p>{selectedMatch.away_yellow_cards || '-'}</p></div></td>
            </tr>

            <tr>
              <td><div className='reds'><p>{selectedMatch.home_red_cards || '-'}</p></div></td>
              <td><div className='reds'><p>RED CARDS</p></div></td>
              <td><div className='reds'><p>{selectedMatch.away_red_cards || '-'}</p></div></td>
            </tr>

            <tr>
              <td><div className='offsides'><p>{selectedMatch.home_offsides || '-'}</p></div></td>
              <td><div className='offsides'><p>OFFSIDES</p></div></td>
              <td><div className='offsides'><p>{selectedMatch.away_offsides || '-'}</p></div></td>
            </tr>

            <tr>
              <td><div className='corners'><p>-</p></div></td>
              <td><div className='corners'><p>CORNERS</p></div></td>
              <td><div className='corners'><p>-</p></div></td>
            </tr>
          </table>
        </div>
            )}
        
    </div>
  )
}

export default FootballMatches