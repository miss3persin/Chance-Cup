import '../styles/Football.css'
import Navbar from '../components/Navbar'
import FootballMatches from '../components/FootballMatches'
import FootballStandings from '../components/FootballStandings'
import FootballPlayerStats from '../components/FootballPlayerStats'
import FootballTeams from '../components/FootballTeams'
import FootballStreaming from '../components/FootballStreaming'
import Footer from '../components/Footer'

const Football = () => {
  return (
    <div className='fixed-bg'>
    {/* <div className='some-overlay'> </div> */}
      <div className='dark-overlay'>
        <Navbar/>
        <FootballMatches/>
        <FootballStreaming/>
        <FootballStandings/>
        <FootballPlayerStats/>
        <FootballTeams/>
        <Footer/>

    </div>
</div>
  )
}

export default Football