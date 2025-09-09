import { Routes, Route } from "react-router-dom"
import Header from "./components/layouts/Header.jsx"
import Footer from "./components/layouts/Footer.jsx"
// pages
import Homepage from "./pages/Homepage.jsx"
import Error from "./pages/Error.jsx"
import About from "./pages/About.jsx"
import Realisation from "./pages/Realisation.jsx"



function App() {
  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/realisation" element={<Realisation />} />
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App