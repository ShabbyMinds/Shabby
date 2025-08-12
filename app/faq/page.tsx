import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FAQPage from "@/components/faq-page"

export default function FAQ() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10">
        <Navbar />
        <FAQPage />
        <Footer />
      </div>
    </div>
  )
}
