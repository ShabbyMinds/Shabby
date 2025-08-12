import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import { Users } from "lucide-react"

const service = {
  id: "crm-solutions",
  title: "CRM Solutions",
  icon: <Users className="w-12 h-12" />,
  description: "Customer Relationship Management systems designed to enhance customer interactions and boost sales.",
  longDescription:
    "Our CRM solutions service provides businesses with comprehensive customer relationship management systems that help track leads, manage customer interactions, and boost sales performance. We create custom solutions that fit your specific business needs and processes.",
  features: [
    "Lead Management",
    "Sales Pipeline",
    "Customer Analytics",
    "Email Integration",
    "Task Automation",
    "Mobile Access",
    "Reporting Dashboard",
    "Contact Management",
  ],
  benefits: [
    "Improved customer relationships",
    "Increased sales conversion rates",
    "Better lead tracking and management",
    "Enhanced team collaboration",
    "Data-driven sales insights",
    "Streamlined sales processes",
  ],
  process: [
    "CRM requirements analysis",
    "System design and customization",
    "Data migration and integration",
    "User training and onboarding",
    "System deployment and testing",
    "Ongoing support and optimization",
  ],
  deliveryTime: "6-12 weeks",
  color: "red",
}

export const metadata = {
  title: "CRM Solutions - Customer Relationship Management - ShabbyMinds",
  description: "Customer Relationship Management systems designed to enhance customer interactions and boost sales.",
}

export default function CRMSolutionsPage() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
