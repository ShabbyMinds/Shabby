import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HowItWorksPage from "@/components/how-it-works-page"

export const metadata = {
  title: "ShabbyMinds - How Our White Label Partnership Works",
  description:
    "Learn how our white-label partnership program works and how you can start your own tech agency with zero technical expertise required.",
}

export default function HowItWorks() {
  return (
    <>
      <Navbar />
      <HowItWorksPage />
      <Footer />
    </>
  )
}
