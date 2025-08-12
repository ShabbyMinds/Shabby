import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import { Database } from "lucide-react"

const service = {
  id: "erp-systems",
  title: "Custom ERP Systems",
  icon: <Database className="w-12 h-12" />,
  description: "Tailored Enterprise Resource Planning systems to streamline your business operations and workflows.",
  longDescription:
    "Our custom ERP systems service provides businesses with comprehensive enterprise resource planning solutions that integrate all aspects of operations. We develop tailored systems that improve efficiency, reduce costs, and provide real-time insights into business performance.",
  features: [
    "Inventory Management",
    "Financial Tracking",
    "HR Management",
    "Reporting Tools",
    "System Integration",
    "Cloud Deployment",
    "User Management",
    "Workflow Automation",
  ],
  benefits: [
    "Streamlined business operations",
    "Improved data accuracy",
    "Real-time business insights",
    "Reduced operational costs",
    "Better decision making",
    "Scalable business processes",
  ],
  process: [
    "Business analysis and requirements gathering",
    "System architecture and design",
    "Custom development and integration",
    "Testing and quality assurance",
    "Deployment and training",
    "Ongoing support and maintenance",
  ],
  deliveryTime: "8-16 weeks",
  color: "orange",
}

export const metadata = {
  title: "Custom ERP Systems - Enterprise Resource Planning - ShabbyMinds",
  description: "Tailored Enterprise Resource Planning systems to streamline your business operations and workflows.",
}

export default function ERPSystemsPage() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
