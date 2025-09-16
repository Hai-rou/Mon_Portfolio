import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";
import HomeIntro from "./pages/HomeIntro";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer"; // Assure-toi que ce fichier existe
import { AnimatedBanner } from "./components/item/AnimatedBanner";
// pages
import Homepage from "./pages/Homepage.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Realisation from "./pages/Realisation.jsx";
import Activites from "./pages/Acti.jsx";
import Competence from "./pages/Competence.jsx";
//gsap
import gsap from "gsap";

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
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/realisation" element={<Realisation />} />
              <Route path="/activites" element={<Activites />} />
              <Route path="/competence" element={<Competence />} />
              <Route path="*" element={<Error />} />
            </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;