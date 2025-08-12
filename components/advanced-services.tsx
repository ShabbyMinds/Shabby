"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Bot, MessageSquare, Database, Users, Layers, CheckCircle, Brain } from 'lucide-react'
import AnimatedButton from "./animated-button"
import Link from "next/link"

const advancedServices = [
  {
    title: "Agentic AI Solutions",
    description:
      "Intelligent AI agents that can perform complex tasks, make decisions, and interact with your systems autonomously.",
    mockup: "ai-agent",
    icon: <Brain className="w-6 h-6" />,
    features: ["Natural Language Processing", "Decision Making", "Task Automation", "Learning Capabilities"],
    href: "/services/ai-solutions",
  },
  {
    title: "WhatsApp Automation",
    description: "Complete WhatsApp business automation with chatbots, bulk messaging, and customer engagement tools.",
    mockup: "whatsapp",
    icon: <MessageSquare className="w-6 h-6" />,
    features: ["Chatbot Integration", "Bulk Messaging", "Auto Responses", "Analytics Dashboard"],
    href: "/services/whatsapp-automation",
  },
  {
    title: "Custom ERP Systems",
    description: "Tailored Enterprise Resource Planning systems to streamline your business operations and workflows.",
    mockup: "erp",
    icon: <Database className="w-6 h-6" />,
    features: ["Inventory Management", "Financial Tracking", "HR Management", "Reporting Tools"],
    href: "/services/erp-systems",
  },
  {
    title: "CRM Solutions",
    description: "Customer Relationship Management systems designed to enhance customer interactions and boost sales.",
    mockup: "crm",
    icon: <Users className="w-6 h-6" />,
    features: ["Lead Management", "Sales Pipeline", "Customer Analytics", "Email Integration"],
    href: "/services/crm-solutions",
  },
  {
    title: "SaaS Products",
    description:
      "Complete Software-as-a-Service platforms with subscription management, user authentication, and scalable architecture.",
    mockup: "saas",
    icon: <Layers className="w-6 h-6" />,
    features: ["Multi-tenant Architecture", "Subscription Billing", "User Management", "API Integration"],
    href: "/services/saas-products",
  },
]

export default function AdvancedServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Advanced Technology Solutions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade solutions powered by cutting-edge AI and modern technology stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Agentic AI Solutions */}
          <Link href={advancedServices[0].href}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full p-2"
                  >
                    <div className="bg-gray-800 rounded-lg p-3 h-full">
                      <div className="flex items-center space-x-2 mb-4">
                        <motion.div
                          animate={{
                            background: [
                              "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                              "linear-gradient(45deg, #8b5cf6, #ec4899)",
                              "linear-gradient(45deg, #ec4899, #3b82f6)",
                            ],
                          }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                        >
                          <Bot className="w-5 h-5 text-white" />
                        </motion.div>
                        <div>
                          <div className="text-xs text-white">AI Agent</div>
                          <div className="text-xs text-gray-400">Processing Tasks</div>
                        </div>
                      </div>
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Task Analysis</span>
                          <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            className="text-green-400"
                          >
                            Complete
                          </motion.span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Decision Making</span>
                          <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                            className="text-blue-400"
                          >
                            In Progress
                          </motion.span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Execution</span>
                          <span className="text-yellow-400">Queued</span>
                        </div>
                      </div>
                      <div className="bg-gray-700 rounded p-2">
                        <div className="text-xs text-gray-400 mb-1">Learning Progress</div>
                        <motion.div
                          animate={{ width: ["60%", "85%", "60%"] }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-blue-500">{advancedServices[0].icon}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {advancedServices[0].title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">{advancedServices[0].description}</p>
              <div className="grid grid-cols-2 gap-2">
                {advancedServices[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-xs text-gray-300">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Link>

          {/* WhatsApp Automation */}
          <Link href={advancedServices[1].href}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full h-full p-2"
                  >
                    <div className="bg-gray-800 rounded-lg p-3 h-full">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-white">WhatsApp Business</div>
                          <div className="text-xs text-gray-400">Automation Active</div>
                        </div>
                      </div>
                      <div className="space-y-2 mb-3">
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="bg-green-600 text-white text-xs px-2 py-1 rounded-lg max-w-fit"
                        >
                          Hello! How can I help you today?
                        </motion.div>
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                          className="bg-gray-600 text-white text-xs px-2 py-1 rounded-lg max-w-fit ml-auto"
                        >
                          I need product info
                        </motion.div>
                        <motion.div
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                          className="bg-green-600 text-white text-xs px-2 py-1 rounded-lg max-w-fit"
                        >
                          Here's our catalog...
                        </motion.div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Messages Today</span>
                        <motion.span
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="text-green-400 font-bold"
                        >
                          1,247
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-green-500">{advancedServices[1].icon}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                  {advancedServices[1].title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm mb-4">{advancedServices[1].description}</p>
              <div className="grid grid-cols-2 gap-2">
                {advancedServices[1].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-xs text-gray-300">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Bottom Row - ERP, CRM, SaaS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advancedServices.slice(2).map((service, index) => (
            <Link key={service.title} href={service.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group cursor-pointer"
              >
                <div className="aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden relative border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: (index + 2) * 0.2 }}
                      className="w-full h-full p-2"
                    >
                      <div className="bg-gray-800 rounded-lg p-3 h-full">
                        {/* ERP Mockup */}
                        {service.mockup === "erp" && (
                          <>
                            <div className="text-xs text-gray-400 mb-2">ERP Dashboard</div>
                            <div className="grid grid-cols-2 gap-2 mb-2">
                              <div className="bg-gray-700 rounded p-2">
                                <div className="text-xs text-gray-400">Inventory</div>
                                <motion.div
                                  animate={{ width: ["70%", "85%", "70%"] }}
                                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                                  className="bg-blue-600 h-1 rounded mt-1"
                                ></motion.div>
                              </div>
                              <div className="bg-gray-700 rounded p-2">
                                <div className="text-xs text-gray-400">Sales</div>
                                <motion.div
                                  animate={{ width: ["60%", "90%", "60%"] }}
                                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                                  className="bg-green-600 h-1 rounded mt-1"
                                ></motion.div>
                              </div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Financial Overview</div>
                              <div className="flex items-end space-x-1 h-8 mt-1">
                                {[3, 5, 2, 7, 4, 6].map((height, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ height: "2px" }}
                                    whileInView={{ height: `${height * 4}px` }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-purple-500 w-2 rounded-t"
                                  ></motion.div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}

                        {/* CRM Mockup */}
                        {service.mockup === "crm" && (
                          <>
                            <div className="text-xs text-gray-400 mb-2">CRM Pipeline</div>
                            <div className="space-y-1 mb-2">
                              <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Leads</span>
                                <span className="text-blue-400">24</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Qualified</span>
                                <span className="text-yellow-400">12</span>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Closed</span>
                                <motion.span
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                  className="text-green-400"
                                >
                                  8
                                </motion.span>
                              </div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Conversion Rate</div>
                              <div className="text-lg font-bold text-green-400">33%</div>
                            </div>
                          </>
                        )}

                        {/* SaaS Mockup */}
                        {service.mockup === "saas" && (
                          <>
                            <div className="text-xs text-gray-400 mb-2">SaaS Metrics</div>
                            <div className="grid grid-cols-2 gap-2 mb-2">
                              <div className="bg-gray-700 rounded p-2">
                                <div className="text-xs text-gray-400">Users</div>
                                <motion.div
                                  animate={{ opacity: [0.7, 1, 0.7] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                  className="text-sm text-white"
                                >
                                  2,847
                                </motion.div>
                              </div>
                              <div className="bg-gray-700 rounded p-2">
                                <div className="text-xs text-gray-400">MRR</div>
                                <div className="text-sm text-green-400">$12.5K</div>
                              </div>
                            </div>
                            <div className="bg-gray-700 rounded p-2">
                              <div className="text-xs text-gray-400">Subscription Tiers</div>
                              <div className="space-y-1 mt-1">
                                <motion.div
                                  animate={{ width: ["45%", "55%", "45%"] }}
                                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                                  className="bg-blue-600 h-1 rounded"
                                ></motion.div>
                                <motion.div
                                  animate={{ width: ["30%", "40%", "30%"] }}
                                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                                  className="bg-purple-600 h-1 rounded"
                                ></motion.div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-purple-500">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Tech Agency?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our white-label program to offer these cutting-edge solutions to "YOUR" clients and unlock significant
            new revenue.
          </p>
          <div className="flex flex-row gap-2 sm:gap-4 justify-center">
            <Link href="/become-partner">
              <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-base">
                Become a Partner
              </AnimatedButton>
            </Link>
            <Link href="/services">
              <AnimatedButton className="bg-white text-black hover:bg-gray-100 px-4 py-2 text-sm sm:px-8 sm:py-3 sm:text-base">
                View All Services
              </AnimatedButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
