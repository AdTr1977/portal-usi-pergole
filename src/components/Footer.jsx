const BRAND_NAME = 'Studio UP'

export default function Footer() {
  return (
    <footer className="hairline-top" style={{ marginTop: 80 }}>
      <div className="container" style={{
        padding: '32px 28px', display: 'flex', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12, fontSize: 13, color: '#6e6e6e',
      }}>
        <span>© {new Date().getFullYear()} {BRAND_NAME}</span>
        <span>Uși &amp; pergole — fabricație și montaj</span>
      </div>
    </footer>
  )
}
