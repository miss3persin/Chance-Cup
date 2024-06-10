import { useState, useEffect } from 'react';
import '../styles/FootballTeams.css'
import axios from 'axios';

const FootballTeams = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teams, setTeams] = useState([]);

  const API_URL = import.meta.env.VITE_CHANCE_CUP_API_URL;

// const teamsData = [
//   {
//     name: 'Team 1',
//     members: {
//       forwards: ['Player 1', 'Player 2'],
//       midfielders: ['Player 3', 'Player 4'],
//       defenders: ['Player 5', 'Player 6'],
//       goalkeepers: ['Player 7', 'Player 8'],
//       coaches: ['Coach 1', 'Coach 2']
//     }
//   },
//   {
//     name: 'Team 2',
//     members: {
//       forwards: ['Player A', 'Player B'],
//       midfielders: ['Player C', 'Player D'],
//       defenders: ['Player E', 'Player F'],
//       goalkeepers: ['Player G', 'Player H'],
//       coaches: ['Coach A', 'Coach B']
//     }
//   },
//   {
//     name: 'Team 3',
//     members: {
//       forwards: ['Player A', 'Player B'],
//       midfielders: ['Player C', 'Player D'],
//       defenders: ['Player E', 'Player F'],
//       goalkeepers: ['Player G', 'Player H'],
//       coaches: ['Coach A', 'Coach B']
//     }
//   },
//   {
//     name: 'Team 4',
//     members: {
//       forwards: ['Player A', 'Player B'],
//       midfielders: ['Player C', 'Player D'],
//       defenders: ['Player E', 'Player F'],
//       goalkeepers: ['Player G', 'Player H'],
//       coaches: ['Coach A', 'Coach B']
//     }
//   },
//   {
//     name: 'Team 5',
//     members: {
//       forwards: ['Player A', 'Player B'],
//       midfielders: ['Player C', 'Player D'],
//       defenders: ['Player E', 'Player F'],
//       goalkeepers: ['Player G', 'Player H'],
//       coaches: ['Coach A', 'Coach B']
//     }
//   },
//   {
//     name: 'Team 6',
//     members: {
//       forwards: ['Player A', 'Player B'],
//       midfielders: ['Player C', 'Player D'],
//       defenders: ['Player E', 'Player F'],
//       goalkeepers: ['Player G', 'Player H'],
//       coaches: ['Coach A', 'Coach B']
//     }
//   },
//   {
//     name: 'Team 7',
//     members: {
//       forwards: ['Player 1', 'Player 2'],
//       midfielders: ['Player 3', 'Player 4'],
//       defenders: ['Player 5', 'Player 6'],
//       goalkeepers: ['Player 7', 'Player 8'],
//       coaches: ['Coach 1', 'Coach 2']
//     }
//   },
//   {
//     name: 'Team 8',
//     members: {
//       forwards: ['Player A', 'Player B'],
//       midfielders: ['Player C', 'Player D'],
//       defenders: ['Player E', 'Player F'],
//       goalkeepers: ['Player G', 'Player H'],
//       coaches: ['Coach A', 'Coach B']
//     }
//   },
//   {
//     name: 'Team 9',
//     members: {
//       forwards: ['Player A', 'Player B'],
//       midfielders: ['Player C', 'Player D'],
//       defenders: ['Player E', 'Player F'],
//       goalkeepers: ['Player G', 'Player H'],
//       coaches: ['Coach A', 'Coach B']
//     }
//   },
//   {
//     name: 'Team 10',
//     members: {
//       forwards: ['Player A', 'Player B'],
//       midfielders: ['Player C', 'Player D'],
//       defenders: ['Player E', 'Player F'],
//       goalkeepers: ['Player G', 'Player H'],
//       coaches: ['Coach A', 'Coach B']
//     }
//   },
//   {
//     name: 'Team 11',
//     members: {
//       forwards: ['Player A', 'Player B'],
//       midfielders: ['Player C', 'Player D'],
//       defenders: ['Player E', 'Player F'],
//       goalkeepers: ['Player G', 'Player H'],
//       coaches: ['Coach A', 'Coach B']
//     }
//   },
//   {
//     name: 'Team 12',
//     members: {
//       forwards: ['Player A', 'Player B'],
//       midfielders: ['Player C', 'Player D'],
//       defenders: ['Player E', 'Player F'],
//       goalkeepers: ['Player G', 'Player H'],
//       coaches: ['Coach A', 'Coach B']
//     }
//   },
// ];

const fetchTeams = async () => {
  try {
    const response = await axios.get(API_URL + '/team/list');
    if (Array.isArray(response.data.data)) {
      console.log("API Response:", response.data.data);
      setTeams(response.data.data);
    } else {
      console.error('Invalid API Response:', response.data);
    }
  } catch (error) {
    console.error('Error fetching services:', error);
  }
};

const handleTeamClick = (teamShortname) => {
  if (selectedTeam === teamShortname) {
    setSelectedTeam(null);
  } else {
    setSelectedTeam(teamShortname);
  }
};

  // Divide the teams into two parts
  const splitIndex = Math.ceil(teams.length / 2);
  const firstHalf = teams.slice(0, splitIndex);
  const secondHalf = teams.slice(splitIndex);

  useEffect(() => {
    fetchTeams();
  });

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
            {firstHalf.map((team, index) => (
              <div key={index} className={`team-divs ${selectedTeam === team.shortname ? 'another-selected-one' : ''}`} onClick={() => handleTeamClick(team.shortname)}>
                <p>{team.shortname}</p>
              </div>
            ))}
          </div>
          <div className='team-list__container-1'>
            {secondHalf.map((team, index) => (
              <div key={index} className={`team-divs ${selectedTeam === team.shortname ? 'another-selected-one' : ''}`} onClick={() => handleTeamClick(team.shortname)}>
                <p>{team.shortname}</p>
              </div>
            ))}
          </div>

          </div>
            
          <div className='team-members__container'>

          {selectedTeam ? (
            <>
              <div className='team-name'><p>{selectedTeam}</p></div>
              <div className='team-members__position'>
                {Object.entries(teams.find(team => team.shortname === selectedTeam).players).map(([position, players]) => (
                  <>
                  <div key={position}>
                    <h1 className='position-title'>{position.toUpperCase()}</h1>
                    {players.length > 0 ? (
                      players.map((player, index) => (
                        <p key={index}>{player}</p>
                      ))
                    ) : (
                      <p>No players in this position</p>
                    )}
                  </div>
                    {/* <div>
                  <h1 className='position-title'>COACH</h1>
                  <p>{teams.find(team => team.shortname === selectedTeam).coach}</p>
                </div> */}
                  </>
                ))}
              </div>
            </>
          ) : (
            <p className='select-a-team'>SELECT A TEAM</p>
          )}



          </div>
      </div>
    </div>
  )
}

export default FootballTeams