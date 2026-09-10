import { Link } from 'react-router-dom'
import ImageWithFallback from '../components/ImageWithFallback.jsx'

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Uși &amp; pergole</p>
          <h1 style={{ marginTop: 14, maxWidth: 640 }}>
            Fabricăm uși și pergole, gândite pentru case simple și durabile.
          </h1>
          <p style={{ marginTop: 18, maxWidth: 480, fontSize: 15 }}>
            Fiecare produs pornește de la un model fix, cu opțiuni clare de
            culoare și dimensiune — fără complicații, fără liste interminabile.
          </p>
        </div>
      </section>

      <section className="section section-soft hairline-top">
        <div className="container">
          <div className="grid-2">
            <Link to="/produse/usi" className="tile" style={{ background: '#fff', padding: 0, overflow: 'hidden' }}>
              <ImageWithFallback
                src="images/home/usa.jpg"
                alt="Ușă"
                label="imagine ușă — de adăugat"
              />
              <div style={{ padding: 28 }}>
                <h3>Uși</h3>
                <p style={{ marginTop: 8, fontSize: 14 }}>
                  Interior și exterior, modele fixe, finisaje și dimensiuni standard.
                </p>
              </div>
            </Link>
            <Link to="/produse/pergole" className="tile" style={{ background: '#fff', padding: 0, overflow: 'hidden' }}>
              <ImageWithFallback
                src="images/home/pergola.jpg"
                alt="Pergolă"
                label="imagine pergolă — de adăugat"
              />
              <div style={{ padding: 28 }}>
                <h3>Pergole</h3>
                <p style={{ marginTop: 8, fontSize: 14 }}>
                  Structuri realizate pe măsură, în funcție de spațiul disponibil.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
