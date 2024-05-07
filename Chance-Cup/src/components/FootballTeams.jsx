import { useState } from 'react';
import '../styles/FootballTeams.css'

const FootballTeams = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

const teamsData = [
  {
    name: 'Team 1',
    members: {
      forwards: ['Player 1', 'Player 2'],
      midfielders: ['Player 3', 'Player 4'],
      defenders: ['Player 5', 'Player 6'],
      goalkeepers: ['Player 7', 'Player 8'],
      coaches: ['Coach 1', 'Coach 2']
    }
  },
  {
    name: 'Team 2',
    members: {
      forwards: ['Player A', 'Player B'],
      midfielders: ['Player C', 'Player D'],
      defenders: ['Player E', 'Player F'],
      goalkeepers: ['Player G', 'Player H'],
      coaches: ['Coach A', 'Coach B']
    }
  },
  {
    name: 'Team 3',
    members: {
      forwards: ['Player A', 'Player B'],
      midfielders: ['Player C', 'Player D'],
      defenders: ['Player E', 'Player F'],
      goalkeepers: ['Player G', 'Player H'],
      coaches: ['Coach A', 'Coach B']
    }
  },
  {
    name: 'Team 4',
    members: {
      forwards: ['Player A', 'Player B'],
      midfielders: ['Player C', 'Player D'],
      defenders: ['Player E', 'Player F'],
      goalkeepers: ['Player G', 'Player H'],
      coaches: ['Coach A', 'Coach B']
    }
  },
  {
    name: 'Team 5',
    members: {
      forwards: ['Player A', 'Player B'],
      midfielders: ['Player C', 'Player D'],
      defenders: ['Player E', 'Player F'],
      goalkeepers: ['Player G', 'Player H'],
      coaches: ['Coach A', 'Coach B']
    }
  },
  {
    name: 'Team 6',
    members: {
      forwards: ['Player A', 'Player B'],
      midfielders: ['Player C', 'Player D'],
      defenders: ['Player E', 'Player F'],
      goalkeepers: ['Player G', 'Player H'],
      coaches: ['Coach A', 'Coach B']
    }
  },
  {
    name: 'Team 7',
    members: {
      forwards: ['Player 1', 'Player 2'],
      midfielders: ['Player 3', 'Player 4'],
      defenders: ['Player 5', 'Player 6'],
      goalkeepers: ['Player 7', 'Player 8'],
      coaches: ['Coach 1', 'Coach 2']
    }
  },
  {
    name: 'Team 8',
    members: {
      forwards: ['Player A', 'Player B'],
      midfielders: ['Player C', 'Player D'],
      defenders: ['Player E', 'Player F'],
      goalkeepers: ['Player G', 'Player H'],
      coaches: ['Coach A', 'Coach B']
    }
  },
  {
    name: 'Team 9',
    members: {
      forwards: ['Player A', 'Player B'],
      midfielders: ['Player C', 'Player D'],
      defenders: ['Player E', 'Player F'],
      goalkeepers: ['Player G', 'Player H'],
      coaches: ['Coach A', 'Coach B']
    }
  },
  {
    name: 'Team 10',
    members: {
      forwards: ['Player A', 'Player B'],
      midfielders: ['Player C', 'Player D'],
      defenders: ['Player E', 'Player F'],
      goalkeepers: ['Player G', 'Player H'],
      coaches: ['Coach A', 'Coach B']
    }
  },
  {
    name: 'Team 11',
    members: {
      forwards: ['Player A', 'Player B'],
      midfielders: ['Player C', 'Player D'],
      defenders: ['Player E', 'Player F'],
      goalkeepers: ['Player G', 'Player H'],
      coaches: ['Coach A', 'Coach B']
    }
  },
  {
    name: 'Team 12',
    members: {
      forwards: ['Player A', 'Player B'],
      midfielders: ['Player C', 'Player D'],
      defenders: ['Player E', 'Player F'],
      goalkeepers: ['Player G', 'Player H'],
      coaches: ['Coach A', 'Coach B']
    }
  },
];

const handleTeamClick = (team) => {
  if (selectedTeam === team) {
    setSelectedTeam(null);
  } else {
    setSelectedTeam(team);
  }
};

  // Divide the teamsData into two parts
  const splitIndex = Math.ceil(teamsData.length / 2);
  const firstHalf = teamsData.slice(0, splitIndex);
  const secondHalf = teamsData.slice(splitIndex);

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
              <div key={index} className={`team-divs ${selectedTeam === team.name ? 'another-selected-one' : ''}`} onClick={() => handleTeamClick(team.name)}>
                <p>{team.name}</p>
              </div>
            ))}
          </div>
          <div className='team-list__container-1'>
            {secondHalf.map((team, index) => (
              <div key={index} className={`team-divs ${selectedTeam === team.name ? 'another-selected-one' : ''}`} onClick={() => handleTeamClick(team.name)}>
                <p>{team.name}</p>
              </div>
            ))}
          </div>

          </div>
            
          <div className='team-members__container'>

          {selectedTeam ? (
            <>
              <div className='team-name'><p>{selectedTeam}</p></div>
              <div className='team-members__position'>
                {Object.entries(teamsData.find(team => team.name === selectedTeam).members).map(([position, players]) => (
                  <div key={position}>
                    <h1 className='position-title'>{position.toUpperCase()}</h1>
                    {players.map((player, index) => (
                      <p key={index}>{player}</p>
                    ))}
                  </div>
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