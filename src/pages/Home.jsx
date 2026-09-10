import { Link } from 'react-router-dom'

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
            <Link to="/produse/usi" className="tile" style={{ background: '#fff' }}>
              <div className="photo-placeholder" style={{ marginBottom: 18 }}>
                imagine ușă — de adăugat
              </div>
              <h3>Uși</h3>
              <p style={{ marginTop: 8, fontSize: 14 }}>
                Interior și exterior, modele fixe, finisaje și dimensiuni standard.
              </p>
            </Link>
            <Link to="/produse/pergole" className="tile" style={{ background: '#fff' }}>
              <div className="photo-placeholder" style={{ marginBottom: 18 }}>
                imagine pergolă — de adăugat
              </div>
              <h3>Pergole</h3>
              <p style={{ marginTop: 8, fontSize: 14 }}>
                Structuri realizate pe măsură, în funcție de spațiul disponibil.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
