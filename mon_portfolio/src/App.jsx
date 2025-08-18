import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/layouts/Header.jsx"
import { Footer } from "./components/layouts/Footer.jsx"
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
