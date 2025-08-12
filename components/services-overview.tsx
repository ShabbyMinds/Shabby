"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Bot, Code, Smartphone, MessageSquare, Workflow, BarChart3, Cpu, Globe } from 'lucide-react'
import AnimatedButton from "./animated-button"
import Link from "next/link"

const services = [
  {
    title: "AI Automation",
    description:
      "Leverage artificial intelligence to automate repetitive tasks, analyze data, and make intelligent decisions.",
    features: [
      "Natural Language Processing",
      "Machine Learning Integration",
      "Predictive Analytics",
      "Custom AI Solutions",
    ],
    icon: <Bot className="w-8 h-8" />,
    gradient: "from-red-500/20 to-red-600/10",
    color: "red",
  },
  {
    title: "WhatsApp Automation",
    description: "Transform customer engagement with automated responses, personalized messages, and 24/7 support.",
    features: [
      "Automated Customer Support",
      "Bulk Messaging Campaigns",
      "Interactive Chatbots",
      "Order Updates & Notifications",
    ],
    icon: <MessageSquare className="w-8 h-8" />,
    gradient: "from-green-500/20 to-green-600/10",
    color: "green",
  },
  {
    title: "Web Design & Development",
    description:
      "Create stunning, responsive websites using cutting-edge technologies like React, Next.js, and Spring Boot.",
    features: ["Responsive Design", "Modern UI/UX", "SEO Optimization", "Performance Tuning"],
    icon: <Code className="w-8 h-8" />,
    gradient: "from-blue-500/20 to-blue-600/10",
    color: "blue",
  },
  {
    title: "Workflow Automation",
    description:
      "Optimize business processes by eliminating manual tasks, reducing errors, and improving productivity.",
    features: ["Business Process Automation", "Document Processing", "Approval Workflows", "System Integration"],
    icon: <Workflow className="w-8 h-8" />,
    gradient: "from-purple-500/20 to-purple-600/10",
    color: "purple",
  },
  {
    title: "Custom Software Solutions",
    description: "Develop tailored software solutions to address your unique business challenges and requirements.",
    features: ["Custom Web Applications", "Mobile App Development", "Enterprise Software", "Legacy System Integration"],
    icon: <Smartphone className="w-8 h-8" />,
    gradient: "from-orange-500/20 to-orange-600/10",
    color: "orange",
  },
  {
    title: "IoT Solutions",
    description: "Connect physical devices to the digital world with real-time monitoring and control capabilities.",
    features: ["IoT Device Integration", "Real-time Monitoring", "Data Analytics", "Predictive Maintenance"],
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-indigo-500/20 to-indigo-600/10",
    color: "indigo",
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with comprehensive analytics and reporting solutions.",
    features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Custom Reporting"],
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: "from-teal-500/20 to-teal-600/10",
    color: "teal",
  },
  {
    title: "UI/UX Design",
    description: "Create intuitive and engaging user experiences that convert visitors into customers.",
    features: ["User Research & Testing", "Wireframing & Prototyping", "Visual Design", "Interaction Design"],
    icon: <Globe className="w-8 h-8" />,
    gradient: "from-pink-500/20 to-pink-600/10",
    color: "pink",
  },
]

export default function ServicesOverview() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const getColorClasses = (color: string) => {
    const colors = {
      red: { icon: "text-red-400", border: "border-red-500/30", hover: "hover:border-red-400/50" },
      green: { icon: "text-green-400", border: "border-green-500/30", hover: "hover:border-green-400/50" },
      blue: { icon: "text-blue-400", border: "border-blue-500/30", hover: "hover:border-blue-400/50" },
      purple: { icon: "text-purple-400", border: "border-purple-500/30", hover: "hover:border-purple-400/50" },
      orange: { icon: "text-orange-400", border: "border-orange-500/30", hover: "hover:border-orange-400/50" },
      indigo: { icon: "text-indigo-400", border: "border-indigo-500/30", hover: "hover:border-indigo-400/50" },
      teal: { icon: "text-teal-400", border: "border-teal-500/30", hover: "hover:border-teal-400/50" },
      pink: { icon: "text-pink-400", border: "border-pink-500/30", hover: "hover:border-pink-400/50" },
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Comprehensive AI & Web Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our full range of services designed to transform your business with cutting-edge technology and
            innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color)
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className={`bg-gradient-to-br ${service.gradient} border ${colorClasses.border} ${colorClasses.hover} rounded-2xl p-6 bg-gray-900/50 transition-all duration-300 group`}
              >
                <div className={`${colorClasses.icon} mb-6`}>{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <div className={`w-1.5 h-1.5 bg-${service.color}-400 rounded-full mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/services">
                  <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100 text-sm">
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </AnimatedButton>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg">
              <span className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </AnimatedButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
