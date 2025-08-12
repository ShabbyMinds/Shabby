"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { DollarSign, TrendingUp, Bot, MessageSquare, Database, Users, Layers, Code, BarChart3 } from 'lucide-react'

const serviceTypes = [
  {
    id: "ai-solutions",
    name: "AI Solutions",
    icon: <Bot className="w-4 h-4 md:w-5 md:h-5" />,
    baseValue: 25000,
    partnerShare: 0.35,
    description: "Agentic AI & Automation",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Automation",
    icon: <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />,
    baseValue: 8000,
    partnerShare: 0.40,
    description: "Business Chat Automation",
  },
  {
    id: "erp",
    name: "ERP Systems",
    icon: <Database className="w-4 h-4 md:w-5 md:h-5" />,
    baseValue: 45000,
    partnerShare: 0.25,
    description: "Enterprise Solutions",
  },
  {
    id: "crm",
    name: "CRM Solutions",
    icon: <Users className="w-4 h-4 md:w-5 md:h-5" />,
    baseValue: 15000,
    partnerShare: 0.30,
    description: "Customer Management",
  },
  {
    id: "saas",
    name: "SaaS Products",
    icon: <Layers className="w-4 h-4 md:w-5 md:h-5" />,
    baseValue: 35000,
    partnerShare: 0.35,
    description: "Complete SaaS Platforms",
  },
  {
    id: "web",
    name: "Web Development",
    icon: <Code className="w-4 h-4 md:w-5 md:h-5" />,
    baseValue: 5000,
    partnerShare: 0.40,
    description: "Custom Websites & Apps",
  },
]

export default function ROICalculatorHome() {
  const [selectedProjects, setSelectedProjects] = useState(3)
  const [selectedService, setSelectedService] = useState("ai-solutions")

  const selectedServiceType = serviceTypes.find((s) => s.id === selectedService)
  const baseValue = selectedServiceType?.baseValue || 25000
  const partnerShare = selectedServiceType?.partnerShare || 0.4

  const calculatePartnerEarnings = (projects: number, value: number, share: number) => {
    return Math.round(projects * value * share)
  }

  const calculateMonthlyRecurring = (projects: number, value: number, share: number) => {
    return Math.round(projects * value * 0.15 * share)
  }

  const calculateAnnualEarnings = (projects: number, value: number, share: number) => {
    const oneTimeEarnings = calculatePartnerEarnings(projects, value, share)
    const monthlyRecurring = calculateMonthlyRecurring(projects, value, share)
    return oneTimeEarnings + monthlyRecurring * 12
  }

  return (
    <section className="py-16 md:py-24 bg-black relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Calculate Your Partner Earnings
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            See how much you could earn by white-labeling our solutions for your clients
          </p>
        </motion.div>

        <div className="bg-gray-900/40 border border-gray-700/30 rounded-2xl md:rounded-3xl p-4 md:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Controls */}
            <div className="space-y-6 md:space-y-8">
              {/* Service Type Selection */}
              <div>
                <label className="block text-base md:text-lg font-medium text-white mb-3 md:mb-4">
                  Select Service Type
                </label>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {serviceTypes.map((service) => (
                    <motion.button
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-2 md:p-3 rounded-lg md:rounded-xl border transition-all duration-200 text-left ${
                        selectedService === service.id
                          ? "bg-red-500/20 border-red-500/50 text-white"
                          : "bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50"
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <div
                          className={`p-1 md:p-1.5 rounded-md ${
                            selectedService === service.id ? "bg-red-500/30" : "bg-gray-700/50"
                          }`}
                        >
                          {service.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-xs md:text-sm leading-tight">{service.name}</div>
                        </div>
                      </div>
                      <div className="text-xs opacity-70 leading-tight">{service.description}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Projects Slider */}
              <div>
                <label className="block text-base md:text-lg font-medium text-white mb-3 md:mb-4">
                  Monthly Projects
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={selectedProjects}
                    onChange={(e) => setSelectedProjects(Number(e.target.value))}
                    className="w-full h-2 md:h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${((selectedProjects - 1) / (10 - 1)) * 100}%, #374151 ${((selectedProjects - 1) / (10 - 1)) * 100}%, #374151 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs md:text-sm text-gray-400 mt-2">
                    <span>1 project</span>
                    <span>10 projects</span>
                  </div>
                </div>
                <div className="text-center mt-3 md:mt-4">
                  <span className="text-2xl md:text-3xl font-bold text-white">{selectedProjects}</span>
                  <span className="text-gray-400 ml-2 text-sm md:text-base">projects per month</span>
                </div>
              </div>

              {/* Data Disclaimer */}
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg md:rounded-xl p-3 md:p-4 my-0 md:py-9">
                <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                  <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                  <span className="text-xs md:text-sm font-medium text-white">Partner Program Details</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  As a white-label partner, you earn {Math.round(partnerShare * 100)}% of the project value plus
                  recurring revenue from maintenance and support. Our team handles all development and technical
                  support.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6 md:space-y-8">
              {/* ROI Circle */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-gray-700"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 219.8" }}
                    animate={{
                      strokeDasharray: `${Math.min((calculateAnnualEarnings(selectedProjects, baseValue, partnerShare) / 500000) * 219.8, 219.8)} 219.8`,
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      key={`${selectedProjects}-${selectedService}`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-xl md:text-2xl font-bold text-white"
                    >
                      {Math.round(partnerShare * 100)}%
                    </motion.div>
                    <div className="text-gray-400 text-xs md:text-sm">Partner Share</div>
                  </div>
                </div>
              </div>

              {/* Revenue Cards */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-gray-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700/50 text-center">
                  <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-green-400 mx-auto mb-2" />
                  <motion.div
                    key={`monthly-${selectedProjects}-${selectedService}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-lg md:text-2xl font-bold text-white mb-1"
                  >
                    ${calculateMonthlyRecurring(selectedProjects, baseValue, partnerShare).toLocaleString()}
                  </motion.div>
                  <div className="text-gray-400 text-xs md:text-sm">Monthly Recurring</div>
                </div>

                <div className="bg-gray-800/50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700/50 text-center">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-2" />
                  <motion.div
                    key={`annual-${selectedProjects}-${selectedService}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-lg md:text-2xl font-bold text-white mb-1"
                  >
                    ${calculateAnnualEarnings(selectedProjects, baseValue, partnerShare).toLocaleString()}
                  </motion.div>
                  <div className="text-gray-400 text-xs md:text-sm">Annual Earnings</div>
                </div>
              </div>

              {/* Project Value Card */}
              <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/20 rounded-xl md:rounded-2xl p-4 md:p-6">
                <div className="text-center">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">Project Value Breakdown</h3>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 text-sm">
                    <div>
                      <div className="text-gray-400 text-xs md:text-sm">Project Value</div>
                      <div className="text-lg md:text-xl font-bold text-white">${baseValue.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs md:text-sm">Your Earnings</div>
                      <div className="text-lg md:text-xl font-bold text-green-400">
                        ${Math.round(baseValue * partnerShare).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partner Program and Pricing Disclaimers */}
              <div className="space-y-3">
                
                <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-3 md:p-4">
                  <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                    <span className="text-yellow-400 text-xs md:text-sm">⚠️</span>
                    <span className="text-xs md:text-sm font-medium text-yellow-200">Pricing Disclaimer</span>
                  </div>
                  <p className="text-xs text-yellow-100/80 leading-relaxed">
                    Predicted amounts based on standard pricing. Actual prices may vary depending on project complexity and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
