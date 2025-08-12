"use client"

import { motion } from "framer-motion"
import { Search, Users, Code, Rocket, CheckCircle, ArrowRight } from 'lucide-react'
import AnimatedButton from "./animated-button"
import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Find Clients",
    description:
      "Use your network, marketing skills, and sales expertise to find clients who need tech solutions. You own the client relationship and handle all communication.",
    icon: <Search className="w-8 h-8" />,
    color: "red",
  },
  {
    number: "02",
    title: "We Do The Work",
    description:
      "Our expert team handles all the technical aspects - development, design, automation, and implementation under your brand name.",
    icon: <Code className="w-8 h-8" />,
    color: "blue",
  },
  {
    number: "03",
    title: "You Earn Profits",
    description:
      "You bill the client directly and keep up to 45% of the net profit. No technical skills required, just business acumen.",
    icon: <Rocket className="w-8 h-8" />,
    color: "green",
  },
]

const detailedProcess = [
  {
    step: "1",
    title: "Partnership Application",
    description:
      "Apply to become a white label partner. We'll review your application and schedule a call to discuss the partnership.",
  },
  {
    step: "2",
    title: "Onboarding & Training",
    description:
      "Once approved, you'll receive comprehensive training on our services, pricing, and how to pitch to clients.",
  },
  {
    step: "3",
    title: "Client Acquisition",
    description:
      "Use our sales materials and your network to find clients. We'll provide support for technical questions during sales calls.",
  },
  {
    step: "4",
    title: "Project Handoff",
    description:
      "Once a client signs, you'll gather requirements and hand off the project to our team through our partner portal.",
  },
  {
    step: "5",
    title: "Development & Updates",
    description:
      "Our team develops the solution while providing regular updates. You relay these updates to your client under your brand.",
  },
  {
    step: "6",
    title: "Delivery & Payment",
    description:
      "Once complete, you deliver the solution to your client, collect payment, and pay our agreed fee, keeping your profit margin.",
  },
]

const supportFeatures = [
  {
    title: "Sales Materials",
    description: "Professionally designed brochures, presentations, and proposal templates to help you close deals.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Technical Consultation",
    description: "Our experts can join your client calls to answer technical questions and help you win projects.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Partner Portal",
    description: "A dedicated platform to manage your projects, track progress, and communicate with our team.",
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: "Regular Training",
    description: "Ongoing training sessions on new technologies, sales strategies, and industry trends.",
    icon: <Rocket className="w-6 h-6" />,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Your Journey to Building a Successful Tech Agency</p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto mt-4">
            Our white labeling program makes it easy for you to offer premium tech services without any technical expertise. Here's how we work together.
          </p>
        </motion.div>

        {/* Main Process */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">The Process</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple, Transparent, Profitable. Our white labeling process is designed to be straightforward and
              profitable for our partners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center backdrop-blur-sm hover:border-gray-700 transition-all duration-300">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${step.color}-500/20 flex items-center justify-center`}
                  >
                    <div className={`text-${step.color}-400`}>{step.icon}</div>
                  </div>
                  <div className={`text-4xl font-bold text-${step.color}-400 mb-4`}>{step.number}</div>
                  <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Process */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Detailed Process</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Step-by-Step Journey. Here's a detailed breakdown of how our white labeling partnership works from start
              to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 backdrop-blur-sm hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-400 font-bold text-sm">{process.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white">{process.title}</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partner Support */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Partner Support</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're With You Every Step of the Way. Our comprehensive partner support ensures you have everything you
              need to succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center backdrop-blur-sm hover:border-gray-700 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-red-400">{feature.icon}</div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Start Your Own Tech Agency?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Apply now to become a white label partner and start earning up to 45% profit without any technical
            expertise.
          </p>
          <div className="flex flex-row gap-2 sm:gap-4 justify-center">
            <Link href="/become-partner">
              <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg">
                Apply for Partnership
              </AnimatedButton>
            </Link>
            <Link href="/faq">
              <AnimatedButton
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg"
              >
                Read FAQs
              </AnimatedButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
