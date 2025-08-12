import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import BackgroundStripes from "@/components/background-stripes"
import AnimatedBackground from "@/components/animated-background"
import BackgroundPaths from "@/components/background-paths"

export const metadata = {
  title: "AI Automation Services - ShabbyMinds",
  description:
    "Intelligent AI agents that can perform complex tasks, make decisions, and interact with your systems autonomously.",
}

export default function AIAutomationService() {
  const serviceData = {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Intelligent AI agents that can perform complex tasks, make decisions, and interact with your systems autonomously.",
    icon: "Brain",
    color: "blue",
    deliveryTime: "4-8 weeks",
    priceRange: "Contact us for pricing",
    features: [
      "Natural Language Processing",
      "Decision Making Systems",
      "Task Automation",
      "Learning Capabilities",
      "Custom AI Model Training",
      "API Integration",
      "Workflow Automation",
      "Data Analysis & Insights",
    ],
    benefits: [
      "Reduce manual work by up to 80%",
      "24/7 automated operations",
      "Improved accuracy and consistency",
      "Scalable intelligent solutions",
      "Cost reduction in operations",
      "Enhanced customer experience",
    ],
    useCases: [
      {
        title: "Customer Support Automation",
        description:
          "AI-powered chatbots that handle customer inquiries, provide instant responses, and escalate complex issues to human agents.",
      },
      {
        title: "Document Processing",
        description:
          "Automated extraction and processing of data from documents, invoices, and forms with high accuracy.",
      },
      {
        title: "Predictive Analytics",
        description: "AI models that analyze patterns and predict future trends to help with business decision making.",
      },
      {
        title: "Content Generation",
        description: "Automated creation of marketing content, product descriptions, and personalized communications.",
      },
    ],
    technologies: ["Python", "TensorFlow", "OpenAI GPT", "Langchain", "Hugging Face", "AWS AI Services"],
    process: [
      "Requirements Analysis & AI Strategy Planning",
      "Data Collection & Preparation",
      "AI Model Development & Training",
      "Integration & Testing",
      "Deployment & Monitoring",
      "Ongoing Optimization & Support",
    ],
  }

  return (
    <div className="relative min-h-screen bg-black">
      <BackgroundPaths />
      <AnimatedBackground />
      <BackgroundStripes />

      <div className="relative z-10">
        <Navbar />
        <ServiceDetailPage service={serviceData} />
        <Footer />
      </div>
    </div>
  )
}
