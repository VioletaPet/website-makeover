import React from 'react';
import CardItem from '../CardItem';
import './Cards.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceRollingEyes } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <CardItem
          header={<FontAwesomeIcon icon={faFaceRollingEyes} />}
          text={
            <>
              <p>Für manche kann es sich in Schlafproblemen äußern, in <strong>Müdigkeit</strong> oder <strong>Konzentrationsschwäche</strong> durch den Tag hindurch. Und für manche ist es eine <strong>innere Unruhe</strong> und <strong>Rastlosigkeit</strong>.</p>
              <p>Die Gründe dafür können vielzählig und sehr individuell sein. Allerdings verbindet uns alle eins: Wir sind Menschen, und wir funktionieren alle ähnlich.</p>
              <p>Ohne regelmäßig in unsere <strong>mentale</strong> und <strong>körperliche Gesundheit</strong> zu <strong>investieren</strong>, wird langfristig ein Leben voller Fülle und freier Energie schwer möglich sein.</p>
              <p>Doch zwischen dem Alltagsstress ist es manchmal nicht so einfach, sich dafür Kapazitäten einzuräumen.</p>
            </>
          }
        />
        <CardItem
          header={<FontAwesomeIcon icon={faFaceSmileWink} />}
          text={
            <>
              <p>Deshalb findest du in meinem Studio verschiedene Wege, die dich <strong>genau dort abholen, wo du gerade stehst</strong>. Egal, ob dein Körper nach <strong>Bewegung</strong> ruft, deine Seele nach <strong>Entspannung</strong> sucht, oder dein Geist nach <strong>Klarheit</strong> verlangt - hier ist Raum für all das.</p>
              <p>Mein Angebot reicht von <strong>Yoga</strong>, ayurvedischer <strong>Massage</strong> und <strong>Ernährungsberatung</strong> bis hin zu <strong>lösungsfokussiertem Coaching</strong>, <strong>psychologischer Beratung</strong> und <strong>Akasha Chronik Lesungen</strong> - <strong>individuell an deine Bedürfnisse angepasst</strong>.</p>
              <p>Du kannst mein Studio somit als <strong>„Aufladestation“</strong> für deine persönlichen Akkus sehen.</p>
            </>
          }
        />
      </div>
      <div className="cards__container">
        <CardItem
          header={<FontAwesomeIcon icon={faToolbox} />}
          text={
            <>
              <p>Meine Mission ist es, dich mit mehr Energie zu verabschieden, als ich dich empfangen hab, und dir stets einen Mehrwert mitzugeben, den du unmittelbar in deinem Alltag spürst.</p>
            </>
          }
        />
      </div>
    </div>
  )
}

export default Cards
