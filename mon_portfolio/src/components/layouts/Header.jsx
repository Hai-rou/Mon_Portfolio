import "../../SASS/layouts/header.css"
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  const [isSticky, setIsSticky] = useState(false)
  const navbarRef = useRef(null)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const navbar = navbarRef.current
    if (!navbar) return

    setNavbarHeight(navbar.offsetHeight)
    const navbarOffsetTop = navbar.offsetTop

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setScrollPosition(Math.round(scrollTop))
      setIsSticky(scrollTop >= navbarOffsetTop)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToNav = () => {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav
        ref={navbarRef}
        className={`navbar ${isSticky ? 'sticky' : ''}`}
      >
        <div className="name">&lt;/&gt; HHoumadi</div>
        <button
          className="menu-btn"
          onClick={() => {
            if (!isOpen && navbarRef.current) {
              setIsOpen(true);
              navbarRef.current.scrollIntoView({ behavior: "smooth" });
            } else {
              setIsOpen(false);
            }
          }}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={scrollToTop}>
            <li>Accueil</li>
          </Link>
          <Link to="/about" onClick={scrollToNav}>
            <li>Présentation</li>
          </Link>
          <Link to="/realisation" onClick={scrollToNav}>
            <li>Réalisation</li>
          </Link>
          <Link to="/activites" onClick={scrollToNav}>
            <li>Activités</li>
          </Link>
          <Link to="/competence" onClick={scrollToNav}>
            <li>Compétences</li>
          </Link>
          <Link to="/contact" onClick={scrollToNav}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      {isSticky && <div style={{ height: `${navbarHeight}px` }} />}
    </div>
  )
}

export default Header