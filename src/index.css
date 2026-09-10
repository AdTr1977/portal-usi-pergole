:root {
  --ink: #111111;
  --paper: #ffffff;
  --grey: #6e6e6e;
  --grey-light: #9a9a9a;
  --line: rgba(17, 17, 17, 0.14);
  --line-soft: rgba(17, 17, 17, 0.07);
  --bg-soft: #fafafa;
  --max-width: 1180px;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
}

body {
  background: var(--paper);
  color: var(--ink);
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 28px;
}

/* ---------- Typography ---------- */
h1, h2, h3 {
  font-weight: 500;
  letter-spacing: -0.01em;
  margin: 0;
}
h1 { font-size: clamp(32px, 5vw, 52px); font-weight: 300; line-height: 1.08; }
h2 { font-size: 28px; }
h3 { font-size: 18px; }
p { color: var(--grey); margin: 0; }

.eyebrow {
  font-size: 12px;
  color: var(--grey-light);
  letter-spacing: 0.04em;
}

/* ---------- Buttons / links ---------- */
.btn {
  display: inline-block;
  border: 1px solid var(--ink);
  padding: 12px 22px;
  font-size: 14px;
  cursor: pointer;
  background: var(--paper);
  color: var(--ink);
  transition: background 0.2s, color 0.2s;
}
.btn:hover { background: var(--ink); color: var(--paper); }
.btn.btn-quiet {
  border-color: var(--line);
  color: var(--grey);
}
.btn.btn-quiet:hover { border-color: var(--ink); color: var(--paper); background: var(--ink); }

/* ---------- Layout helpers ---------- */
.section { padding: 72px 0; }
.section-soft { background: var(--bg-soft); }
.hairline-top { border-top: 1px solid var(--line); }
.hairline-bottom { border-bottom: 1px solid var(--line); }

.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
@media (max-width: 860px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}

/* placeholder visual block used where real photography will go later */
.photo-placeholder {
  background: var(--bg-soft);
  border: 1px solid var(--line);
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--grey-light);
  font-size: 13px;
  text-align: center;
  padding: 16px;
}

.tile {
  border: 1px solid var(--line);
  padding: 28px;
  transition: border-color 0.2s;
}
.tile:hover { border-color: var(--ink); }

/* ---------- Navbar ---------- */
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}
.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.navbar-brand {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.01em;
}
.navbar-menu {
  display: flex;
  gap: 34px;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar-item { position: relative; }
.navbar-link {
  font-size: 14px;
  color: var(--ink);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 26px 0;
  background: none;
  border: none;
  font-family: inherit;
}
.navbar-link-btn { padding: 26px 0; }

.navbar-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--paper);
  border: 1px solid var(--line);
  min-width: 190px;
  padding: 6px 0;
  list-style: none;
  margin: 0;
}
.navbar-dropdown.open { display: block; }
.navbar-dropdown-link {
  display: block;
  padding: 11px 18px;
  font-size: 14px;
  color: var(--ink);
}
.navbar-dropdown-link:hover { background: var(--bg-soft); }

/* Hamburger button — hidden on desktop */
.navbar-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
}
.navbar-toggle-bar,
.navbar-toggle-bar::before,
.navbar-toggle-bar::after {
  content: '';
  display: block;
  width: 20px;
  height: 1px;
  background: var(--ink);
  position: relative;
  transition: transform 0.2s, opacity 0.2s;
}
.navbar-toggle-bar::before { position: absolute; top: -6px; }
.navbar-toggle-bar::after { position: absolute; top: 6px; }
.navbar-toggle-bar.open { background: transparent; }
.navbar-toggle-bar.open::before { transform: translateY(6px) rotate(45deg); }
.navbar-toggle-bar.open::after { transform: translateY(-6px) rotate(-45deg); }

@media (max-width: 860px) {
  .navbar-toggle { display: flex; }

  .navbar-menu {
    display: none;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: var(--paper);
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 4px 0 12px;
  }
  .navbar-menu.open { display: flex; }

  .navbar-item { width: 100%; }
  .navbar-link, .navbar-link-btn {
    width: 100%;
    padding: 15px 28px;
    justify-content: space-between;
  }
  .navbar-dropdown {
    position: static;
    border: none;
    padding: 0 0 0 28px;
    background: var(--bg-soft);
  }
  .navbar-dropdown-link { padding: 13px 28px 13px 14px; }
}
