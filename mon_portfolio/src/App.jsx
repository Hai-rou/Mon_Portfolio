import { Routes, Route } from "react-router-dom";
import { useRef, useState, lazy, Suspense } from "react";
import HomeIntro from "./pages/HomeIntro";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { AnimatedBanner } from "./components/item/AnimatedBanner";
import ScrollToTop from "./components/item/ScrollToTop";
import gsap from "gsap";

// Lazy loading des pages
const Homepage = lazy(() => import("./pages/Homepage.jsx"));
const Error = lazy(() => import("./pages/Error.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Realisation = lazy(() => import("./pages/Realisation.jsx"));
const Activites = lazy(() => import("./pages/Acti.jsx"));
const Competence = lazy(() => import("./pages/Competence.jsx"));

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [bannerAnimate, setBannerAnimate] = useState(false);
  const headerNavRef = useRef();

  // Animation du header
  const animateHeader = () => {
    if (headerNavRef.current) {
      gsap.from(headerNavRef.current.children, {
        opacity: 0,
        y: -30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  };

  // Appelée à la fin de l'animation HomeIntro
  const handleEnter = () => {
    setShowIntro(false);
    setTimeout(() => setBannerAnimate(true), 100);
    setTimeout(animateHeader, 100);
  };

  return (
    <>
      {showIntro ? (
        <HomeIntro onEnter={handleEnter} />
      ) : (
        <>
          <AnimatedBanner animate={bannerAnimate} />
          <Header />
          <Suspense fallback={<div>Chargement...</div>}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/realisation" element={<Realisation />} />
              <Route path="/activites" element={<Activites />} />
              <Route path="/competence" element={<Competence />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default App;