"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Search, Users, Code, Rocket, CheckCircle, ArrowRight, ChevronRight, Star, BarChart, FileText, MessageSquare, UserPlus, Clock, Award, Calculator, Info, Check, Sparkles } from 'lucide-react'
import AnimatedButton from "./animated-button"

// Partnership steps data
const partnershipSteps = [
  {
    number: "01",
    title: "Apply",
    description: "Complete our simple application form to tell us about your business and experience.",
    icon: <FileText className="w-8 h-8" />,
    color: "purple",
  },
  {
    number: "02",
    title: "Interview",
    description: "We'll schedule a call to discuss the partnership and answer all your questions.",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "blue",
  },
  {
    number: "03",
    title: "Onboarding",
    description: "Once approved, complete our comprehensive onboarding and training program.",
    icon: <UserPlus className="w-8 h-8" />,
    color: "cyan",
  },
  {
    number: "04",
    title: "Find Clients",
    description: "Use your network and our sales materials to find clients who need tech solutions.",
    icon: <Search className="w-8 h-8" />,
    color: "green",
  },
  {
    number: "05",
    title: "We Work",
    description: "Our expert team handles all technical aspects under your brand.",
    icon: <Code className="w-8 h-8" />,
    color: "yellow",
  },
  {
    number: "06",
    title: "You Profit",
    description: "Bill your clients directly and keep your share of the revenue.",
    icon: <BarChart className="w-8 h-8" />,
    color: "red",
  },
]

// Detailed working process data
const workingProcess = [
  {
    step: "1",
    title: "Client Acquisition",
    description:
      "You identify potential clients through your network, marketing efforts, or sales activities. You'll use our professionally designed sales materials to pitch our services under your brand.",
    details: [
      "Use our ready-made pitch decks and proposals",
      "Set your own pricing (we provide recommended ranges)",
      "Schedule technical support for complex sales calls",
      "Complete control over the client relationship",
    ],
  },
  {
    step: "2",
    title: "Project Scoping",
    description:
      "Once a client shows interest, you'll work with them to define the project scope. Our team will provide technical guidance to ensure accurate scoping.",
    details: [
      "Use our project scoping templates",
      "Get technical input from our experts",
      "Prepare formal proposals with accurate timelines",
      "Handle client negotiations directly",
    ],
  },
  {
    step: "3",
    title: "Project Handoff",
    description:
      "After the client signs off, you'll gather detailed requirements and hand off the project to our team through our partner portal.",
    details: [
      "Simple project intake forms",
      "Secure file sharing for assets and documents",
      "Dedicated project manager assignment",
      "Kickoff meeting with our technical team",
    ],
  },
  {
    step: "4",
    title: "Development Phase",
    description:
      "Our team begins work on the project, providing regular updates that you relay to your client under your brand.",
    details: [
      "Regular progress updates through partner portal",
      "White-labeled demonstration sessions",
      "Client feedback collection and implementation",
      "Quality assurance and testing",
    ],
  },
  {
    step: "5",
    title: "Client Approvals",
    description:
      "You present the completed work to your client, gathering feedback and approval. Our team makes any necessary adjustments.",
    details: [
      "Presentation materials and scripts",
      "Technical support for client questions",
      "Revision management and tracking",
      "Final approval documentation",
    ],
  },
  {
    step: "6",
    title: "Project Delivery",
    description:
      "Once the client is satisfied, you deliver the final product. You bill the client directly and pay our agreed service fee.",
    details: [
      "White-labeled delivery documentation",
      "Client training materials",
      "Invoice templates and payment tracking",
      "Commission payout within 7 days",
    ],
  },
  {
    step: "7",
    title: "Ongoing Support",
    description:
      "We provide ongoing maintenance and support for the delivered solution, which you can resell to your clients as a monthly service.",
    details: [
      "24/7 technical monitoring",
      "Regular maintenance and updates",
      "Issue resolution and bug fixes",
      "Additional commission on monthly support packages",
    ],
  },
]

// Partner support features data
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

// Partner testimonials data
const testimonials = [
  {
    quote:
      "I went from struggling freelancer to agency owner making $35K+ monthly without writing a single line of code. ShabbyMinds handles all the tech while I focus on sales.",
    author: "Jason R.",
    role: "Marketing Agency Owner",
    imageSrc: "/placeholder.svg?height=400&width=400",
  },
  {
    quote:
      "The white-label program allowed me to expand my service offerings without hiring technical staff. My clients are thrilled with the results, and I'm earning more than ever.",
    author: "Sarah T.",
    role: "Branding Consultant",
    imageSrc: "/placeholder.svg?height=400&width=400",
  },
  {
    quote:
      "As a sales professional with no technical background, I was skeptical at first. But within 3 months, I closed $50K in projects and earned over $15K in commissions.",
    author: "Michael P.",
    role: "Former Sales Executive",
    imageSrc: "/placeholder.svg?height=400&width=400",
  },
]

// FAQs data
const faqs = [
  {
    question: "Do I need technical knowledge to become a partner?",
    answer:
      "Not at all. Our white-label program is specifically designed for non-technical partners. We handle all the technical aspects while you focus on client relationships and sales.",
  },
  {
    question: "How quickly can I start selling projects?",
    answer:
      "Once approved, you can start selling immediately. Our onboarding process typically takes 1-2 weeks, during which we'll provide you with all the sales materials and training you need to start pitching to clients.",
  },
  {
    question: "What types of projects can I sell?",
    answer:
      "You can sell all our services including web development, AI solutions, WhatsApp automation, mobile apps, custom software, and IoT solutions. We provide detailed service descriptions and pricing guides for each offering.",
  },
  {
    question: "How do payments work?",
    answer:
      "You bill the client directly for the full amount and keep your commission. You then pay us our portion of the project fee. This arrangement gives you complete control over the client relationship and billing process.",
  },
  {
    question: "What if my client has very specific or unique requirements?",
    answer:
      "We can handle custom and complex requirements. Before you finalize any deal with unique specifications, we'll review the requirements to ensure we can deliver. Our team has extensive experience with custom development across various industries.",
  },
  {
    question: "Can I white-label your services under my own brand?",
    answer:
      "That's the core concept of our partnership program. All deliverables, communications, and materials can be white-labeled with your branding. Your clients will never know we're involved.",
  },
]

export default function HowItWorksPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState(0)
  const [projectsPerMonth, setProjectsPerMonth] = useState(3)

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  // Profit calculator
  const calculateProfits = () => {
    const services = [
      { name: "Web Development", avgPrice: 10000, commission: 0.25 },
      { name: "AI Solutions", avgPrice: 20000, commission: 0.2 },
      { name: "Mobile Apps", avgPrice: 15000, commission: 0.25 },
      { name: "Custom Software", avgPrice: 25000, commission: 0.25 },
    ]

    const monthlyEarnings = services.slice(0, projectsPerMonth).reduce((total, service) => {
      return total + service.avgPrice * service.commission
    }, 0)

    const monthlySupport = projectsPerMonth * 500 * 0.25 // $500 avg support * 25% commission
    const totalMonthly = monthlyEarnings + monthlySupport
    const yearlyEarnings = totalMonthly * 12

    return {
      monthlyEarnings,
      monthlySupport,
      totalMonthly,
      yearlyEarnings,
    }
  }

  const profits = calculateProfits()

  return (
    <section className="bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,0,0,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              How Our White Label <span className="text-red-500">Partnership</span> Works
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Partner with us to offer premium tech services under your brand, with zero technical knowledge required.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Build Your Tech Agency Without Writing a Single Line of Code
              </h2>
              <p className="text-gray-400">
                Our white-label partnership program enables you to offer premium tech services to your clients without
                needing any technical expertise. You handle the sales and client relationships, we handle all the
                technical work.
              </p>
              <ul className="space-y-4">
                {[
                  "Keep up to 35% of every project",
                  "Full white-labeling under your brand",
                  "Comprehensive sales and marketing support",
                  "Zero technical knowledge required",
                  "Monthly recurring revenue from support packages",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/become-partner">
                  <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg">
                    Apply for Partnership
                  </AnimatedButton>
                </Link>
              </div>
            </div>

            <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <div>
                    <h3 className="text-lg font-medium text-white">Monthly Earnings Potential</h3>
                    <p className="text-sm text-gray-400">Based on selling just 3 projects per month</p>
                  </div>
                  <span className="text-2xl font-bold text-green-500">$12,500+</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">1x Website Project ($10,000)</span>
                    <span className="text-green-500 font-medium">$2,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">1x AI Solution ($20,000)</span>
                    <span className="text-green-500 font-medium">$5,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">1x Mobile App ($15,000)</span>
                    <span className="text-green-500 font-medium">$3,750</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Monthly Support Packages</span>
                    <span className="text-green-500 font-medium">$1,250+</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Zero technical work required</p>
                    <p className="text-xs text-gray-500">Based on Professional tier commission rates</p>
                  </div>
                  <Clock className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Profit Calculator Section */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Profit Calculator</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Calculate your potential earnings as a white label partner based on the number of projects you sell per
              month.
            </p>
          </motion.div>

          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <label className="block text-white font-medium mb-4">Projects per month: {projectsPerMonth}</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={projectsPerMonth}
                    onChange={(e) => setProjectsPerMonth(Number.parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>1</span>
                    <span>10</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Project Commissions</span>
                    <span className="text-green-500 font-bold">${profits.monthlyEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monthly Support</span>
                    <span className="text-green-500 font-bold">${profits.monthlySupport.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Monthly Total</span>
                      <span className="text-green-500 font-bold text-xl">${profits.totalMonthly.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Yearly Potential</span>
                    <span className="text-green-500 font-bold text-xl">${profits.yearlyEarnings.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <Calculator className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-2">Calculation Breakdown</h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Based on Professional tier (25% commission) with average project values and monthly support
                      packages.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Web Development (avg $10K)</span>
                    <span className="text-gray-300">25% = $2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">AI Solutions (avg $20K)</span>
                    <span className="text-gray-300">20% = $4,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mobile Apps (avg $15K)</span>
                    <span className="text-gray-300">25% = $3,750</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Support (avg $500/mo)</span>
                    <span className="text-gray-300">25% = $125</span>
                  </div>
                </div>

                <div className="mt-6 p-4 border border-dashed border-gray-600 rounded-lg bg-gray-900/30">
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-400 text-xs">
                      * This is not a final number. Actual earnings are calculated on a case-to-case basis depending on
                      project complexity, client requirements, and your partnership tier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Steps Section */}
      <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Partnership Journey</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From application to profit, here's how our partnership process works step by step.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 transition-all duration-300 h-full">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${step.color}-500/20 flex items-center justify-center`}
                  >
                    <div className={`text-${step.color}-400`}>{step.icon}</div>
                  </div>
                  <div className={`text-4xl font-bold text-${step.color}-500 mb-4`}>{step.number}</div>
                  <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < partnershipSteps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional Landing Page Service */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                "Optional"
              </span>{" "}
              Partner Landing Page
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We also offer a completely optional service to create a professional landing page for your agency at just
              $99 with hosting and domain included.
            </p>
          </motion.div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-yellow-400 mr-2" />
                <h3 className="text-2xl font-bold text-white">Partner Landing Page Service</h3>
              </div>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-extrabold text-white">$99</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">What's Included:</h4>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Professional landing page design</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Domain registration included</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">1 year hosting included</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Mobile responsive design</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Important Notes:</h4>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <Info className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Completely optional service</span>
                    </li>
                    <li className="flex items-start">
                      <Info className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Not required for partnership</span>
                    </li>
                    <li className="flex items-start">
                      <Info className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Becoming a partner is free</span>
                    </li>
                    <li className="flex items-start">
                      <Info className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">Can be ordered anytime</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/partner-landing-page">
                <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-8 py-3">
                  Learn More About Landing Page
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Working Process Section */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Detailed Working Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive look at our partnership workflow from client acquisition to recurring revenue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden md:block col-span-1 bg-gray-900/30 border border-gray-800 rounded-xl p-6 h-fit sticky top-20"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Process Steps</h3>
              <nav className="space-y-2">
                {workingProcess.map((process, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center w-full p-3 text-left rounded-lg transition ${
                      activeTab === index ? "bg-red-500/20 text-white" : "hover:bg-gray-800/50 text-gray-400"
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full mr-3 text-sm font-medium ${
                        activeTab === index ? "bg-red-500 text-white" : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {process.step}
                    </span>
                    <span className="font-medium">{process.title}</span>
                    {activeTab === index && <ChevronRight className="ml-auto h-5 w-5 text-red-400" />}
                  </button>
                ))}
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2 bg-gray-900/30 border border-gray-800 rounded-xl p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {workingProcess[activeTab].step}. {workingProcess[activeTab].title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{workingProcess[activeTab].description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {workingProcess[activeTab].details.map((detail, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-300">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 border border-dashed border-gray-700 rounded-lg bg-gray-900/20">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  Partner Benefits in this Phase
                </h4>
                <ul className="space-y-2">
                  {[
                    "Complete white-labeling throughout the process",
                    "Expert support when needed",
                    "Ready-made templates and resources",
                    "Full transparency through partner portal",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <p className="text-gray-300">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partner Support Section */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Partner Support</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide comprehensive support to ensure your success as a white-label partner.
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
                className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-all duration-300 h-full"
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
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Partner Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from our partners who have successfully built their tech agencies with zero technical expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8"
              >
                <div className="mb-6">
                  <div className="w-16 h-1 bg-red-500 mb-6"></div>
                  <p className="text-gray-300 italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.imageSrc || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get answers to common questions about our white-label partnership program.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-6 text-left"
                >
                  <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                  <div className={`ml-2 flex-shrink-0 transition-transform ${activeFaq === index ? "rotate-180" : ""}`}>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-6 pt-0 border-t border-gray-800">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 md:p-16"
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="bg-red-500/20 p-4 rounded-full">
                  <Award className="w-12 h-12 text-red-500" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start Your Tech Agency Today</h2>
              <p className="text-lg text-gray-400 mb-8">
                Join our white label partnership program and start offering premium tech services to your clients
                without any technical expertise. Start earning commissions of up to 35% on every project.
              </p>
              <div className="flex flex-row gap-2 sm:gap-4 justify-center">
                <Link href="/become-partner">
                  <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg">
                    Apply for Partnership
                  </AnimatedButton>
                </Link>
                <Link href="/pricing">
                  <AnimatedButton
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg"
                  >
                    View Partnership Tiers
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
