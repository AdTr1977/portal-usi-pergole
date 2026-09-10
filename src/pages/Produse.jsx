import { Link } from 'react-router-dom'

export default function Produse() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Produse</p>
        <h2 style={{ marginTop: 10 }}>Ce fabricăm</h2>
        <div className="grid-2" style={{ marginTop: 36 }}>
          <Link to="/produse/usi" className="tile">
            <div className="photo-placeholder" style={{ marginBottom: 18 }}>imagine ușă</div>
            <h3>Uși</h3>
            <p style={{ marginTop: 8, fontSize: 14 }}>Modele, culori și dimensiuni fixe.</p>
          </Link>
          <Link to="/produse/pergole" className="tile">
            <div className="photo-placeholder" style={{ marginBottom: 18 }}>imagine pergolă</div>
            <h3>Pergole</h3>
            <p style={{ marginTop: 8, fontSize: 14 }}>Realizate pe măsură, ofertă personalizată.</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
