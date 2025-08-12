"use client"

import { motion } from "framer-motion"
import { ArrowRight, Bot, Code, Smartphone } from 'lucide-react'
import AnimatedButton from "./animated-button"
import CountingStats from "./counting-stats"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const stats = [
    { value: 200, suffix: "+", label: "Projects Delivered" },
    { value: 99, suffix: "%", label: "Client Satisfaction" },
    { value: 50, suffix: "+", label: "AI Solutions Built" },
  ]

  const techStack = [
    { name: "React", logo: "/tech/react.png" },
    { name: "Next.js", logo: "/tech/nextjs.png" },
    { name: "TypeScript", logo: "/tech/typescript.png" },
    { name: "Node.js", logo: "/tech/nodejs.png" },
    { name: "MongoDB", logo: "/tech/mongodb.webp" },
    { name: "AWS", logo: "/tech/aws.png" },
    { name: "Docker", logo: "/tech/docker.webp" },
    { name: "Tailwind", logo: "/tech/tailwind.png" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/30 via-blue-500/30 to-green-500/30 border border-white/30 rounded-full text-sm text-white font-medium"
              >
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                <span>Your White-Label Tech Partner</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="block text-white mb-2">Launch Your</span>
                <span className="block text-white mb-2">Own Tech Agency</span>
                <span
                  className="block mb-2 bg-gradient-to-r from-red-400 via-blue-400 to-green-400 bg-clip-text text-transparent"
                  style={{
                    textShadow: "0 0 40px rgba(239, 68, 68, 0.5)",
                  }}
                >
                  Without Technical    
                </span>
                <span className="block text-gray-300">Expertise...</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              >
                Offer cutting-edge AI &amp; Web solutions to your clients under "YOUR" brand, powered by our expert team. You sell, we build, you profit.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-6 items-center justify-center lg:justify-start lg:items-start"
            >
              <div className="flex flex-row gap-2 sm:gap-4">
                <Link href="/become-partner">
                  <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg">
                    <span className="flex items-center">
                      {"Start Earning"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </AnimatedButton>
                </Link>
                <Link href="/services">
                  <AnimatedButton
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 px-4 py-2 text-sm sm:px-8 sm:py-4 sm:text-lg"
                  >
                    View Services
                  </AnimatedButton>
                </Link>
              </div>

              {/* Service Icons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">AI Automation</p>
                    <p className="text-xs text-gray-400">Smart Solutions</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Web Development</p>
                    <p className="text-xs text-gray-400">Modern Apps</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Mobile Apps</p>
                    <p className="text-xs text-gray-400">iOS & Android</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="w-full max-w-4xl">
                <p className="text-sm text-gray-400 mb-4 text-center lg:text-left">
                  Built with cutting-edge technologies:
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      className="flex items-center space-x-2 bg-gray-900/70 border border-gray-700/50 rounded-lg px-3 py-2"
                    >
                      <Image
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                      />
                      <span className="text-xs text-gray-300">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <CountingStats stats={stats} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
