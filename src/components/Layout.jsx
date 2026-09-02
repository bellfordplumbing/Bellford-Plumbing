import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { areas, company, services } from '../data/site'
import ServiceIcon from './Icons'
import { iconBySlug } from './ServiceCard'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <div className="site site-home">
      <ScrollToTop />
      <div className="topbar">
        <div className="wrap">
          <div className="topbar-left">
            <span>We are open for Houston plumbing service</span>
            <span>{company.licensed} · {company.tagline}</span>
          </div>
          <span className="topbar-hours">Mon–Fri 7AM–5PM</span>
        </div>
      </div>

      <header className="header">
        <div className="wrap header-inner">
          <NavLink to="/" className="logo" aria-label="Bellford Plumbing home">
            <img src="/images/logo-white.png" alt="Bellford Plumbing Service" width={180} height={158} decoding="async" />
          </NavLink>

          <nav className={open ? 'nav open' : 'nav'} aria-label="Main">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <div className="nav-drop">
              <NavLink to="/services">Services</NavLink>
              <div className="menu">
                <NavLink to="/services" end className="menu-all">
                  View all services
                </NavLink>
                {services.map((s) => (
                  <NavLink key={s.slug} to={`/services/${s.slug}`}>
                    <span className="menu-icon">
                      <ServiceIcon name={iconBySlug[s.slug] || 'water'} />
                    </span>
                    {s.navTitle || s.title}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav-drop">
              <NavLink to="/service-areas">Locations</NavLink>
              <div className="menu">
                <NavLink to="/service-areas" end className="menu-all">
                  All service areas
                </NavLink>
                {areas.map((a) => (
                  <NavLink key={a.slug} to={`/service-areas/${a.slug}`}>
                    {a.title}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/faqs">FAQs</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <a className="btn header-call" href={company.phoneHref}>
            Call Us {company.phone}
          </a>

          <button
            className="menu-toggle"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <img className="footer-logo" src="/images/logo-white.png" alt="Bellford Plumbing" width={180} height={158} decoding="async" />
            <p>
              Licensed plumbing for homes and businesses in Houston and Greater Houston.
              Honest pricing, same-day help when we can, and work that holds up.
            </p>
            <p>
              <a className="btn btn-light" href={company.phoneHref}>
                Call {company.phone}
              </a>
            </p>
          </div>
          <div>
            <h3>Our services</h3>
            <ul>
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <NavLink to={`/services/${s.slug}`}>{s.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Areas we serve</h3>
            <ul>
              {areas.slice(0, 8).map((a) => (
                <li key={a.slug}>
                  <NavLink to={`/service-areas/${a.slug}`}>{a.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Get in touch</h3>
            <p>
              {company.address}
              <br />
              United States
            </p>
            <p>
              Phone: <a href={company.phoneHref}>{company.phone}</a>
              <br />
              Email: <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            {company.hours.map((h) => (
              <p key={h.day}>
                {h.day}: {h.time}
              </p>
            ))}
          </div>
        </div>
        <div className="wrap legal">
          <span>© {new Date().getFullYear()} Bellford Plumbing. All rights reserved.</span>
          <NavLink to="/contact">Request service</NavLink>
        </div>
      </footer>

      <a className="call-dock" href={company.phoneHref}>
        Click to call {company.phone}
      </a>
    </div>
  )
}
