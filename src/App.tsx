import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MobileBottomNav from "./components/MobileBottomNav"
import WhatsAppButton from "./components/WhatsAppButton"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Industries from "./pages/Industries"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomNav />
      <WhatsAppButton />
    </div>
  )
}

export default App
