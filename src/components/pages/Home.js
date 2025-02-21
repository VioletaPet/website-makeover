import React from 'react';
import '../../App.css'
import BannerSection from '../sections/BannerSection'
import WelcomeSection from '../sections/WelcomeSection';
import IntroSection from '../sections/IntroSection';
import Cards from '../sections/Cards';
import OutroSection from '../sections/OutroSection';
import ReviewSection from '../sections/ReviewSection';

function Home () {

  return (
    <>
      <BannerSection />
      <WelcomeSection />
      <IntroSection />
      <Cards />
      <OutroSection />
      <ReviewSection />
    </>
  )
}

export default Home;
