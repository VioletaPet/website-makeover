import React from 'react';
import '../../App.css'
import BannerSection from '../sections/BannerSection'
import WelcomeSection from '../sections/WelcomeSection';
import IntroSection from '../sections/IntroSection';
import Cards from '../sections/Cards';
import OutroSection from '../sections/OutroSection';

function Home () {

  return (
    <>
      <BannerSection />
      <WelcomeSection />
      <IntroSection />
      <Cards />
      <OutroSection />
    </>
  )
}

export default Home;
