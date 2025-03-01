import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

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
              <Link to='/über-mich' className='nav-links' onClick={closeMobileMenu}>
                Über mich
              </Link>
            </li>

            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to='/angebot' className='nav-links' onClick={closeMobileMenu}>
                Angebot <i className='fas fa-caret-down' />
              </Link>

              {dropdown && (
                <ul className='dropdown-menu'>
                  <li>
                    <Link to='/angebot/coaching' className='dropdown-link' onClick={closeMobileMenu}>
                      Lösungsfokussiertes Coaching
                    </Link>
                  </li>
                  <li>
                    <Link to='/angebot/psychologische-beratung' className='dropdown-link' onClick={closeMobileMenu}>
                      Psychologische Beratung
                    </Link>
                  </li>
                  <li>
                    <Link to='/angebot/akasha' className='dropdown-link' onClick={closeMobileMenu}>
                      Akasha Chronik
                    </Link>
                  </li>
                  <li>
                    <Link to='/angebot/ernährungsberatung' className='dropdown-link' onClick={closeMobileMenu}>
                      Ernährungsberatung
                    </Link>
                  </li>
                  <li>
                    <Link to='/angebot/yoga' className='dropdown-link' onClick={closeMobileMenu}>
                      Yoga
                    </Link>
                  </li>
                </ul>
              )}
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
  );
}

export default Navbar
