import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PartnerLandingPageComponent from "@/components/partner-landing-page"

export const metadata = {
  title: "ShabbyMinds - Partner Landing Page Service",
  description:
    "Professional landing page service for ShabbyMinds partners at just $99 with hosting and domain included.",
}

export default function PartnerLandingPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10">
        <Navbar />
        <PartnerLandingPageComponent />
        <Footer />
      </div>
    </div>
  )
}
