const PROJECTS = [
  { title: 'Casă Pipera', tag: 'Uși interior' },
  { title: 'Vilă Corbeanca', tag: 'Pergolă bioclimatică' },
  { title: 'Apartament Herăstrău', tag: 'Ușă exterior blindată' },
  { title: 'Casă Voluntari', tag: 'Pergolă fixă' },
  { title: 'Casă Otopeni', tag: 'Uși interior' },
  { title: 'Vilă Snagov', tag: 'Ușă exterior aluminiu' },
]

export default function Portofoliu() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Portofoliu</p>
        <h2 style={{ marginTop: 10 }}>Proiecte realizate</h2>
        <div className="grid-3" style={{ marginTop: 36 }}>
          {PROJECTS.map((p) => (
            <div key={p.title}>
              <div className="photo-placeholder">imagine proiect</div>
              <h3 style={{ marginTop: 12, fontSize: 15 }}>{p.title}</h3>
              <p style={{ marginTop: 4, fontSize: 13 }}>{p.tag}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
