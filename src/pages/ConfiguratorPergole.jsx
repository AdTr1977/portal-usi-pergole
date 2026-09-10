import { Link } from 'react-router-dom'

export default function ConfiguratorPergole() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Configurator / Pergole</p>
        <h2 style={{ marginTop: 10 }}>În lucru</h2>
        <p style={{ marginTop: 14, maxWidth: 480 }}>
          Pergolele depind de dimensiunea spațiului și de structura casei, așa că
          nu se pretează la un configurator cu combinații fixe. Lucrăm la o
          variantă potrivită — între timp, ne poți scrie direct.
        </p>
        <div style={{ marginTop: 24 }}>
          <Link to="/contact" className="btn">Cere o ofertă</Link>
        </div>
      </div>
    </section>
  )
}
