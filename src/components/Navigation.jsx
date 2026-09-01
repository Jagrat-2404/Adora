import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [{ label: 'Services', to: '/services' }, { label: 'Why Adora', to: '/about' }, { label: 'How we work', to: '/process' }]
function Navigation() {
  const [open, setOpen] = useState(false)
  return <header className="adora-header"><nav className="adora-shell adora-nav" aria-label="Main navigation">
    <Link className="adora-logo" to="/" onClick={() => setOpen(false)}>Adora<span>Solution</span></Link>
    <button className="adora-menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? '×' : '☰'}</button>
    <div className={`adora-links ${open ? 'is-open' : ''}`}>{links.map((link) => <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>{link.label}</NavLink>)}<Link className="adora-nav-cta" to="/contact" onClick={() => setOpen(false)}>Start a conversation <span>↗</span></Link></div>
  </nav></header>
}
export default Navigation
