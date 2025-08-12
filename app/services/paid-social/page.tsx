import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import { TrendingUp } from "lucide-react"

const service = {
  id: "paid-social",
  title: "Paid Social",
  icon: <TrendingUp className="w-12 h-12" />,
  description:
    "Strategic social media advertising campaigns across Facebook, Instagram, LinkedIn, and other platforms to maximize ROI.",
  longDescription:
    "Our paid social media advertising service helps businesses reach their target audience through strategic campaigns across major social platforms. We create, manage, and optimize campaigns to drive engagement, leads, and conversions while maximizing your return on investment.",
  features: [
    "Facebook & Instagram Ads",
    "LinkedIn Advertising",
    "Twitter Ads Management",
    "Audience Targeting",
    "Creative Development",
    "Performance Analytics",
    "A/B Testing",
    "Campaign Optimization",
  ],
  benefits: [
    "Increased brand awareness and reach",
    "Higher quality leads and conversions",
    "Improved ROI through optimization",
    "Detailed performance reporting",
    "Expert campaign management",
    "Creative asset development",
  ],
  process: [
    "Initial consultation and goal setting",
    "Audience research and targeting strategy",
    "Creative development and campaign setup",
    "Campaign launch and monitoring",
    "Ongoing optimization and reporting",
    "Monthly performance review and strategy adjustment",
  ],
  deliveryTime: "1-2 weeks",
  color: "blue",
}

export const metadata = {
  title: "Paid Social Media Advertising Services - ShabbyMinds",
  description:
    "Strategic social media advertising campaigns across Facebook, Instagram, LinkedIn, and other platforms to maximize ROI.",
}

export default function PaidSocialPage() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
