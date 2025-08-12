import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import { Mail } from "lucide-react"

const service = {
  id: "email-sms",
  title: "Email / SMS Marketing",
  icon: <Mail className="w-12 h-12" />,
  description:
    "Automated email marketing campaigns and SMS marketing solutions to nurture leads and drive conversions.",
  longDescription:
    "Our email and SMS marketing service helps businesses build stronger relationships with their customers through personalized, automated campaigns. We create engaging content and strategic workflows that nurture leads and drive conversions across both email and SMS channels.",
  features: [
    "Email Automation",
    "SMS Campaigns",
    "List Segmentation",
    "A/B Testing",
    "Drip Campaigns",
    "Performance Tracking",
    "Template Design",
    "Deliverability Optimization",
  ],
  benefits: [
    "Higher customer engagement rates",
    "Improved lead nurturing process",
    "Increased conversion rates",
    "Automated customer journeys",
    "Detailed performance analytics",
    "Cost-effective marketing channel",
  ],
  process: [
    "Strategy development and audience analysis",
    "Email template design and SMS setup",
    "Automation workflow creation",
    "List segmentation and targeting",
    "Campaign launch and monitoring",
    "Performance analysis and optimization",
  ],
  deliveryTime: "1-2 weeks",
  color: "purple",
}

export const metadata = {
  title: "Email & SMS Marketing Services - ShabbyMinds",
  description:
    "Automated email marketing campaigns and SMS marketing solutions to nurture leads and drive conversions.",
}

export default function EmailSMSPage() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
