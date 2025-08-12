import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "ShabbyMinds - Success Stories",
  description: "Coming soon - Success stories from our white label partners.",
}

export default function SuccessStories() {
  return (
    <>
      <Navbar />
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Success Stories</h1>
          <p className="text-xl text-gray-400 mb-8">Coming Soon</p>
          <p className="text-gray-500">
            We're currently collecting amazing success stories from our white label partners. Check back soon to see how
            our partners are building successful tech agencies.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
