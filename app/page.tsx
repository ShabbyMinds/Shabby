import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import InnovativeServices from "@/components/innovative-services"
import AdvancedServices from "@/components/advanced-services"
import HowItWorks from "@/components/how-it-works"
import ROICalculatorHome from "@/components/roi-calculator-home"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <InnovativeServices />
        <AdvancedServices />
        <HowItWorks />
        <ROICalculatorHome />
        <Footer />
      </div>
    </div>
  )
}
