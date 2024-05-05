import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/FootballMatches.css'
import team_1 from '../assets/team_1.png'
import team_2 from '../assets/team_2.png'

const FootballMatches = () => {
  const [selectedMatchId, setSelectedMatchId] = useState(null);

  const handleMatchClick = (matchId) => {
    setSelectedMatchId((prevMatchId) => (prevMatchId === matchId ? null : matchId));
  };

  const matches = [
    { id: 1, team1: team_1, team2: team_2, score: '6 : 0', date: '04 MAY 2024' },
    { id: 2, team1: team_1, team2: team_2, score: '10 : 10', date: '04 MAY 2024' },
    { id: 3, team1: team_1, team2: team_2, score: '0 : 1', date: '04 MAY 2024' },
    // { id: 4, team1: team_1, team2: team_2, score: '2 : 1', date: '04 MAY 2024' },
    // Add more matches as needed
  ];

  const selectedMatch = matches.find((match) => match.id === selectedMatchId);

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
            <div style={{'--stacks': 3}} className='section-title'>
            <p style={{'--index': 0}}>MATCH SCHEDULE</p>
            <p style={{'--index': 1}}>MATCH SCHEDULE</p>
            <p style={{'--index': 2}}>MATCH SCHEDULE</p>
            </div>


            <Slider {...settings} className='match-list'>
            {matches.map((match) => (
            <div key={match.id} className='team-pair__container' onClick={() => handleMatchClick(match.id)}>
              <div className='team-pair'>
                <div className='team-pair__team'>
                  <img src={match.team1} alt="team 1" />
                  <p>TEAM 1</p>
                </div>
                <p className='match-scores'>{match.score}</p>
                <div className='team-pair__team'>
                  <img src={match.team2} alt="team 2" />
                  <p>TEAM 2</p>
                </div>
              </div>
              <div className='match-time'><p>{match.date}</p></div>
            </div>
          ))}

                {/* <div className='team-pair__container'>
                  <div className='team-pair'>
                  <div className='team-pair__team'>
                    <img src={team_1} alt="team 1" />
                    <p>TEAM 1</p>
                  </div>
                  <p className='match-scores'>6 : 0</p>
                  <div className='team-pair__team'>
                    <img src={team_2} alt="team 2" />
                    <p>TEAM 2</p>
                  </div>
                  </div>
                  <div className='match-time'><p>04 MAY 2024</p></div>
                </div>

                <div className='team-pair__container'>
                  <div className='team-pair'>
                  <div className='team-pair__team'>
                    <img src={team_1} alt="team 1" />
                    <p>TEAM 1</p>
                  </div>
                  <p className='match-scores'>10 : 10</p>
                  <div className='team-pair__team'>
                    <img src={team_2} alt="team 2" />
                    <p>TEAM 2</p>
                  </div>
                  </div>
                  <div className='match-time'><p>04 MAY 2024</p></div>
                </div>

                <div className='team-pair__container'>
                  <div className='team-pair'>
                  <div className='team-pair__team'>
                    <img src={team_1} alt="team 1" />
                    <p>TEAM 1</p>
                  </div>
                  <p className='match-scores'>0 : 1</p>
                  <div className='team-pair__team'>
                    <img src={team_2} alt="team 2" />
                    <p>TEAM 2</p>
                  </div>
                  </div>
                  <div className='match-time'><p>04 MAY 2024</p></div>
                </div> */}


          </Slider>
        </div>
          
        {selectedMatch && (
        <div className='selected-match__stats'>
          <table>
            <tr>
              <td>
                <div className='team-pair__team-scores'>
                <img src={team_1} alt="team 1" />
                <p>TEAM 1</p>
              </div>
              </td>

              <td>
                <div className='selected-match__scores'><p>
                {selectedMatch.score}
              </p></div>
              </td>

              <td>
              <div className='team-pair__team-scores'>
                <img src={team_2} alt="team 2" />
                <p>TEAM 2</p>
              </div>
              </td>
            </tr>

            <tr className='goal-scorers__row'>
              <td><div className='goal-scorers'><p>mosi 14&apos; 36&apos; (2)</p><p>samuel 2&apos; 63&apos; (2)</p><p>clinton 17&apos; (1)</p><p>moses 18&apos; (1)</p></div></td>
              <td><div className='goal-scorers'><p></p></div></td>
              <td><div className='goal-scorers'><p>-</p></div></td>
            </tr>

            <tr>
              <td><div className='shots'><p>16</p></div></td>
              <td><div className='shots'><p>SHOTS</p></div></td>
              <td><div className='shots'><p>16</p></div></td>
            </tr>

            <tr>
              <td><div className='shots-on-target'><p>16</p></div></td>
              <td><div className='shots-on-target'><p>SHOTS ON TARGET</p></div></td>
              <td><div className='shots-on-target'><p>16</p></div></td>
            </tr>

            <tr>
              <td><div className='passes'><p>16</p></div></td>
              <td><div className='passes'><p>PASSES</p></div></td>
              <td><div className='passes'><p>16</p></div></td>
            </tr>

            <tr>
              <td><div className='fouls'><p>16</p></div></td>
              <td><div className='fouls'><p>FOULS</p></div></td>
              <td><div className='fouls'><p>16</p></div></td>
            </tr>

            <tr>
              <td><div className='yellows'><p>16</p></div></td>
              <td><div className='yellows'><p>YELLOW CARDS</p></div></td>
              <td><div className='yellows'><p>16</p></div></td>
            </tr>

            <tr>
              <td><div className='reds'><p>16</p></div></td>
              <td><div className='reds'><p>RED CARDS</p></div></td>
              <td><div className='reds'><p>16</p></div></td>
            </tr>

            <tr>
              <td><div className='offsides'><p>16</p></div></td>
              <td><div className='offsides'><p>OFFSIDES</p></div></td>
              <td><div className='offsides'><p>16</p></div></td>
            </tr>

            <tr>
              <td><div className='corners'><p>16</p></div></td>
              <td><div className='corners'><p>CORNERS</p></div></td>
              <td><div className='corners'><p>16</p></div></td>
            </tr>
          </table>
        </div>
            )}
        
    </div>
  )
}

export default FootballMatches