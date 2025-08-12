import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import { Search } from "lucide-react"

const service = {
  id: "seo",
  title: "SEO",
  icon: <Search className="w-12 h-12" />,
  description:
    "Search engine optimization services to improve organic rankings and drive qualified traffic to your website.",
  longDescription:
    "Our SEO service helps businesses improve their organic search visibility and drive qualified traffic to their websites. We use proven strategies and best practices to optimize your website for search engines while providing a great user experience.",
  features: [
    "Keyword Research",
    "On-Page Optimization",
    "Technical SEO",
    "Content Strategy",
    "Link Building",
    "Local SEO",
    "Site Speed Optimization",
    "Mobile Optimization",
  ],
  benefits: [
    "Improved search engine rankings",
    "Increased organic traffic",
    "Better user experience",
    "Higher conversion rates",
    "Long-term sustainable results",
    "Competitive advantage",
  ],
  process: [
    "Website audit and competitor analysis",
    "Keyword research and strategy development",
    "Technical SEO implementation",
    "Content optimization and creation",
    "Link building and outreach",
    "Ongoing monitoring and reporting",
  ],
  deliveryTime: "2-4 weeks",
  color: "orange",
}

export const metadata = {
  title: "SEO Services - Search Engine Optimization - ShabbyMinds",
  description:
    "Search engine optimization services to improve organic rankings and drive qualified traffic to your website.",
}

export default function SEOPage() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
