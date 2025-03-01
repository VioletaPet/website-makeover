import React from 'react';
import './Akasha.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const Akasha = () => {
  return (
    <div className='akasha-page'>
      <div className='pink-background' id='top-section'>
        <div className='content'>
          <img src='/images/services/service/akasha2.jpg' alt='Foto von Elizabeth'/>
          <div className='content-text'>
            <h1>Akasha Chronik Lesungen & Coaching</h1>
          </div>
        </div>
      </div>

      <div className='white-background'>
        <h2>Lesungen</h2>
        <h3>Was passiert bei einer Akasha Chronik Lesung?</h3>
        <p>Mit deiner Erlaubnis verbinde ich mich asynchron, alleine von zu Hause aus, über Meditation und in einem leichten Trancezustand mit meinen und deinen geistigen Führern sowie Engeln. Gemeinsam stelle ich deine Fragen und erhalte die Antworten, die für deinen Weg jetzt relevant sind. Du musst dabei nicht anwesend sein. Jede Sitzung ist einzigartig, und die Kunst liegt darin, die wichtigsten Informationen gezielt zu erkennen und von der feinstofflichen "Energiesprache" ins Verständliche zu übersetzen.</p>
      </div>

      <div className='pink-background'>
        <h3>Wie bereiten wir uns vor?</h3>
        <ul>
          <li><strong>Präzise Fragen:</strong> Je konkreter deine Fragen, desto klarer die Antworten. Gerne helfe ich dir, sie passend zu formulieren.</li>
          <li><strong>Vorgespräch:</strong> Wir telefonieren ca. 15 Minuten vor der Sitzung, um dein Anliegen zu klären</li>
          <li><strong>Aufzeichnung</strong> Die Lesung nehme ich für dich als Audioaufzeichnung auf und sende sie dir anschließend zu</li>
        </ul>
        <p><strong>Wichtige Hinweise:</strong> Der Zugang zur Akasha Chronik erfolgt nur mit deiner Erlaubnis und in reiner Intention In seltenen Fällen kann es vorkommen, dass der Zugang nicht gewährt wird — bisher ist das jedoch nie passiert. Aus diesem Grund erfolgt die Bezahlung erst nach der Sitzung.</p>
        <p><strong>Hinweis zur Durchführung:</strong> Alle Akasha Chronik Lesungen finden ausschließlich als Telesitzungen statt, nicht in Person. So kannst du bequem von zu Hause aus teilnehmen, unabhängig von deinem Standort.</p>
        <div className='price-box'>
          <FontAwesomeIcon icon={faCoins} className='price-icon' />
            <p>Einzelsitzung: 88 €<br />
            Akasha Chronik in Verbindung mit Coaching: Preis individuell nach Art und Umfang</p>
        </div>
      </div>

      <div className='white-background'>
        <h2>Coaching: Dein spiritueller Powerboost</h2>
        <h3>Du möchtest dein geistiges Team in dein Business oder Leben integrieren?</h3>
        <p>Die Akasha Chronik ist ein kraftvolles Tool, um:</p>
        <ul>
          <li>Konkrete Schritte für deine Ziele zu erfragen</li>
          <li>Individuelle Aktionspläne zu erhalten</li>
          <li>Tagesaktuelle Impulse für Entscheidungen zu nutzen</li>
        </ul>
        <p>Die Antworten aus deiner Chronik sind keine Vorgaben, sondern liebevolle Vorschläge, die deinem Wachstum dienen. Du gibst dabei nicht die Verantwortung ab, sondern arbeitest Hand in Hand mit deiner geistigen Führung. Dein freier Wille bleibt das höchste Gut.</p>
      </div>

      <div className='pink-background'>
        <h3>Meine Unterstützung im Coaching:</h3>
        <ul>
          <li>Regelmäßiges Check-in, um Fortschritte zu reflektieren</li>
          <li>Impulse, wenn du Hürden begegnest</li>
          <li>Begleitung, um deine Ziele nachhaltig zu erreichen</li>
        </ul>
        <p>Denn auch mit himmlischer Unterstützung bleibt das Leben ein spannendes Rätsel. Die Tipps von oben helfen uns weiter — lösen dürfen wir es selbst.</p>
        <h3>Lerne, deine eigenen Akasha Chroniken zu lesen</h3>
        <p>Stell dir vor, du könntest jederzeit selbst in dein eigenes Buch des Lebens blicken. Das Erlernen dieser Fähigkeit ist ein Akt der Selbstermächtigung, der dich in jeder Lebenssituation unterstützen kann. Dieser Skill hilft dir dabei, deine innere Weisheit zu aktivieren, Klarheit zu gewinnen und dich mit deiner geistigen Führung direkt zu verbinden.</p>
      </div>

      <div className='white-background'>
        <h3>Was erwartet dich?</h3>
        <p>Ich biete dir eine individuelle Begleitung an, um das Lesen in deinen eigenen Akasha Chroniken zu erlernen. Der Prozess wird auf dich abgestimmt, je nachdem:</p>
        <ul>
          <li>Wo du gerade stehst</li>
          <li>Wie sehr du bereits mit deinen Hellsinnen in Verbindung bist</li>
          <li>Welche Ziele du verfolgst</li>
        </ul>
      </div>

      <div className='pink-background'>
        <h3>Dein Nutzen</h3>
        <p><strong>Unabhängigkeit:</strong> Du bist nicht mehr auf externe Lesungen angewiesen</p>
        <p><strong>Alltagsintegration:</strong> Du lernst, wie du Akasha-Impulse in dein tägliches Leben einbaust</p>
        <p><strong>Spirituelles Wachstum:</strong> Vertiefe deine Verbindung zu deinem höheren Selbst und deinem geistigen Team</p>
        <div className='price-box'>
          <FontAwesomeIcon icon={faCoins} className='price-icon' />
            <p><em>Der Preis wird individuell in Absprache festgelegt, basierend auf deinem aktuellen Stand und deinen Bedürfnissen</em></p>
        </div>
      </div>
    </div>
  )
}

export default Akasha
