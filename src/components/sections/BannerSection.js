import React from 'react';
import '../../App.css';
import './BannerSection.css';
import banner from '../../images/banner.png';
import { Link } from 'react-router-dom';

function BannerSection () {
  return (
    <div className='banner-container' style={{ backgroundImage: `url(${banner})` }}>
      <div className="banner-section">
        <p>Lass uns deine Akkus wieder aufladen und gemeinsam mit noch mehr Leichtigkeit durch's Leben gehen!</p>
          <Link to='/angebot'>
          <button className='btn btn--large'>
            Mehr erfahren
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BannerSection;
