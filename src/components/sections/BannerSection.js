import React from 'react'
import '../../App.css'
import './BannerSection.css'
import banner from '../../images/banner.png'

function BannerSection () {
  return (
    <div className='banner-container' style={{ backgroundImage: `url(${banner})` }}>
      {/* <img src="/images/bannerphoto.png" alt="Banner" /> */}
      <div className="banner-section">
        <p>Lass uns deine Akkus wieder aufladen und gemeinsam mit noch mehr Leichtigkeit durch's Leben gehen!</p>
        <button className='btn btn--large'>
          Mehr erfahren
        </button>
      </div>
    </div>
  )
}

export default BannerSection;

{/* <div className='banner-container' style={{ backgroundImage: `url(${banner})` }}> */}
