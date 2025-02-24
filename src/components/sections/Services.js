import React from 'react';
import ServiceItem from '../ServiceItem';
import './Services.css';

function Services() {
  return (
    <div className='services'>
      <div className='services__container'>
        <ServiceItem
          src='https://www.pranahaus.de/media/e1/d1/b8/1717157331/yoga_mobile.jpg'
          path='/angebot/yoga'
          header='Yoga'
          text='Ich unterrichte derzeit regelmäßig in Halle in verschiedenen Fitnessstudios, dem Unisport sowie der Volkshochschule (VHS). Meine Yoga-Ausbildungen (insgesamt 500 Stunden) habe ich in Indien und in Heimbach in der Eifel absolviert. Neben meinen regelmäßigen Kursen bin ich auch für private und geschäftliche Events buchbar, darunter Geburtstage, Gesundheitstage, Betriebsyoga, Festivals, Schulklassen und vieles mehr.'
        />
        <ServiceItem
          src='https://www.startnext.com/media/thumbnails/353/9affe56d06e2f305efa2bbc5efab3353/3b2b8cd1/150%E2%82%AC.jpg'
          path='/angebot/akasha'
          header='Akasha Chronik Lesungen'
          text='Stell dir die Akasha Chronik wie eine grenzenlose, feinstoffliche Datenbank im Kosmos vor. Hier sind alle Informationen gespeichert — von jedem Lebewesen, das je gelebt hat, lebt oder leben wird. Jedes Wesen hat Zugang zu seiner eigenen Chronik, seinem ganz persönlichen "Buch des Lebens". Mit etwas Übung und der richtigen Anleitung kannst auch du lernen, darin zu lesen. Oder ich begleite dich dabei und helfe dir, Antworten auf deine Fragen zu finden.'
        />
        <ServiceItem
          src='https://humanistisch.de/sites/humanistisch.de/files/styles/galerie-full/public/schwangerschaftskonfliktberatung/medien/2020/01/_w8a3204.jpg?itok=s6RUzP85'
          path='/angebot/psychologische-beratung'
          header='Psychologische Beratung nach Carl Rogers'
          text='Die von Carl Rogers entwickelte Methode stellt Sie als Person in den Mittelpunkt. Es geht nicht um Diagnosen oder Bewertungen, sondern um ein Gespräch auf Augenhöhe. Durch aktives Zuhören und ein tiefes Verständnis Ihrer Gefühle und Gedanken können Sie eigene Lösungswege entdecken.'
        />
        <ServiceItem
          src='https://humanistisch.de/sites/humanistisch.de/files/styles/galerie-full/public/schwangerschaftskonfliktberatung/medien/2020/01/_w8a3204.jpg?itok=s6RUzP85'
          path='/angebot/coaching'
          header='Lösungsfokussiertes Kurzzeit-Coaching nach Milton Erickson'
          text='Basierend auf den Erkenntnissen von Milton Erickson konzentriert sich dieses Coaching auf Lösungen statt auf Probleme. Im Mittelpunkt steht nicht das "Warum" eines Problems, sondern das "Wie" einer Veränderung. Sie tragen die Lösung bereits in sich — wir entdecken sie gemeinsam.'
        />
        <ServiceItem
          src='https://saturo.com/cdn/shop/files/Vegane_Ernaehrung.jpg'
          path='/angebot/ernährungsberatung'
          header='Vegane & Vegetarische Ernährungsberatung'
          text='Du möchtest deinen Lebensstil gesünder gestalten und den Fokus auf deine Ernährung legen? Oder bist du bereits im "Ernährungsgame" unterwegs und suchst nach mehr Tiefgang, fundierten Tipps und wissenschaftlich basierten Empfehlungen? Dann bist du bei mir genau richtig!'
        />
      </div>
    </div>
  )
}

export default Services
