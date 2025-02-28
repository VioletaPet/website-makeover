import React from 'react';
import './About.css';
import BookingModal from '../BookingModal';

export const About = () => {
  return (
    <div className='about-page'>
      <div className='pink-background' id='top-section'>
        <div className='info-box'>
          <div className='info-text'>
            <h1>Über mich</h1>
            <h2>Qualifikationen & Werdegang</h2>
            <ul>
              <li><strong>Gründerin ReEnergize (seit 2023):</strong> Gesundheitsberatung, Yoga, Ayurvedische Massagen, Ernährungsberatung,<br />Coaching, psychologische Beratung, Akasha Chronik Lesungen</li>
              <li><strong>Coaching und psychologische Beratung:</strong> Ausbildung zur Heilpraktikerin für Psychotherapie (laufend)</li>
              <li><strong>Yoga Lehrerin (500h zertifiziert):</strong> Ausbildungen in Ashtanga, Hatha und weiteren Stilen (Indien)</li>
              <li><strong>Ayurvedische Massage Therapeutin:</strong> Ausbildung in Indien</li>
              <li><strong>Vegane Ernährungsberaterin:</strong> Fernstudium bei ecodemy</li>
              <li><strong>Akasha Chronik Lesungen:</strong> Intuitive Energiearbeit</li>
              <li><strong>Beruflicher Hintergrund:</strong> Studium der Betriebswirtschaftslehre, langjährige Erfahrung in Fundraising,<br />Teamleitung und Marketing</li>
              <li><strong>Sprachen:</strong> Deutsch, Englisch, Russisch</li>
            </ul>
          </div>
          <img src="/images/about-photo.jpg" alt="Foto von Elizabeth"/>
        </div>
      </div>

      <div className='white-background'>
        <p>Mein Name ist Elisabeth Rudi, und ich bin die Gründerin von ReEnergize. In meinem Studio vereine ich verschiedene Ansätze aus Bewegung, Entspannung und mentaler Arbeit, um Menschen auf ihrem Weg zu mehr Energie, Klarheit und Wohlbefinden zu begleiten.</p>
        <p>Mein eigener Weg hat mich von einem Studium der Betriebswirtschaftslehre über viele Jahre im Bereich Fundraising hin zu meiner heutigen Berufung geführt: Menschen ganzheitlich zu unterstützen. Yoga, ayurvedische Massagen und Ernährungsberatung bilden die Basis meiner Arbeit. Ergänzt wird dieses Fundament durch Coaching, psychologische Beratung und die Arbeit mit der Akasha Chronik. Jede dieser Methoden hat mir selbst in verschiedenen Lebensphasen geholfen und mich nachhaltig gestärkt - dieses Wissen und diese Erfahrung möchte ich nun weitergeben.</p>
        <p>Ich freue mich darauf, dich in meinem Studio willkommen zu heißen und dich auf deinem Weg zu begleiten.</p>
      </div>

      <div className='pink-background'>
        <div className='content-box'>
          <img src="/images/services/service/consultation2.jpg" alt="Beratungszimmer"/>
          <div className='content-text'>
            <h2>Kostenfreies Kennenlerngespräch</h2>
            <p>Ich lade Sie herzlich zu einem kostenlosen, telefonischen Kennenlerngespräch ein. In 20 Minuten haben wir die Möglichkeit, uns ganz entspannt auszutauschen. Sie können mir Ihr Anliegen schildern, erste Fragen stellen und ein Gefühl dafür bekommen, ob die Chemie zwischen uns stimmt. Dieses Gespräch ist völlig unverbindlich – es geht darum, einen ersten Eindruck voneinander zu gewinnen und gemeinsam zu schauen, wie ich Sie am besten unterstützen kann.<br />
            Ich freue mich darauf, Sie kennenzulernen! 💛</p>
            <BookingModal className='booking-modal'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
