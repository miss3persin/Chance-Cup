import { useRef, useState } from 'react';
import '../styles/Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  const messageBoxRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
    if (messageBoxRef.current) {
        messageBoxRef.current.style.display = 'block';
    }
  };

  const handleMouseLeave = () => {
    if (messageBoxRef.current) {
      setVisible(false);
      messageBoxRef.current.style.display = 'none';
      // setTimeout(() => {
      // }, 350);
    }
  };

  return (
    <nav>
        <div className='navbar-main__container'>
        <div className='navbar-container'>
        <div className='site-title'><Link to={`/`}><p>CHANCE CUP - 2024</p></Link></div>
        <div className='other-links'>
            <ul>
            <Link to={`/football`}><li>Football</li></Link>
            <Link to={`/basketball`}><li>Basketball</li></Link>
            <Link to={`/volleyball`}><li>Volleyball</li></Link>
                <li className='fcc-navbar' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>FCC
                <div className={`nav-message-box ${visible ? 'new-visible' : ''}`} ref={messageBoxRef}>
          COMING SOON...
        </div>
                </li>
                </ul>
        </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar