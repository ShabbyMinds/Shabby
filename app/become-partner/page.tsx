"use client"
import { motion } from "framer-motion"
import { useForm, ValidationError } from "@formspree/react"
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from "lucide-react"
import AnimatedButton from "@/components/animated-button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Expand Your Offerings",
    description:
      "Instantly expand your service portfolio with our comprehensive suite of technology solutions without investing in development resources.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Increase Revenue",
    description:
      "Create new revenue streams by offering premium technology services to your clients with competitive margins and flexible pricing models.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Zero Technical Risk",
    description:
      "Deliver high-quality technical solutions without the risks associated with hiring and managing a development team.",
  },
]

const whyPartner = [
  "Comprehensive Technical Support - Our expert team handles all technical aspects, from development to deployment and maintenance.",
  "Competitive Profit Margins - Earn up to 45% profit margins on projects with our tiered partnership structure.",
  "Complete White Labeling - All solutions are delivered under your brand with no mention of our involvement.",
  "Sales and Marketing Support - Access to sales materials, proposal templates, and technical consultation for client meetings.",
  "Flexible Partnership Model - No upfront fees or minimum commitments—you only pay for projects you bring in.",
]

const processSteps = [
  {
    number: "1",
    title: "Application",
    description: "Complete and submit the partner application form below.",
  },
  {
    number: "2",
    title: "Evaluation",
    description: "Our team reviews your application and schedules an introductory call.",
  },
  {
    number: "3",
    title: "Onboarding",
    description: "Complete our comprehensive onboarding process and receive all necessary resources.",
  },
  {
    number: "4",
    title: "Active Partnership",
    description: "Start offering services to your clients with our full support.",
  },
]

const services = [
  "Web Development",
  "Mobile App Development",
  "E-commerce Solutions",
  "CRM Systems",
  "AI Solutions",
  "Blockchain Applications",
  "Cloud Services",
  "DevOps",
  "UI/UX Design",
  "Quality Assurance",
]

const capacityOptions = ["1-5 clients", "6-10 clients", "11-20 clients", "21-50 clients", "50+ clients"]

const communicationOptions = ["Email", "Phone", "WhatsApp", "Slack", "Microsoft Teams"]

export default function BecomePartnerPage() {
  const [state, handleSubmit] = useForm("xovlpyyl")

  if (state.succeeded) {
    return (
      <div className="relative min-h-screen bg-black">
        <div className="relative z-10">
          <Navbar />
          <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-md w-full text-center"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-12 backdrop-blur-sm">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Application Submitted!</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Thank you for your interest in becoming a ShabbyMinds partner.
                </p>
                <p className="text-gray-400 mb-8">
                  Our team will review your application and get back to you within 24-48 hours. We're excited to
                  potentially work with you!
                </p>
                <Link href="/">
                  <AnimatedButton className="bg-red-600 text-white hover:bg-red-700">Back to Home</AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10">
        <Navbar />

        <section className="py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Become a Partner</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Join our white label partnership program and transform your business with our enterprise-grade
                technology solutions.
              </p>
            </motion.div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center backdrop-blur-sm"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
                    <div className="text-red-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Why Partner With Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 mb-20 backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Partner With Us?</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {whyPartner.slice(0, 3).map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{reason}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-6">
                  {whyPartner.slice(3).map((reason, index) => (
                    <motion.div
                      key={index + 3}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{reason}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="text-center mt-8">
                <Link href="/pricing">
                  <AnimatedButton className="bg-red-600 text-white hover:bg-red-700">
                    View Partnership Tiers
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>

            {/* Partnership Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Partnership Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                      <span className="text-red-400 font-bold text-lg">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Apply to Become a Partner</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Complete the form below to apply for our white label partnership program. All fields marked with * are
                  required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    placeholder="Enter your company name"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Just starting out? No problem! You can use your personal brand name.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      placeholder="you@example.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">
                      WhatsApp Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      placeholder="+1 (555) 123-4567"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Don't use WhatsApp? No problem, this field is optional.
                    </p>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      placeholder="Enter your country"
                    />
                  </div>
                </div>

                {/* Services Interested */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">Services Interested In *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {services.map((service) => (
                      <label key={service} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="servicesInterested"
                          value={service}
                          className="w-4 h-4 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500 focus:ring-2"
                        />
                        <span className="text-sm text-gray-300">{service}</span>
                      </label>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Not sure which services you want to offer? Select a few to start with - you can always add more
                    later!
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                    Previous Experience *
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    placeholder="Tell us about your background and experience..."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    New to white labeling? No problem! Just tell us about your background and why you're interested.
                  </p>
                </div>

                {/* Capacity and Communication */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="capacity" className="block text-sm font-medium text-gray-300 mb-2">
                      Monthly Client Capacity *
                    </label>
                    <select
                      id="capacity"
                      name="capacity"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    >
                      <option value="">Select capacity</option>
                      {capacityOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-gray-500 mt-1">Just starting? Choose 1-5. We'll help you scale up!</p>
                  </div>
                  <div>
                    <label htmlFor="communication" className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Communication *
                    </label>
                    <select
                      id="communication"
                      name="communication"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    >
                      <option value="">Select preferred method</option>
                      {communicationOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information (optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    placeholder="Anything else you'd like us to know..."
                  />
                </div>

                {/* Landing Page Option */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="needLandingPage"
                    name="needLandingPage"
                    className="w-4 h-4 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500 focus:ring-2 mt-1"
                  />
                  <label htmlFor="needLandingPage" className="text-sm text-gray-300">
                    I need a $99 landing page for my agency (optional) -{" "}
                    <Link href="/partner-landing-page" className="text-red-400 hover:text-red-300 underline">
                      View Details
                    </Link>
                  </label>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    required
                    className="w-4 h-4 text-red-600 bg-gray-800 border-gray-600 rounded focus:ring-red-500 focus:ring-2 mt-1"
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-300">
                    I agree to the{" "}
                    <Link href="/terms-conditions" className="text-red-400 hover:text-red-300">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-red-400 hover:text-red-300">
                      Privacy Policy
                    </Link>
                    . *
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <AnimatedButton
                    type="submit"
                    disabled={state.submitting}
                    className="bg-red-600 text-white hover:bg-red-700 px-12 py-4 text-lg"
                  >
                    {state.submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </AnimatedButton>
                </div>
              </form>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center mt-20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Have Questions?</h3>
              <p className="text-gray-400 mb-8">
                Our team is ready to answer any questions you may have about our partnership program.
              </p>
              <div className="flex flex-row gap-2 sm:gap-4 justify-center">
                <Link href="/faq">
                  <AnimatedButton
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
                  >
                    View FAQ
                  </AnimatedButton>
                </Link>
                <Link href="/contact">
                  <AnimatedButton
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
                  >
                    Contact Us
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
