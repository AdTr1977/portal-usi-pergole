import { Link } from 'react-router-dom'

export default function Configurator() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Configurator</p>
        <h2 style={{ marginTop: 10 }}>Alege ce vrei să configurezi</h2>
        <div className="grid-2" style={{ marginTop: 36 }}>
          <Link to="/configurator/usi" className="tile">
            <h3>Uși</h3>
            <p style={{ marginTop: 8, fontSize: 14 }}>Model, culoare, dimensiune — preț instant.</p>
          </Link>
          <Link to="/configurator/pergole" className="tile">
            <h3>Pergole</h3>
            <p style={{ marginTop: 8, fontSize: 14 }}>Momentan disponibil doar prin ofertă personalizată.</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
