import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src="/images/navbarlogo.png" alt="Logo" id="logo"/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {/* make menu disappear when section is clicked  */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Willkommen
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/uebermich' className='nav-links' onClick={closeMobileMenu}>
                Über mich
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/angebot' className='nav-links' onClick={closeMobileMenu}>
                Angebot
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/kontakt' className='nav-links' onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
