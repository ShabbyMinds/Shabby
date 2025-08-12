import Navbar from "@/components/navbar"
import ContactPage from "@/components/contact-page"
import Footer from "@/components/footer"

export default function Contact() {
return (
  <div className="relative min-h-screen bg-black">
    <div className="relative z-10">
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  </div>
)
}
