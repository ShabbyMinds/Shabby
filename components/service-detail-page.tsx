"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Clock, Users, Star, Shield } from 'lucide-react'
import Link from "next/link"
import AnimatedButton from "./animated-button"

interface ServiceDetailProps {
  service: {
    id: string
    title: string
    icon: React.ReactNode
    description: string
    longDescription: string
    features: string[]
    benefits: string[]
    process: string[]
    deliveryTime: string
    color: string
  }
}

export default function ServiceDetailPage({ service }: ServiceDetailProps) {
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
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className={`w-20 h-20 bg-${service.color}-500/20 rounded-2xl flex items-center justify-center`}>
              <div className={`text-${service.color}-400`}>{service.icon}</div>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">{service.title}</h1>
              <div className="flex items-center space-x-2 mt-2">
                <Clock className="w-5 h-5 text-gray-500" />
                <span className="text-gray-500">{service.deliveryTime}</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">{service.description}</p>
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <Shield className="w-5 h-5" />
            <span>Enterprise-grade solution with 99.9% uptime guarantee</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Service Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Service Overview</h2>
              <p className="text-gray-400 leading-relaxed text-lg">{service.longDescription}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Benefits</h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Process & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-gray-300">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
              <p className="text-gray-400 mb-6">
                Ready to offer this service to your clients? Contact us to learn more about our white-label partnership
                program.
              </p>

              <div className="flex flex-row gap-2 sm:gap-4">
                <Link href="/contact" className="flex-1">
                  <AnimatedButton className="w-full bg-red-600 text-white hover:bg-red-700 text-sm px-4 py-2 sm:text-base sm:px-6 sm:py-3">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </AnimatedButton>
                </Link>
                <Link href="/become-partner" className="flex-1">
                  <AnimatedButton variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 text-sm px-4 py-2 sm:text-base sm:px-6 sm:py-3">
                    Become Partner
                  </AnimatedButton>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>150+ Partners</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{service.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Explore Other Services</h2>
          <div className="flex flex-row gap-2 sm:gap-4 justify-center">
            <Link href="/services">
              <AnimatedButton className="bg-white text-black hover:bg-gray-100 text-sm px-4 py-2 sm:text-base sm:px-8 sm:py-3">
                View All Services
              </AnimatedButton>
            </Link>
            <Link href="/pricing">
              <AnimatedButton variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-sm px-4 py-2 sm:text-base sm:px-8 sm:py-3">
                View Pricing
              </AnimatedButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
