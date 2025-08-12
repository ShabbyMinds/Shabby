import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import { Search } from "lucide-react"

const service = {
  id: "google-ads",
  title: "Google Ads",
  icon: <Search className="w-12 h-12" />,
  description:
    "Comprehensive Google Ads management including search, display, shopping, and YouTube advertising campaigns.",
  longDescription:
    "Our Google Ads service provides comprehensive campaign management across all Google advertising platforms. From search campaigns to display advertising, shopping ads, and YouTube campaigns, we help businesses reach customers at every stage of their buying journey.",
  features: [
    "Search Campaigns",
    "Display Advertising",
    "Shopping Ads",
    "YouTube Advertising",
    "Keyword Research",
    "Conversion Tracking",
    "Landing Page Optimization",
    "Bid Management",
  ],
  benefits: [
    "Immediate visibility in search results",
    "Targeted reach to potential customers",
    "Measurable ROI and performance",
    "Expert keyword optimization",
    "Comprehensive campaign management",
    "Detailed analytics and reporting",
  ],
  process: [
    "Account audit and strategy development",
    "Keyword research and competitor analysis",
    "Campaign structure and ad creation",
    "Landing page optimization",
    "Campaign launch and monitoring",
    "Ongoing optimization and performance reporting",
  ],
  deliveryTime: "1-2 weeks",
  color: "green",
}

export const metadata = {
  title: "Google Ads Management Services - ShabbyMinds",
  description:
    "Comprehensive Google Ads management including search, display, shopping, and YouTube advertising campaigns.",
}

export default function GoogleAdsPage() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
