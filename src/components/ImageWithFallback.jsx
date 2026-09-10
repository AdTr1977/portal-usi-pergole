import { useState } from 'react'

// Afișează o imagine; dacă lipsește sau nu se încarcă, arată un
// placeholder cu textul din "label", ca să nu rămână o imagine ruptă.
export default function ImageWithFallback({ src, alt, label, aspectRatio = '4/3' }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="photo-placeholder" style={{ aspectRatio }}>
        {label || alt}
      </div>
    )
  }

  return (
    <div className="photo-placeholder" style={{ aspectRatio, padding: 0, overflow: 'hidden' }}>
      <img
        src={src}
        alt={alt}
        onError={() => setError(true)}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  )
}
