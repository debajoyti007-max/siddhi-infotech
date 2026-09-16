import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import HardwareShowcase from "./components/Showcase/HardwareShowcase"
import Services from "./components/Services/Services"
import Brands from "./components/Brands/Brands"
import DiagnosticMatrix from "./components/Diagnostics/DiagnosticMatrix"
import WhyUs from "./components/WhyUs/WhyUs"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import FloatingDock from "./components/FloatingDock/FloatingDock"

export default function App() {
  return (
    <div className="min-h-screen bg-[#060608] text-zinc-100 relative selection:bg-violet-600/30 selection:text-violet-200">
      <Navbar />
      <main>
        <Hero />
        <HardwareShowcase />
        <Services />
        <Brands />
        <DiagnosticMatrix />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  )
}