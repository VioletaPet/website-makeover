import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './ReviewSection.scss';

const reviews = [
  {
    id: 1,
    text: "Meine Erfahrungen mit Elisabeth's veganer Ernährungsberatung sind noch heute von vielen schönen Erinnerungen geprägt: Die Sessions waren immer auf die Bedürfnisse und die Ausgangslage vo mir zu Grunde gelegt. Sie hatte ein positives Mindset und mit viel Fachwissen, sowie Empathie, wurden die Gespräche gestaltet. Mit viel Freundlichkeit und respektvoller Atmosphäre konnte Vertrauen aufgebaut werden und die Motivation für eine neue Ernährungsweise, insbesondere die veganen Feinheiten, gestaltet werden. Eine Empfehlung!",
    author: "Franzi"
  },
  {
    id: 2,
    text: "Sonntag, Zeit für mich. Kein Problem, Elli macht es möglich. Ich als zweifache Mama genieße die sonntägliche Yogaeinheit sehr. Elli bietet mir Raum und Zeit zur Entspannung und die Bewegungen wirken sich positiv auf meinen ganzen Körper aus. Ihre freundliche und einfühlsame Art gibt mir das Gefühl der absoluten Akzeptanz meines Seins. Sie geht auf alle Wünsche ein und berücksichtigt die verschiedenen körperlichen Wehwehchen. Somit ist die Yogastunde immer eine Wohltat für meine Hüfte, Rücken und Nacken. Ich bin ein Yogaprofi und manche Yogaposen fallen mir nicht so leicht. Aber Elli geht auf einen ein und zeigt verschiedene Varianten, die jeder schaffen kann. Ich freu mich immer wieder auf so viel Herzlichkeit in gemütlicher Atmosphäre.",
    author: "Steffi"
  },
  {
    id: 3,
    text: "Eine wunderbar intensive Massage, die von Elisabeth gut an die individuellen Bedürfnisse angepasst wird. Bei mir trägt sie nicht nur zum Wohlbefinden bei, sondern verbessert auch die Beweglichtkeit und lindert Schmerzen. Aus meiner Sicht ideal, um sich etwas Gutes zu tun.",
    author: "Elizabeth"
  }
]

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // making the carousel change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='carousel-container'>
      <h2 className='carousel-header'>Gemeinsam zu mehr Wohlbefinden</h2>

      <div className='carousel-card'>
        <button
          onClick={previousSlide}
          className='nav-button nav-button-left'
          aria-label='Previous review'
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className='nav-button nav-button-right'
          aria-label='Next review'
        >
          <ChevronRight/>
        </button>

        <div className='review-content'>
          <p className='review-text'>{reviews[currentIndex].text}</p>

          <div className='review-author'>
            <p>{reviews[currentIndex].author}</p>
          </div>
        </div>

        <div className='dot-indicators'>
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`dot ${index === currentIndex ? 'dot-active' : ''}`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
