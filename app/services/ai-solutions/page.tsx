import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import { Brain } from "lucide-react"

const service = {
  id: "ai-solutions",
  title: "Agentic AI Solutions",
  icon: <Brain className="w-12 h-12" />,
  description:
    "Intelligent AI agents that can perform complex tasks, make decisions, and interact with your systems autonomously.",
  longDescription:
    "Our AI solutions service provides businesses with intelligent agents that can automate complex tasks, make decisions, and interact with systems autonomously. We develop custom AI solutions that help businesses improve efficiency, reduce costs, and enhance customer experiences.",
  features: [
    "Natural Language Processing",
    "Decision Making Systems",
    "Task Automation",
    "Learning Capabilities",
    "Custom AI Model Training",
    "API Integration",
    "Conversational AI",
    "Predictive Analytics",
  ],
  benefits: [
    "Automated complex processes",
    "Improved operational efficiency",
    "24/7 intelligent assistance",
    "Reduced operational costs",
    "Enhanced customer experience",
    "Scalable AI solutions",
  ],
  process: [
    "AI strategy consultation and planning",
    "Data analysis and model selection",
    "Custom AI development and training",
    "Integration and testing",
    "Deployment and monitoring",
    "Ongoing optimization and support",
  ],
  deliveryTime: "4-8 weeks",
  color: "blue",
}

export const metadata = {
  title: "AI Solutions - Agentic AI Development - ShabbyMinds",
  description:
    "Intelligent AI agents that can perform complex tasks, make decisions, and interact with your systems autonomously.",
}

export default function AISolutionsPage() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
