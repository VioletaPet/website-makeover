import React from 'react';
import './Rogers.scss';

export const Rogers = () => {
  return (
    <div className='rogers-page'>
      <div className='pink-background'  id='top-section'>
        <div className='content'>
          <img src='/images/services/service/consultation2.jpg' alt='Beratungsraum'/>
        <div className='content-text'>
          <h1>Psychologische Beratung nach Carl Rogers</h1>

          <h2><em>Vertrauen. Empathie. Wachstum.</em></h2>
        </div>
       </div>
      </div>

      <div className='white-background' id='intro-white'>
        <p>In einer Welt, die oft von Hektik und Leistungsdruck geprägt ist, brauchen wir manchmal einen sicheren Raum, um zu reflektieren, zu fühlen und zu wachsen. Keiner kommt durchs Leben, ohne das ein oder andere Mikrotrauma mitzunehmen. Oft bleiben wir in kindlichen Mustern gefangen, die aus früheren Erfahrungen stammen. Die klientenzentrierte Gesprächstherapie nach Rogers kann helfen, einen Nachreifungsprozess anzuregen, um diese Muster zu erkennen, zu verstehen und hinter uns zu lassen. So können wir aus unserem gesunden, empathischen Erwachsenen-Ich heraus handeln und authentische Lebensentscheidungen treffen. Die psychologische Beratung nach Carl Rogers bietet genau diesen Raum — wertfrei, empathisch und auf Ihre individuellen Bedürfnisse abgestimmt.</p>
      </div>

      <div className='pink-background'>
        <div className='inner-content'>
          <h3>Was ist die klientenzentrierte Gesprächstherapie?</h3>
          <p>Die von Carl Rogers entwickelte Methode stellt Sie als Person in den Mittelpunkt. Es geht nicht um Diagnosen oder Bewertungen, sondern um ein Gespräch auf Augenhöhe. Durch aktives Zuhören und ein tiefes Verständnis Ihrer Gefühle und Gedanken können Sie eigene Lösungswege entdecken.</p>

          <h3>Meine Qualifikation:</h3>
          <p>Ich befinde mich in der Ausbildung zur Heilpraktikerin für Psychotherapie und integriere neben der klientenzentrierten Gesprächstherapie auch Methoden aus der systemischen Beratung und der Verhaltenstherapie, um Sie bestmöglich zu unterstützen.</p>
          <h3>Eingesetzte Methoden:</h3>
          <ul>
            <p><strong>Lebenslinie & Rückwärtszeitstrahl:</strong> Zur Reflexion biografischer Prägungen</p>
            <p><strong>Schematherapeutische Innere-Kind-Arbeit:</strong> Für tiefes emotionales Verstehen</p>
            <p><strong>Imaginatives Überschreiben:</strong> Um belastende Erinnerungen neu zu verarbeiten</p>
            <p><strong>Entscheidungshilfe mit Tetralemma:</strong> Klarheit in komplexen Situationen gewinnen</p>
            <p><strong>Psychoedukation:</strong> Wissen über psychologische Zusammenhänge vermitteln</p>
            <p><strong>Reparenting:</strong> Unterstützung in der emotionalen Selbstfürsorge</p>
          </ul>
        </div>
      </div>

      <div className='white-background'>
        <h3>Kernprinzipien der Beratung:</h3>
        <ul>
          <li><strong>Empathie:</strong> Echtes, einfühlsames Verstehen Ihrer Perspektive</li>
          <li><strong>Wertschätzung:</strong> Bedingungslose positive Beachtung ohne Urteile</li>
          <li><strong>Kongruenz:</strong> Authentizität und Echtheit in der Begegnung</li>
        </ul>

        <h3>Für wen ist diese Beratung geeignet?</h3>
        <ul>
          <li>Menschen in Krisensituationen oder bei Entscheidungsfindungen</li>
          <li>Personen mit Stress, Ängsten oder Selbstzweifeln</li>
          <li>Alle, die persönliches Wachstum und Selbstreflexion anstreben</li>
        </ul>
      </div>
      <div className='pink-background'>
        <div className='inner-content'>
          <h3>Ihr Nutzen:</h3>
          <p>Stärkung des Selbstwertgefühls</p>
          <p>Klarheit über eigene Gefühle und Bedürfnisse</p>
          <p>Entwicklung neuer Perspektiven und Handlungsspielräume</p>

          <h3>So funktioniert es:</h3>
          <p><strong>Individuelle Begleitung:</strong> In Ihrem Tempo, mit Ihrem Fokus</p>
          <p><strong>Erstgespräch:</strong> Unverbindliches Kennenlernen, um Ihre Anliegen zu verstehen</p>
          <p><strong>Nachhaltige Entwicklung:</strong> Unterstützung auf Ihrem Weg zu mehr innerer Balance</p>

          <p className='actioncall'><em>Möchten Sie mehr erfahren?</em><br />
          <em>Kontaktieren Sie mich für ein unverbindliches Erstgespräch. Entdecken Sie, wie wertvoll es sein kann, einfach Gehör zu finden.</em></p>
        </div>
      </div>
    </div>
  )
}

export default Rogers
