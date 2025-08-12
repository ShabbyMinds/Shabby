import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import { MessageSquare } from "lucide-react"

const service = {
  id: "whatsapp-automation",
  title: "WhatsApp Automation",
  icon: <MessageSquare className="w-12 h-12" />,
  description: "Complete WhatsApp business automation with chatbots, bulk messaging, and customer engagement tools.",
  longDescription:
    "Our WhatsApp automation service helps businesses streamline customer communication through intelligent chatbots, automated messaging, and comprehensive customer engagement tools. We create solutions that improve response times and enhance customer satisfaction.",
  features: [
    "Chatbot Integration",
    "Bulk Messaging",
    "Auto Responses",
    "Analytics Dashboard",
    "Customer Segmentation",
    "Multi-agent Support",
    "Message Templates",
    "Contact Management",
  ],
  benefits: [
    "Improved customer response times",
    "24/7 customer support availability",
    "Increased customer engagement",
    "Streamlined communication processes",
    "Better customer satisfaction",
    "Reduced operational costs",
  ],
  process: [
    "WhatsApp Business setup and verification",
    "Chatbot design and development",
    "Integration with existing systems",
    "Testing and optimization",
    "Launch and training",
    "Ongoing support and maintenance",
  ],
  deliveryTime: "1-3 weeks",
  color: "purple",
}

export const metadata = {
  title: "WhatsApp Automation Services - Business Chatbots - ShabbyMinds",
  description: "Complete WhatsApp business automation with chatbots, bulk messaging, and customer engagement tools.",
}

export default function WhatsAppAutomationPage() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
