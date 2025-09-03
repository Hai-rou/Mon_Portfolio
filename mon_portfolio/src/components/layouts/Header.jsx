import "../../SASS/layouts/header.css"
import { useState, useEffect, useRef } from 'react'
import { AnimatedBanner } from "../item/AnimatedBanner"
import { Link } from "react-router-dom"

function Header () {
  const [isSticky, setIsSticky] = useState(false)
  const navbarRef = useRef(null)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)

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
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#Presenta">Présentation</a></li>
          <li><a href="#realisation">Réalisation</a></li>
          <li><a href="#activites">Activités</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <Link to="/About">A propos</Link>
          </li>
        </ul>
      </nav>

      {/* Ajoute un "spacer" pour éviter le saut quand la navbar devient sticky */}
      {isSticky && <div style={{ height: `${navbarHeight}px` }} />}

    </div>
  )
}

export default Header
