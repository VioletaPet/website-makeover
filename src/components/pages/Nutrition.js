import React from 'react';
import './Nutrition.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const Nutrition = () => {
  return (
    <div className='nutrition-page'>
      <div className='pink-background' id='top-section'>
        <div className='content'>
          <img src='/images/services/service/nutrition2.jpg' alt='Foto von Elizabeth'/>
          <div className='content-text'>
            <h1>Vegane & Vegetarische Ernährungsberatung</h1>
          </div>
        </div>
      </div>

      <div className='white-background'>
        <p>Seit über 8 Jahren lebe ich vegetarisch/vegan und habe mich auf die Ernährungsberatung in diesem Bereich spezialisiert. Aber keine Sorge:</p>
        <p><em>Ich bin nicht hier, um dir eine Ideologie aufzuzwingen.</em></p>
        <p>Mein Ziel ist es, dich dabei zu unterstützen, deine Ernährung so zu gestalten, dass sie zu dir passt — egal, ob du:</p>
        <ul>
          <li>vegan, vegetarisch oder mischköstlich lebst</li>
          <li>deinen Konsum von tierischen Produkten reduzieren möchtest</li>
          <li>oder einfach mehr pflanzliche Lebensmittel in deinen Alltag integrieren willst</li>
        </ul>
      </div>

      <div className='pink-background'>
        <div className='inner-content'>
          <h3>Warum pflanzenbasiert?</h3>
          <p>Nicht jeder muss komplett vegan leben, aber Fakt ist:</p>
          <p><strong><em>Wir essen kollektiv zu viele tierische Produkte.</em></strong></p>
          <p>Eine pflanzenbasierte Ernährung kann nicht nur der Gesundheit, sondern auch der Nachhaltigkeit und dem Tierwohl zugutekommen. Wie du diesen Weg für dich gestalten möchtest, entscheidest du.</p>
        </div>
      </div>

      <div className='white-background'>
        <h3>Was erwartet dich in der Ernährungsberatung?</h3>
        <p><strong>Individuelle Analyse:</strong> Wir betrachten deine Ernährung, deinen Lebensstil und deine Ziele</p>
        <p><strong>Ganzheitlicher Ansatz:</strong> Es geht nicht um Diäten, sondern um ein nachhaltiges, genussvolles Essverhalten</p>
        <p><strong>Wissenschaftlich fundierte Empfehlungen:</strong> Aktuelle Erkenntnisse aus Ernährungswissenschaft und Praxis.</p>
        <p><strong>Pflanzenpower & Nährstoffbalance:</strong> Optimal versorgt ohne Verzicht</p>
      </div>

      <div className='pink-background'>
        <div className='inner-content'>
          <h3>Dein Nutzen</h3>
          <ul>
            <li>Mehr Energie & Wohlbefinden im Alltag</li>
            <li>Klarheit über Nährstoffbedarf & optimale Versorgung</li>
            <li>Genussvolle Mahlzeiten statt Verzichtsdenken</li>
          </ul>
          <p><strong>So starten wir:</strong> Ganz egal, was deine Motivation ist: Ich lade dich herzlich zu einem kostenlosen Kennenlerngespräch ein. Schreib mir einfach auf WhatsApp — unkompliziert & direkt!</p>

          <div className='price-box'>
            <FontAwesomeIcon icon={faCoins} className='price-icon' />
              <p id='first-part'>2 Sitzungen à 45-60 Min. inkl. Ernährungsplan: 120 € (Mindestbuchung)</p>
              <p>Jede weitere Sitzung à 45-60 Min.: 50 €</p>
              <p>4er-Paket (4 Sitzungen): 190 €</p>
              <p>8er-Paket (8 Sitzungen): 370 €</p>
            <p id='last-part'><em>(Einzelsitzungen nur auf Anfrage)</em></p>
          </div>

          <p className='actioncall'><em>Lass uns gemeinsam herausfinden, was dein Körper wirklich braucht — für ein gesundes, energiegeladenes Leben! 🌿
          </em></p>
        </div>
      </div>
    </div>
  )
}

export default Nutrition
