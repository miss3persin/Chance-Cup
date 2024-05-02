import '../styles/Football.css'
import Navbar from '../components/Navbar'
import FootballMatches from '../components/FootballMatches'

const Football = () => {
  return (
    <div className='fixed-bg'>
    <div className='dark-overlay body-padding'>
        <Navbar/>
        <FootballMatches/>
    </div>
</div>
  )
}

export default Football