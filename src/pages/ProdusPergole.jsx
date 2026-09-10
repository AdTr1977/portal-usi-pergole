import { Link } from 'react-router-dom'

export default function ProdusPergole() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Produse / Pergole</p>
        <h2 style={{ marginTop: 10 }}>Pergole</h2>
        <p style={{ marginTop: 14, maxWidth: 520 }}>
          Fiecare pergolă se dimensionează în funcție de spațiul disponibil și de
          structura casei, așa că nu folosim un preț fix pe combinații. Pentru o
          estimare, ne poți contacta direct.
        </p>
        <div style={{ marginTop: 28 }}>
          <Link to="/contact" className="btn">Cere o ofertă</Link>
        </div>

        <div className="grid-3" style={{ marginTop: 48 }}>
          {['Pergolă bioclimatică', 'Pergolă fixă', 'Pergolă retractabilă'].map((label) => (
            <div key={label}>
              <div className="photo-placeholder">imagine — {label.toLowerCase()}</div>
              <h3 style={{ marginTop: 12, fontSize: 15 }}>{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
