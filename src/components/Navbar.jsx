import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

// ★ Editează aici numele afișat al brandului
const BRAND_NAME = 'Studio UP'

function ChevronDown() {
  return <span style={{ fontSize: 10, color: '#9a9a9a' }}>▾</span>
}

function Dropdown({ label, items, sectionKey, openSection, setOpenSection, onNavigate }) {
  const isOpen = openSection === sectionKey
  return (
    <li className="navbar-item">
      <button
        type="button"
        className="navbar-link navbar-link-btn"
        onClick={() => setOpenSection(isOpen ? null : sectionKey)}
        aria-expanded={isOpen}
      >
        {label} <ChevronDown />
      </button>
      <ul className={`navbar-dropdown${isOpen ? ' open' : ''}`}>
        {items.map((it) => (
          <li key={it.to}>
            <Link to={it.to} className="navbar-dropdown-link" onClick={onNavigate}>
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null) // 'produse' | 'configurator' | null
  const navRef = useRef(null)
  const location = useLocation()

  // Închide meniul mobil și dropdown-urile la schimbarea paginii
  useEffect(() => {
    setMobileOpen(false)
    setOpenSection(null)
  }, [location.pathname])

  // Închide dropdown-ul dacă se dă click în afara navbar-ului
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenSection(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const produseItems = [
    { to: '/produse/usi', label: 'Uși' },
    { to: '/produse/pergole', label: 'Pergole' },
  ]
  const configuratorItems = [
    { to: '/configurator/usi', label: 'Uși' },
    { to: '/configurator/pergole', label: 'Pergole' },
  ]

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">{BRAND_NAME}</Link>

        <button
          type="button"
          className="navbar-toggle"
          aria-label="Deschide meniul"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`navbar-toggle-bar${mobileOpen ? ' open' : ''}`} />
        </button>

        <ul className={`navbar-menu${mobileOpen ? ' open' : ''}`}>
          <Dropdown
            label="Produse"
            items={produseItems}
            sectionKey="produse"
            openSection={openSection}
            setOpenSection={setOpenSection}
            onNavigate={() => setMobileOpen(false)}
          />
          <Dropdown
            label="Configurator"
            items={configuratorItems}
            sectionKey="configurator"
            openSection={openSection}
            setOpenSection={setOpenSection}
            onNavigate={() => setMobileOpen(false)}
          />
          <li className="navbar-item">
            <NavLink to="/portofoliu" className="navbar-link">Portofoliu</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" className="navbar-link">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
