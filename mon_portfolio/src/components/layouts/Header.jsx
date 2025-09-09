import "../../SASS/layouts/header.css"
import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import { AnimatedBanner } from "../item/AnimatedBanner"

function Header () {
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
      setScrollPosition(Math.round(scrollTop)) // pour l’indicateur
      setIsSticky(scrollTop >= navbarOffsetTop)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // appelle une fois au montage

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
      <header id="accueil">
        <AnimatedBanner />
      </header>

      {/* Navbar */}
      <nav
        ref={navbarRef}
        className={`navbar ${isSticky ? 'sticky' : ''}`}
      >
        <div className="name">&lt;/&gt; HHoumadi</div>
          {/* Bouton Hamburger */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
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
          <li><a href="#activites">Activités</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Ajoute un "spacer" pour éviter le saut quand la navbar devient sticky */}
      {isSticky && <div style={{ height: `${navbarHeight}px` }} />}

    </div>
  )
}

export default Header
