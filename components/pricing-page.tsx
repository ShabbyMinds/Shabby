"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check, Star, ArrowRight, Users, Zap, Crown, MessageSquare, Mail } from 'lucide-react'
import AnimatedButton from "./animated-button"
import Link from "next/link"

const pricingTiers = [
  {
    name: "Starter Partner",
    price: "Free",
    description: "Perfect for getting started with white-label services",
    features: [
      "Up to 35% revenue share",
      "Basic service catalog access",
      "Email support",
      "Marketing materials provided",
      "Client management dashboard",
      "Monthly performance reports",
    ],
    cta: "Start Free",
    popular: false,
    icon: <Users className="w-6 h-6" />,
  },
  {
    name: "Growth Partner",
    price: "Free",
    description: "Ideal for scaling agencies with higher volume needs",
    features: [
      "Up to 40% revenue share",
      "Full service catalog access",
      "Priority email & chat support",
      "Advanced marketing materials",
      "White-label client portal",
      "Weekly performance reports",
      "Dedicated account manager",
      "Custom pricing options",
    ],
    cta: "Get Started",
    popular: true,
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "Enterprise Partner",
    price: "Free",
    description: "For established agencies requiring premium support",
    features: [
      "Up to 45% revenue share",
      "Complete service ecosystem",
      "24/7 phone & chat support",
      "Custom marketing materials",
      "Fully branded solutions",
      "Real-time analytics dashboard",
      "Dedicated success team",
      "Custom integrations",
      "Priority development requests",
    ],
    cta: "Contact Sales",
    popular: false,
    icon: <Crown className="w-6 h-6" />,
  },
]

const faqs = [
  {
    question: "How does the revenue sharing work?",
    answer:
      "You earn a percentage of every project based on your tier level. Payments are processed monthly with detailed reporting.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide comprehensive technical support, marketing materials, and dedicated account management based on your tier.",
  },
  {
    question: "Can I upgrade my tier later?",
    answer: "Yes, you can upgrade your partnership tier at any time based on your volume and performance metrics.",
  },
  {
    question: "Do you provide training?",
    answer: "Yes, we offer comprehensive onboarding and ongoing training to ensure your success with our platform.",
  },
]

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Partnership Pricing</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Choose the perfect partnership tier for your agency. All tiers are completely free to join.
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">All partnerships are 100% free</span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-gray-900/50 border rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 ${
                tier.popular ? "border-red-500/50 ring-1 ring-red-500/20" : "border-gray-800"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg ${tier.popular ? "bg-red-500/20" : "bg-gray-800/50"}`}>
                  <div className={tier.popular ? "text-red-400" : "text-gray-400"}>{tier.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">forever</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/become-partner">
                <AnimatedButton
                  className={`w-full ${
                    tier.popular ? "bg-red-600 text-white hover:bg-red-700" : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AnimatedButton>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Optional Landing Page Service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                "Optional"
              </span>{" "}
              Landing Page Service
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Want to focus purely on sales? We can create a professional landing page for your agency and handle all
              the technical details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">What's Included:</h3>
              <ul className="space-y-3">
                {[
                  "Professional landing page design",
                  "Your branding and messaging",
                  "Lead capture forms",
                  "Mobile-responsive design",
                  "SEO optimization",
                  "Analytics integration",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-gray-800/50 rounded-2xl p-6 mb-6">
                <div className="text-3xl font-bold text-white mb-2">One-time Setup</div>
                <div className="text-gray-400">Professional landing page</div>
              </div>
              <Link href="/partner-landing-page">
                <AnimatedButton className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-600 hover:to-orange-600">
                  Request Landing Page
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? "rotate-90" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gray-900/40 border border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Partnership?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful partners who are building profitable tech agencies with our white-label
            solutions.
          </p>

          <div className="flex flex-row gap-2 sm:gap-4 justify-center mb-8">
            <Link href="/become-partner">
              <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg">
                Become a Partner
              </AnimatedButton>
            </Link>
            <Link href="/contact">
              <AnimatedButton
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg"
              >
                Contact Sales
              </AnimatedButton>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>24/7 Support Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>info@shabbyminds.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
