import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Brands from "./components/Brands/Brands"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import FloatingDock from "./components/FloatingDock/FloatingDock"
import HardwareBackground from "./components/Background/HardwareBackground"
import { LanguageProvider } from "./context/LanguageContext"

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#07070a] text-zinc-100 relative selection:bg-blue-600/30 selection:text-blue-200">
        {/* Floating Real Hardware Images Background */}
        <HardwareBackground />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Brands />
            <Contact />
          </main>
          <Footer />
        </div>
        <FloatingDock />
      </div>
    </LanguageProvider>
  )
}