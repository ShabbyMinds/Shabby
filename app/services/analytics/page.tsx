import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import { BarChart3 } from "lucide-react"

const service = {
  id: "analytics",
  title: "Analytics",
  icon: <BarChart3 className="w-12 h-12" />,
  description: "Comprehensive analytics setup and reporting to track performance and optimize marketing campaigns.",
  longDescription:
    "Our analytics service provides businesses with comprehensive data tracking and reporting solutions. We set up advanced analytics systems that help you understand your customers, track performance, and make data-driven decisions to optimize your marketing efforts.",
  features: [
    "Google Analytics Setup",
    "Conversion Tracking",
    "Custom Dashboards",
    "Performance Reports",
    "Data Analysis",
    "ROI Measurement",
    "Goal Tracking",
    "Audience Insights",
  ],
  benefits: [
    "Data-driven decision making",
    "Improved campaign performance",
    "Better understanding of customers",
    "Optimized marketing spend",
    "Detailed performance insights",
    "Competitive advantage through data",
  ],
  process: [
    "Analytics audit and requirements gathering",
    "Tracking setup and configuration",
    "Custom dashboard creation",
    "Data validation and testing",
    "Training and documentation",
    "Ongoing monitoring and reporting",
  ],
  deliveryTime: "1-2 weeks",
  color: "cyan",
}

export const metadata = {
  title: "Analytics Services - Data Tracking & Reporting - ShabbyMinds",
  description: "Comprehensive analytics setup and reporting to track performance and optimize marketing campaigns.",
}

export default function AnalyticsPage() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
