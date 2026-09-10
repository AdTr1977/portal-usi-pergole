import { Link } from 'react-router-dom'
import ImageWithFallback from '../components/ImageWithFallback.jsx'

const CATEGORII = [
  { label: 'Ușă interior', img: 'images/produse-usi/interior.jpg' },
  { label: 'Ușă exterior', img: 'images/produse-usi/exterior.jpg' },
  { label: 'Ușă blindată', img: 'images/produse-usi/blindata.jpg' },
]

export default function ProdusUsi() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Produse / Uși</p>
        <h2 style={{ marginTop: 10 }}>Uși interior și exterior</h2>
        <p style={{ marginTop: 14, maxWidth: 520 }}>
          Modele fixe, disponibile într-o gamă de finisaje și dimensiuni standard.
          Prețul se stabilește instant, pe baza modelului, culorii și dimensiunii alese.
        </p>
        <div style={{ marginTop: 28 }}>
          <Link to="/configurator/usi" className="btn">Vezi configuratorul de uși</Link>
        </div>

        <div className="grid-3" style={{ marginTop: 48 }}>
          {CATEGORII.map((cat) => (
            <div key={cat.label}>
              <ImageWithFallback
                src={cat.img}
                alt={cat.label}
                label={`imagine — ${cat.label.toLowerCase()}`}
              />
              <h3 style={{ marginTop: 12, fontSize: 15 }}>{cat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
