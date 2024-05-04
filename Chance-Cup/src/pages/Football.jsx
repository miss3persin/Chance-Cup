import '../styles/Football.css'
import Navbar from '../components/Navbar'
import FootballMatches from '../components/FootballMatches'
import FootballStandings from '../components/FootballStandings'
import FootballPlayerStats from '../components/FootballPlayerStats'

const Football = () => {
  return (
    <div className='fixed-bg'>
    <div className='dark-overlay'>
        <Navbar/>
        <FootballMatches/>
        <FootballStandings/>
        <FootballPlayerStats/>
    </div>
</div>
  )
}

export default Football