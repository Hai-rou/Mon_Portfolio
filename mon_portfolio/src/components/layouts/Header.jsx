import "../../SASS/layouts/header.scss"
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import ThemeToggle from '../item/ThemeToggle'

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
    const nav = document.querySelector('#page-top');
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
        
        <div className="nav-actions">
          <ThemeToggle />
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
        </div>
        
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={scrollToTop}>
            <li>Accueil</li>
          </Link>
          <Link to="/about" onClick={scrollToNav}>
            <li>Présentation</li>
          </Link>
          <Link to="/realisation" onClick={scrollToNav}>
            <li>Réalisations</li>
          </Link>
          <Link to="/activites" onClick={scrollToNav}>
            <li>Activités</li>
          </Link>
          <Link to="/competence" onClick={scrollToNav}>
            <li>Compétences</li>
          </Link>
          <a 
          href="/assets/CV/CV internet 2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          ><li>CV</li></a>
        </ul>
      </nav>
      {isSticky && <div style={{ height: `${navbarHeight}px` }} />}
    </div>
  )
}

export default Header