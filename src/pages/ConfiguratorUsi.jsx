import { useState } from 'react'

/* =========================================================================
   ★ ZONA DE EDITARE — datele reale ale ușilor se completează AICI ★
   Restul componentei nu trebuie modificat pentru a schimba modele,
   culori, dimensiuni sau prețuri.
   ========================================================================= */

// Modele — id unic, nume afișat, cale imagine (opțional), preț de bază (RON)
const MODELS = [
  { id: 'oslo', name: 'Ușă interior Oslo', img: 'images/usi/oslo.jpg', base: 850 },
  { id: 'bergen', name: 'Ușă interior Bergen', img: 'images/usi/bergen.jpg', base: 920 },
  { id: 'tromso', name: 'Ușă interior Tromsø', img: 'images/usi/tromso.jpg', base: 990 },
  { id: 'stejar-natur', name: 'Ușă interior Stejar Natur', img: 'images/usi/stejar.jpg', base: 1150 },
  { id: 'blindata-x7', name: 'Ușă exterior Blindată X7', img: 'images/usi/x7.jpg', base: 2400 },
  { id: 'blindata-x9', name: 'Ușă exterior Blindată X9', img: 'images/usi/x9.jpg', base: 2850 },
  { id: 'aluminiu-slim', name: 'Ușă exterior Aluminiu Slim', img: 'images/usi/slim.jpg', base: 3200 },
]

// Culori / finisaje — id, nume, hex (pentru mostră), supliment de preț (RON)
const COLORS = [
  { id: 'alb', name: 'Alb', hex: '#F5F5F3', surcharge: 0 },
  { id: 'nuc', name: 'Nuc', hex: '#5A4534', surcharge: 0 },
  { id: 'stejar', name: 'Stejar', hex: '#C9A876', surcharge: 0 },
  { id: 'antracit', name: 'Antracit', hex: '#3B3B3D', surcharge: 60 },
  { id: 'gri-piatra', name: 'Gri piatră', hex: '#9B9A93', surcharge: 40 },
  { id: 'negru-mat', name: 'Negru mat', hex: '#111111', surcharge: 80 },
]

// Dimensiuni fixe (lățime x înălțime) — id, etichetă, multiplicator de preț
const SIZES = [
  { id: '60x200', label: '60 × 200 cm', mult: 0.94 },
  { id: '70x200', label: '70 × 200 cm', mult: 1.00 },
  { id: '80x200', label: '80 × 200 cm', mult: 1.06 },
  { id: '90x200', label: '90 × 200 cm', mult: 1.12 },
  { id: '100x210', label: '100 × 210 cm', mult: 1.22 },
]

// Excepții de preț (opțional) — pentru a fixa manual o combinație exactă,
// indiferent de formulă. Cheie: "idModel|idCuloare|idDimensiune"
const PRICE_OVERRIDES = {
  // 'blindata-x9|negru-mat|100x210': 3990,
}

function priceFor(modelId, colorId, sizeId) {
  const key = `${modelId}|${colorId}|${sizeId}`
  if (PRICE_OVERRIDES.hasOwnProperty(key)) return PRICE_OVERRIDES[key]
  const model = MODELS.find((m) => m.id === modelId)
  const color = COLORS.find((c) => c.id === colorId)
  const size = SIZES.find((s) => s.id === sizeId)
  return Math.round(((model.base + color.surcharge) * size.mult) / 10) * 10
}

function formatRON(n) {
  return n.toLocaleString('ro-RO') + ' RON'
}

/* =========================================================================
   Componenta — nu trebuie modificată pentru a schimba date.
   ========================================================================= */

export default function ConfiguratorUsi() {
  const [modelId, setModelId] = useState(MODELS[0].id)
  const [colorId, setColorId] = useState(COLORS[0].id)
  const [sizeId, setSizeId] = useState(SIZES[0].id)
  const [imgError, setImgError] = useState(false)

  const model = MODELS.find((m) => m.id === modelId)
  const color = COLORS.find((c) => c.id === colorId)
  const size = SIZES.find((s) => s.id === sizeId)
  const price = priceFor(modelId, colorId, sizeId)

  function pick(setter, id) {
    setImgError(false)
    setter(id)
  }

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Configurator / Uși</p>
        <h2 style={{ marginTop: 10, marginBottom: 36 }}>Configurează-ți ușa</h2>

        <div className="grid-2">
          {/* ---------- Preview ---------- */}
          <div>
            <div className="photo-placeholder" style={{ aspectRatio: '3/4', flexDirection: 'column', gap: 10 }}>
              {!imgError ? (
                <img
                  src={model.img}
                  alt={model.name}
                  onError={() => setImgError(true)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: color.hex, border: '1px solid rgba(17,17,17,0.14)',
                  }} />
                  <div style={{ fontSize: 14, color: '#111' }}>{model.name}</div>
                  <div>imagine în curs de adăugare</div>
                </>
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#6e6e6e', marginTop: 14 }}>
              <span>{model.name}</span>
              <span>{color.name} · {size.label}</span>
            </div>
          </div>

          {/* ---------- Controls ---------- */}
          <div>
            {/* Model */}
            <div style={{ marginBottom: 28 }}>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Model</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid rgba(17,17,17,0.14)' }}>
                {MODELS.map((m, i) => (
                  <button
                    key={m.id}
                    onClick={() => pick(setModelId, m.id)}
                    style={{
                      textAlign: 'left', padding: '12px 16px', cursor: 'pointer',
                      background: m.id === modelId ? '#111' : '#fff',
                      color: m.id === modelId ? '#fff' : '#111',
                      border: 'none',
                      borderTop: i === 0 ? 'none' : '1px solid rgba(17,17,17,0.10)',
                      display: 'flex', justifyContent: 'space-between', fontSize: 14,
                    }}
                  >
                    <span>{m.name}</span>
                    <span style={{ opacity: 0.65 }}>de la {formatRON(m.base)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Culoare */}
            <div style={{ marginBottom: 28 }}>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Culoare — {color.name}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {COLORS.map((c) => (
                  <button
                    key={c.id}
                    title={c.name}
                    onClick={() => pick(setColorId, c.id)}
                    style={{
                      width: 34, height: 34, cursor: 'pointer',
                      background: c.hex,
                      border: c.id === colorId ? '2px solid #111' : '1px solid rgba(17,17,17,0.2)',
                      outline: c.id === colorId ? '2px solid #fff' : 'none',
                      outlineOffset: c.id === colorId ? '-4px' : '0',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Dimensiune */}
            <div style={{ marginBottom: 32 }}>
              <p className="eyebrow" style={{ marginBottom: 10 }}>Dimensiune</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {SIZES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => pick(setSizeId, s.id)}
                    style={{
                      padding: '9px 14px', fontSize: 13.5, cursor: 'pointer',
                      background: s.id === sizeId ? '#111' : '#fff',
                      color: s.id === sizeId ? '#fff' : '#111',
                      border: '1px solid rgba(17,17,17,0.2)',
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="hairline-top" style={{ paddingTop: 24 }}>
              <div style={{ fontSize: 38, fontWeight: 300 }}>{formatRON(price)}</div>
              <p style={{ fontSize: 12.5, marginTop: 6 }}>
                Preț informativ, poate varia în funcție de stoc și montaj.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
