import { Routes, Route } from "react-router-dom"
import Header from "./components/layouts/Header.jsx"
import Footer from "./components/layouts/Footer.jsx"
// Importez vos pages
import Homepage from "./pages/Homepage.jsx"

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  )
}

export default App