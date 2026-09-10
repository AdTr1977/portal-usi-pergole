import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// ★ Editează aici numele afișat al brandului
const BRAND_NAME = 'Studio UP'

const NAV_STYLES = {
  bar: {
    position: 'sticky', top: 0, zIndex: 50,
    background: '#fff', borderBottom: '1px solid rgba(17,17,17,0.14)',
  },
  inner: {
    maxWidth: 1180, margin: '0 auto', padding: '0 28px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    height: 72,
  },
  brand: { fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' },
  menu: { display: 'flex', gap: 34, alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 },
  item: { position: 'relative' },
  link: {
    fontSize: 14, color: '#111', cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: 6, padding: '26px 0',
  },
  caret: { fontSize: 10, color: '#9a9a9a' },
  dropdown: {
    position: 'absolute', top: '100%', left: 0,
    background: '#fff', border: '1px solid rgba(17,17,17,0.14)',
    minWidth: 200, padding: '6px 0',
  },
  dropdownLink: {
    display: 'block', padding: '11px 18px', fontSize: 14, color: '#111',
  },
}

function Dropdown({ label, items, open, onEnter, onLeave }) {
  return (
    <li style={NAV_STYLES.item} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <span style={NAV_STYLES.link}>
        {label} <span style={NAV_STYLES.caret}>▾</span>
      </span>
      {open && (
        <ul style={{ ...NAV_STYLES.dropdown, listStyle: 'none', margin: 0 }}>
          {items.map((it) => (
            <li key={it.to}>
              <Link
                to={it.to}
                style={NAV_STYLES.dropdownLink}
                onMouseOver={(e) => (e.currentTarget.style.background = '#fafafa')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null) // 'produse' | 'configurator' | null

  const produseItems = [
    { to: '/produse/usi', label: 'Uși' },
    { to: '/produse/pergole', label: 'Pergole' },
  ]
  const configuratorItems = [
    { to: '/configurator/usi', label: 'Uși' },
    { to: '/configurator/pergole', label: 'Pergole' },
  ]

  return (
    <nav style={NAV_STYLES.bar}>
      <div style={NAV_STYLES.inner}>
        <Link to="/" style={NAV_STYLES.brand}>{BRAND_NAME}</Link>
        <ul style={NAV_STYLES.menu}>
          <Dropdown
            label="Produse"
            items={produseItems}
            open={openMenu === 'produse'}
            onEnter={() => setOpenMenu('produse')}
            onLeave={() => setOpenMenu(null)}
          />
          <Dropdown
            label="Configurator"
            items={configuratorItems}
            open={openMenu === 'configurator'}
            onEnter={() => setOpenMenu('configurator')}
            onLeave={() => setOpenMenu(null)}
          />
          <li>
            <NavLink to="/portofoliu" style={NAV_STYLES.link}>Portofoliu</NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={NAV_STYLES.link}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
