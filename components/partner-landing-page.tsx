"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Check,
  X,
  Globe,
  Smartphone,
  Zap,
  Shield,
  Users,
  BarChart3,
  Clock,
  Star,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Target,
} from "lucide-react"
import Link from "next/link"
import AnimatedButton from "./animated-button"

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Professional Design",
    description: "Modern, conversion-optimized landing page design that reflects your brand",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Responsive",
    description: "Perfectly optimized for all devices - desktop, tablet, and mobile",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Loading",
    description: "Optimized for speed with 99.9% uptime guarantee",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "SSL Security",
    description: "Secure HTTPS connection with SSL certificate included",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Lead Generation",
    description: "Built-in contact forms and lead capture functionality",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics Ready",
    description: "Google Analytics integration for tracking visitor behavior",
  },
]

const benefits = [
  {
    title: "Professional Credibility",
    description: "Establish trust with potential clients through a professional online presence",
    stats: "87% of clients research online before making contact",
  },
  {
    title: "24/7 Lead Generation",
    description: "Your landing page works around the clock to generate leads while you sleep",
    stats: "Average 3x increase in qualified leads",
  },
  {
    title: "Competitive Advantage",
    description: "Stand out from competitors who lack professional web presence",
    stats: "73% more likely to win projects with professional website",
  },
  {
    title: "Cost Effective Marketing",
    description: "One-time investment that pays for itself with just one client acquisition",
    stats: "ROI typically achieved within 30 days",
  },
]

const comparisonData = [
  {
    feature: "Professional Design",
    diy: false,
    agency: true,
    shabbyminds: true,
  },
  {
    feature: "Domain Registration",
    diy: false,
    agency: false,
    shabbyminds: true,
  },
  {
    feature: "1 Year Hosting",
    diy: false,
    agency: false,
    shabbyminds: true,
  },
  {
    feature: "Mobile Responsive",
    diy: "Maybe",
    agency: true,
    shabbyminds: true,
  },
  {
    feature: "SSL Certificate",
    diy: false,
    agency: "Extra Cost",
    shabbyminds: true,
  },
  {
    feature: "Lead Generation Forms",
    diy: false,
    agency: true,
    shabbyminds: true,
  },
  {
    feature: "Analytics Integration",
    diy: false,
    agency: "Extra Cost",
    shabbyminds: true,
  },
  {
    feature: "SEO Optimization",
    diy: false,
    agency: "Extra Cost",
    shabbyminds: true,
  },
  {
    feature: "Total Cost",
    diy: "$0 (Your Time)",
    agency: "$500-2000+",
    shabbyminds: "$99",
  },
  {
    feature: "Delivery Time",
    diy: "Weeks/Months",
    agency: "2-4 Weeks",
    shabbyminds: "3-5 Days",
  },
]

const testimonials = [
  {
    quote:
      "The landing page ShabbyMinds created for me has generated over 50 qualified leads in just 2 months. Best $99 I've ever spent!",
    author: "Sarah M.",
    role: "Digital Marketing Consultant",
    rating: 5,
  },
  {
    quote:
      "Professional, fast, and exactly what I needed to establish credibility with potential clients. Highly recommend!",
    author: "Mike R.",
    role: "Business Development Partner",
    rating: 5,
  },
  {
    quote: "The ROI was immediate. I closed my first client within a week of launching the landing page.",
    author: "Jennifer L.",
    role: "Tech Solutions Partner",
    rating: 5,
  },
]

export default function PartnerLandingPageComponent() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = ["Features", "Benefits", "Comparison", "Testimonials"]

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-yellow-400 mr-3" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">Partner Landing Page Service</h1>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Get a professional landing page for your agency at just $99 with domain, hosting, and everything you need to
            start generating leads immediately.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-500 mb-8">
            <Clock className="w-5 h-5" />
            <span>Delivered in 3-5 business days</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg">
                Order Your Landing Page
                <ArrowRight className="ml-2 h-5 w-5" />
              </AnimatedButton>
            </Link>
            <AnimatedButton
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
              onClick={() => document.getElementById("details")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </AnimatedButton>
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-red-500/20 rounded-2xl p-8 max-w-2xl mx-auto mb-20"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-yellow-400 mr-2" />
              <h3 className="text-2xl font-bold text-white">Limited Time Offer</h3>
            </div>
            <div className="flex items-baseline justify-center mb-6">
              <span className="text-5xl font-extrabold text-white">$99</span>
              <span className="text-gray-400 ml-2">one-time payment</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>Domain Included</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>1 Year Hosting</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>SSL Certificate</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-green-500 mr-2" />
                <span>Mobile Responsive</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-semibold">
                "Optional"
              </span>{" "}
              - Not required for partnership. Completely optional service.
            </p>
          </div>
        </motion.div>

        {/* Tabs Navigation */}
        <div id="details" className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === index
                    ? "bg-red-600 text-white"
                    : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <div className="text-red-400">{feature.icon}</div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
                  >
                    <div className="flex items-start mb-4">
                      <TrendingUp className="w-8 h-8 text-green-500 mr-4 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                        <p className="text-gray-400 mb-4">{benefit.description}</p>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                          <p className="text-green-400 text-sm font-medium">{benefit.stats}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left p-4 text-white font-semibold">Feature</th>
                        <th className="text-center p-4 text-gray-400">DIY</th>
                        <th className="text-center p-4 text-gray-400">Other Agencies</th>
                        <th className="text-center p-4 text-red-400 font-semibold">ShabbyMinds</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-800/50">
                          <td className="p-4 text-gray-300 font-medium">{row.feature}</td>
                          <td className="p-4 text-center">
                            {typeof row.diy === "boolean" ? (
                              row.diy ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-gray-400 text-sm">{row.diy}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof row.agency === "boolean" ? (
                              row.agency ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-gray-400 text-sm">{row.agency}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof row.shabbyminds === "boolean" ? (
                              row.shabbyminds ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-white font-semibold">{row.shabbyminds}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: "3-5", label: "Days Delivery" },
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "100+", label: "Landing Pages Created" },
            { number: "$99", label: "All Inclusive Price" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Order", description: "Place your order and provide your business details" },
              { step: "2", title: "Design", description: "We create your custom landing page design" },
              { step: "3", title: "Review", description: "Review and request any changes needed" },
              { step: "4", title: "Launch", description: "We launch your site with domain and hosting" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                  <span className="text-red-400 font-bold">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{process.title}</h4>
                <p className="text-gray-400 text-sm">{process.description}</p>
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
          className="text-center bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Target className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Your Landing Page?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of partners who have boosted their credibility and lead generation with our professional
            landing page service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg">
                Order Now - $99
                <ArrowRight className="ml-2 h-5 w-5" />
              </AnimatedButton>
            </Link>
            <Link href="/become-partner">
              <AnimatedButton
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
              >
                Become Partner First
              </AnimatedButton>
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Remember: This is completely optional. Partnership is always free!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
