import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Brands from "./components/Brands/Brands"
import SchematicExplorer from "./components/SchematicExplorer/SchematicExplorer"
import HowItWorks from "./components/HowItWorks/HowItWorks"
import WhyUs from "./components/WhyUs/WhyUs"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import FloatingDock from "./components/FloatingDock/FloatingDock"

export default function App() {
  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 relative selection:bg-blue-600/30 selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Brands />
        <SchematicExplorer />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  )
}