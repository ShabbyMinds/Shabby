import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceDetailPage from "@/components/service-detail-page"
import { Globe } from "lucide-react"

const service = {
  id: "web-development",
  title: "Web Development",
  icon: <Globe className="w-12 h-12" />,
  description:
    "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
  longDescription:
    "Our web development service creates custom websites and web applications that are fast, secure, and user-friendly. We use modern technologies and best practices to build solutions that help businesses grow and succeed online.",
  features: [
    "Responsive Design",
    "SEO Optimization",
    "Fast Loading Speed",
    "SSL Security",
    "Content Management",
    "E-commerce Integration",
    "Mobile Optimization",
    "Performance Optimization",
  ],
  benefits: [
    "Professional online presence",
    "Improved user experience",
    "Better search engine rankings",
    "Increased conversions",
    "Mobile-friendly design",
    "Secure and reliable platform",
  ],
  process: [
    "Requirements gathering and planning",
    "Design mockups and wireframes",
    "Development and coding",
    "Testing and quality assurance",
    "Launch and deployment",
    "Ongoing maintenance and support",
  ],
  deliveryTime: "2-6 weeks",
  color: "green",
}

export const metadata = {
  title: "Web Development Services - Custom Websites - ShabbyMinds",
  description:
    "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
}

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  )
}
