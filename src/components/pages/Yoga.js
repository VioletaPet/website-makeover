import React from 'react';
import './Yoga.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Yoga = () => {

  return (
    <div className='yoga-container'>
      <h1 className='page-header'>योग Yoga-Stile</h1>

      <div className='yoga-grid'>

        {/* Ashtanga Vinyasa Yoga */}
        <div className='yoga-card'>
          <div className='yoga-card-header' style={{ backgroundImage: `url('https://cdn.shopify.com/s/files/1/0077/7587/9266/files/180210_Lotuscrafts_0767_Virabhadrasana2_left_grande.jpg?v=1554196580')` }}>
            <h2>Ashtanga Vinyasa Yoga</h2>
          </div>
          <div className='yoga-card-body'>
            <p>Ashtanga bedeutet „die vom Atem getragene Meditation“, die mit Bewegung verknüpft wird. <strong>Ashtanga Vinyasa Yoga</strong> ist ein <strong>dynamischer und kraftvoller Yogastil</strong>, bei dem du in einem <strong>fließenden Übergang</strong> von einer Asana (Körperhaltung) zur nächsten geleitet wirst.</p>
            <p>Traditionell gibt es <strong>6 feste Serien von Bewegungsabfolgen</strong>, die den Körper entgiften und den Geist klären. Es ist ein besonders effektiver Stil für:</p>
            <ul>
              <li>Fitness & Fettverbrennung</li>
              <li>Elastizität & Flexibilität</li>
              <li>Innere Ruhe & mentale Stärke</li>
            </ul>
            <p>Meine Stunden bereiten dich optimal darauf vor, die <strong>erste Serie zu meistern</strong>, auch wenn du noch neu im Yoga bist und dich einer <strong>körperlichen und mentalen Challenge</strong> stellen möchtest.
            </p>
            <p className='suitability'><em><strong>Geeignet für:</strong> Fortgeschrittene Yogis oder motivierte AnfängerInnen, die eine sportpche Herausforderung suchen</em></p>
          </div>
        </div>

        {/* Hatha Yoga */}
        <div className='yoga-card'>
          <div className='yoga-card-header' style={{ backgroundImage: `url('https://cdn.shopify.com/s/files/1/0077/7587/9266/files/hatha-yoga-kuh-lotuscrafts_1024x1024.jpg?v=1576668776')` }}>
            <h2>Hatha Yoga</h2>
          </div>
          <div className='yoga-card-body'>
            <p><strong>Hatha Yoga</strong> ist ein traditioneller Yogastil, der die <strong>Balance von Gegensätzen</strong> betont. Der Begriff "Hatha" setzt sich zusammen aus:</p>
            <ul>
              <li><strong>"Ha"</strong> = Sonne (Aktiviät, Energie)</li>
              <li><strong>"Tha"</strong> = Mond (Ruhe, Entspannung)</li>
            </ul>
            <p>Diese Praxis schafft ein Gleichgewicht zwischen <strong>Kraft und Gelassenheit</strong>, mit einem Wechsel aus Anspannung und Entspannung. Nach jeder Asana gibt es eine <strong>kurze Pause</strong>, um den Körper bewusst nachzuspüren.</p>
            <ul>
              <li>Fördert Balance & Achtsamkeit</li>
              <li>Flexibel gestaltbar: ruhig oder fordernd</li>
              <li>Ideal für AnfängerInnen & Fortgeschrittene</li>
            </ul>
            <p className='suitability'><em><strong>Geeignet für:</strong> Alle, die eine harmonische Praxis suchen, um Körper und Geist in Einklang zu bringen.</em></p>
          </div>
        </div>

        {/* Vinyasa Yoga */}
        <div className='yoga-card'>
          <div className='yoga-card-header' style={{ backgroundImage: `url('https://cdn.yogaeasy.de/production/uploads/article/picture/2642/large_article_vinyasayoga_bewegung_flow_1_Nicole_Bongartz_artikel.jpg')`}}>
            <h2>Vinyasa Yoga</h2>
          </div>
          <div className='yoga-card-body'>
            <p>Im <strong>Vinyasa Yoga</strong> verschmelzen <strong>Atem und Bewegung</strong> zu einem fließenden Tanz. Die Übergänge zwischen den Asanas werden bewusst gestaltet, sodass ein kontinuierlicher „Flow“ entsteht – dynamisch, kreativ und oft auch spielerisch.</p>
            <p>Im Gegensatz zum Hatha Yoga gibt es <strong>keine Pausen</strong> zwischen den Asanas. Der Stil kann je nach Bedarf sanft oder intensiv sein:</p>
            <ul>
              <li>Dynamisch & kraftvoll</li>
              <li>Fördert Kreativität & Flexibilität</li>
            </ul>
            <p className='suitability'><em><strong>Geeignet für:</strong> Alle, die sich gerne in Bewegung ausdrücken und in einen meditativen Flow eintauchen möchten. Für AnfängerInnen und Fortgeschrittene anpassbar.</em></p>
          </div>
        </div>

        {/* Yin Yoga */}
        <div className='yoga-card'>
          <div className='yoga-card-header' style={{ backgroundImage: `url('https://www.amoena.com/Images/Article/Corporate-Content/Yin_Yoga/Amoena_Yin_Yoga_exercise05_butterfly.jpg')` }} >
            <h2>Yin Yoga</h2>
          </div>
          <div className='yoga-card-body'>
            <p><strong>Yin Yoga</strong> ist ein <strong>ruhiger, meditativer Yogastil</strong>, der den Fokus auf das <strong>tiefe Loslassen</strong> legt. Die Asanas werden <strong>3-5 Minuten</strong> (oder länger) in passiver Haltung gehalten, um die <strong>tieferen Bindegewebsschichten (Faszien)</strong> zu erreichen und die Flexibilität zu verbessern.</p>
            <ul>
              <li>Fördert Entspannung & Achtsamkeit</li>
              <li>Wirkt stressreduzierend & regenerierend</li>
            </ul>
            <p className='suitability'><em><strong>Geeignet für:</strong> Alle, die sich nach innerer Ruhe und emotionalem Ausgleich sehnen. Ideal für AnfängerInnen und Menschen mit körperlichen Einschränkungen</em></p>
          </div>
        </div>

        {/* Yoga Nidra */}
        <div className='yoga-card'>
          <div className='yoga-card-header' style={{ backgroundImage: `url('https://cdn.webshopapp.com/shops/71337/files/460067991/yoga-nidra-die-heilende-kraft-des-schlaf-yoga.jpg')` }}>
            <h2>Yoga Nidra</h2>
          </div>
          <div className='yoga-card-body'>
            <p>Auch bekannt als der <strong>„Schlaf des Yogi“</strong>, ist <strong>Yoga Nidra</strong> eine kraftvolle Methode der <strong>tiefen Entspannung</strong> und des mentalen Trainings. In einem Zustand zwischen Wachsein und Schlaf beruhigen sich die Gehirnwellen, was zu tiefer Regeneration führt.</p>
            <ul>
              <li>Stressabbau & Verbesserung der SChlafqualität</li>
              <li>Stärkung der mentalen Klarheit & Konzentration</li>
              <li>Unterstützt persönliche Entwicklung & Manifestation</li>
            </ul>
            <p className='suitability'><em><strong>Geeignet für:</strong> Menschen mit Stress, Schlafproblemen oder dem Wunsch nach tiefer Selbstreflexion</em></p>
          </div>
        </div>

        {/* Betriebsyoga */}
        <div className='yoga-card'>
          <div className='yoga-card-header' style={{ backgroundImage: `url('https://www.yoga-in-winsen.de/wp-content/uploads/wie-laeuft-firmenyogastunde-ab-800.png')` }}>
            <h2>Betriebsyoga</h2>
          </div>
          <div className='yoga-card-body'>
            <p>Möchten Sie die Gesundheit Ihrer Mitarbeitenden fördern? <strong>Yoga im Unternehmen</strong> verbessert das Wohlbefinden, reduziert Stress und steigert die Konzentration.</p>
            <ul>
              <li>Fördert Gesundheit & Teamgeist</li>
              <li>Individuell anpassbar (vor der Arbeit, in der Pause oder danach)</li>
              <li>Ideal für Stressmanagement & Ausgleich im Büroalltag</li>
            </ul>
            <p className='suitability'>Schreiben Sie mir gerne eine E-Mail – wir finden gemeinsam ein passendes Konzept für Ihr Unternehmen!</p>
          </div>
          <div className='price-box'>
            <FontAwesomeIcon icon={faSun} className='price-icon' />
            <p>Stundensatz: 80€ - 100€ (abhängig vom Anfahrtsweg)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Yoga
