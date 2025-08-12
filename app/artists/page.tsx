import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import ArtistsPage from "@/components/artists-page"

export default function Artists() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10">
        <Navbar />
        <ArtistsPage />
        <AnimatedFooter />
      </div>
    </div>
  )
}
