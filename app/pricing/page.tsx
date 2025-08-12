import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PricingPage from "@/components/pricing-page"

export const metadata = {
  title: "ShabbyMinds - White Label Partnership Pricing",
  description:
    "Explore our white label partnership pricing tiers and start your own tech agency with zero technical expertise required.",
}

export default function Pricing() {
  return (
    <>
      <Navbar />
      <PricingPage />
      <Footer />
    </>
  )
}
