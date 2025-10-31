import { useEffect, useState } from 'react'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav className="navbar">
      <div className="container nav-row">
        <a href="#home" className="brand">
          <span className="brand-mark" aria-hidden="true">◆</span>
          <span className="brand-text">Enterprise</span>
        </a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a className="btn" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}