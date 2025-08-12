import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServicesPage from "@/components/services-page"

export default function Services() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10">
        <Navbar />
        <ServicesPage />
        <Footer />
      </div>
    </div>
  )
}
