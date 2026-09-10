export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2 style={{ marginTop: 10 }}>Hai să vorbim</h2>
        <p style={{ marginTop: 14, maxWidth: 460 }}>
          Pentru o ofertă de pergolă sau orice întrebare despre uși, scrie-ne
          sau sună-ne direct.
        </p>

        <div className="grid-2" style={{ marginTop: 40, maxWidth: 640 }}>
          <div>
            <p className="eyebrow">Email</p>
            <a href="mailto:contact@studio-up.ro" className="btn" style={{ marginTop: 10 }}>
              contact@studio-up.ro
            </a>
          </div>
          <div>
            <p className="eyebrow">Telefon</p>
            <a href="tel:+40700000000" className="btn" style={{ marginTop: 10 }}>
              +40 700 000 000
            </a>
          </div>
        </div>

        <p style={{ marginTop: 40, fontSize: 12.5 }}>
          Datele de contact de mai sus sunt exemple — le înlocuiești cu cele reale
          direct în <code>src/pages/Contact.jsx</code>.
        </p>
      </div>
    </section>
  )
}
