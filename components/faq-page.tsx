"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp, MessageCircle, Shield, DollarSign, Users, Zap, Clock } from 'lucide-react'
import AnimatedButton from "./animated-button"
import Link from "next/link"

const faqCategories = [
  {
    title: "Partnership Program",
    icon: <Users className="w-5 h-5" />,
    faqs: [
      {
        question: "What is the ShabbyMinds Partnership Program?",
        answer:
          "Our Partnership Program is a white-label technology solutions program that allows businesses to offer premium tech services under their own brand. We handle all technical development, deployment, and maintenance while you focus on client relationships and sales.",
      },
      {
        question: "How much can I earn as a partner?",
        answer:
          "Partners can earn up to 45% profit margins on projects. Earnings depend on your partnership tier, project volume, and client base. Our Platinum partners typically earn $10,000-$50,000+ monthly, while Gold partners earn $5,000-$25,000 monthly.",
      },
      {
        question: "Do I need technical skills to become a partner?",
        answer:
          "No technical skills are required! We handle all technical aspects including development, deployment, testing, and maintenance. You focus on client acquisition, relationship management, and project coordination.",
      },
      {
        question: "What are the partnership tiers?",
        answer:
          "We offer three tiers: Bronze (0-10 projects/month, 25% margin), Gold (11-25 projects/month, 35% margin), and Platinum (26+ projects/month, 45% margin). Tiers are based on monthly project volume and include additional benefits at higher levels.",
      },
      {
        question: "Is there a minimum commitment or upfront fee?",
        answer:
          "No upfront fees or minimum commitments required. You only pay for projects you bring in. This makes it risk-free to start and allows you to scale at your own pace.",
      },
    ],
  },
  {
    title: "Services & Solutions",
    icon: <Zap className="w-5 h-5" />,
    faqs: [
      {
        question: "What services can I offer to my clients?",
        answer:
          "You can offer our complete suite including: AI Automation, WhatsApp Automation, Custom ERP Systems, CRM Solutions, SaaS Products, Web Development, Mobile Apps, IoT Solutions, Data Analytics, and UI/UX Design.",
      },
      {
        question: "How long does it take to deliver projects?",
        answer:
          "Delivery times vary by project complexity: Simple websites (5-7 days), Custom CRM/ERP (2-4 weeks), AI Solutions (3-6 weeks), SaaS Products (4-8 weeks), Mobile Apps (4-6 weeks). We provide detailed timelines for each project.",
      },
      {
        question: "Can I customize solutions for my clients?",
        answer:
          "All solutions are fully customizable. We work with you to understand client requirements and deliver tailored solutions that match their specific needs, branding, and business processes.",
      },
      {
        question: "Do you provide ongoing support and maintenance?",
        answer:
          "Yes, we provide comprehensive support including: 24/7 technical support, regular updates, bug fixes, security patches, performance monitoring, and feature enhancements. Support is included in all partnership packages.",
      },
      {
        question: "What technologies do you use?",
        answer:
          "We use cutting-edge technologies including React, Next.js, Node.js, Python, TypeScript, AWS, MongoDB, PostgreSQL, Docker, Kubernetes, TensorFlow, OpenAI APIs, and more. We stay updated with the latest tech trends.",
      },
    ],
  },
  {
    title: "Pricing & Payments",
    icon: <DollarSign className="w-5 h-5" />,
    faqs: [
      {
        question: "How does the pricing structure work?",
        answer:
          "We use a transparent cost-plus model. You receive wholesale pricing from us, then add your margin when quoting clients. For example: if our cost is $5,000, you can quote $7,000-$10,000 depending on your margin and market positioning.",
      },
      {
        question: "When do I pay for projects?",
        answer:
          "Payment is due when you confirm a project with us. We accept bank transfers, credit cards, and digital payments. For established partners, we offer net-15 payment terms on approved credit.",
      },
      {
        question: "How do I handle client payments?",
        answer:
          "You collect payments directly from your clients according to your terms. We recommend 50% upfront, 50% on completion, but you can structure payments however works best for your business model.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No hidden fees whatsoever. Our pricing includes development, testing, deployment, documentation, and initial support. The only additional costs might be third-party services (hosting, APIs) which are clearly outlined upfront.",
      },
      {
        question: "Do you offer volume discounts?",
        answer:
          "Yes! Higher partnership tiers automatically include better pricing. Additionally, bulk project discounts are available for partners committing to multiple projects simultaneously.",
      },
    ],
  },
  {
    title: "Support & Training",
    icon: <Shield className="w-5 h-5" />,
    faqs: [
      {
        question: "What kind of support do you provide?",
        answer:
          "We provide comprehensive support including: dedicated account manager, technical consultation, sales materials, proposal templates, client presentation support, project management tools, and 24/7 technical assistance.",
      },
      {
        question: "Do you provide training for partners?",
        answer:
          "Yes! We offer complete onboarding including: technology overview training, sales process training, client consultation techniques, project scoping methods, and ongoing educational webinars to keep you updated.",
      },
      {
        question: "How do you handle client communication?",
        answer:
          "You maintain all client relationships. We provide you with technical documentation, progress reports, and updates that you can share with clients. For technical discussions, we can join calls as your 'technical team'.",
      },
      {
        question: "What if a client has issues with a delivered project?",
        answer:
          "We stand behind all our work with comprehensive warranties. Any bugs or issues are fixed free of charge. We also provide detailed testing reports and documentation to minimize post-delivery issues.",
      },
      {
        question: "Can I get help with sales and marketing?",
        answer:
          "We provide sales training, marketing materials, case studies, proposal templates, ROI calculators, and even co-marketing opportunities. Our success depends on your success.",
      },
    ],
  },
  {
    title: "Getting Started",
    icon: <Clock className="w-5 h-5" />,
    faqs: [
      {
        question: "How do I apply to become a partner?",
        answer:
          "Simply fill out our partnership application form on the 'Become a Partner' page. We'll review your application and schedule an introductory call within 24-48 hours to discuss the opportunity.",
      },
      {
        question: "What's the approval process like?",
        answer:
          "Our process includes: 1) Application review, 2) Introductory call, 3) Business verification, 4) Partnership agreement, 5) Onboarding and training. The entire process typically takes 3-5 business days.",
      },
      {
        question: "How quickly can I start offering services?",
        answer:
          "Once approved and onboarded, you can start offering services immediately. We provide you with all necessary materials, pricing guides, and support to begin client conversations right away.",
      },
      {
        question: "What if I'm not satisfied with the partnership?",
        answer:
          "We're confident you'll love working with us, but if you're not satisfied, you can end the partnership at any time with no penalties. We believe in building long-term relationships based on mutual success.",
      },
      {
        question: "Do you work with international partners?",
        answer:
          "Yes! We work with partners globally. We have experience with different time zones, currencies, and business practices. Our support team is available 24/7 to assist international partners.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState(0)

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Everything you need to know about our partnership program, services, and how to get started.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <MessageCircle className="w-5 h-5" />
              <span>Can't find what you're looking for? Contact our support team</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                <nav className="space-y-2">
                  {faqCategories.map((category, index) => (
                    <motion.button
                      key={category.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => setActiveCategory(index)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeCategory === index
                          ? "bg-red-600 text-white"
                          : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      {category.icon}
                      <span className="font-medium">{category.title}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  {faqCategories[activeCategory].icon}
                  <span>{faqCategories[activeCategory].title}</span>
                </h2>

                {faqCategories[activeCategory].faqs.map((faq, index) => {
                  const itemId = `${activeCategory}-${index}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <motion.div
                      key={itemId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-red-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Still have questions?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Our team is here to help you succeed. Get in touch and we'll answer any questions you have about our
              partnership program.
            </p>
            <div className="flex flex-row gap-2 sm:gap-4 justify-center">
              <Link href="/contact">
                <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-base">
                  Contact Support
                </AnimatedButton>
              </Link>
              <Link href="/become-partner">
                <AnimatedButton className="bg-white text-black hover:bg-gray-100 px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-base">Apply Now</AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
