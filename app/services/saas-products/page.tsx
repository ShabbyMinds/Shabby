import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import { Layers } from "lucide-react"

const service = {
  id: "saas-products",
  title: "SaaS Products",
  icon: <Layers className="w-12 h-12" />,
  description:
    "Complete Software-as-a-Service platforms with subscription management, user authentication, and scalable architecture.",
  longDescription:
    "Our SaaS products service helps businesses build complete software-as-a-service platforms from the ground up. We create scalable, secure, and feature-rich applications with subscription management, user authentication, and all the tools needed to run a successful SaaS business.",
  features: [
    "Multi-tenant Architecture",
    "Subscription Billing",
    "User Management",
    "API Integration",
    "Analytics Dashboard",
    "Scalable Infrastructure",
    "Security Features",
    "Payment Processing",
  ],
  benefits: [
    "Recurring revenue model",
    "Scalable business platform",
    "Automated billing and payments",
    "Comprehensive user management",
    "Real-time analytics and insights",
    "Enterprise-grade security",
  ],
  process: [
    "Product strategy and planning",
    "Architecture design and development",
    "Feature development and testing",
    "Payment and billing integration",
    "Security implementation and testing",
    "Launch and ongoing support",
  ],
  deliveryTime: "10-20 weeks",
  color: "cyan",
}

export const metadata = {
  title: "SaaS Products Development - Software as a Service - ShabbyMinds",
  description:
    "Complete Software-as-a-Service platforms with subscription management, user authentication, and scalable architecture.",
}

export default function SaaSProductsPage() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
