"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import AnimatedButton from "./animated-button"
import Link from "next/link"

export default function InnovativeServices() {
  const [activeTab, setActiveTab] = useState("paid-social")

  const tabs = [
    { id: "paid-social", label: "Paid Social" },
    { id: "google-ads", label: "Google Ads" },
    { id: "email", label: "Email / SMS" },
    { id: "seo", label: "SEO" },
    { id: "analytics", label: "Analytics" },
    { id: "web", label: "Web Development" },
  ]

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
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 lg:text-5xl">High-Demand Solutions You Can Offer:</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expand your agency's portfolio instantly with our cutting-edge AI &amp; Web services.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-black"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm">
          {/* Paid Social Tab */}
          {activeTab === "paid-social" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Paid Social</h3>
                <p className="text-gray-400 mb-6">
                  Drive growth and engagement with data-driven paid social media ads, using targeted strategies to
                  elevate your brand.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Audience targeting and segmentation",
                    "Creative ad development",
                    "A/B testing and optimization",
                    "Performance tracking and reporting",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services">
                  <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100">
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </AnimatedButton>
                </Link>
              </div>
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-gray-400">Campaign Dashboard</div>
                    <div className="text-xs text-blue-400">Last 30 days</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Impressions</div>
                      <div className="text-lg font-bold text-white">+15.2K</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Clicks</div>
                      <div className="text-lg font-bold text-white">1,247</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">CTR</div>
                      <div className="text-lg font-bold text-green-400">8.2%</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Quality Score</div>
                      <div className="text-lg font-bold text-blue-400">9/10</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Paid Social</h4>
                  <p className="text-gray-400 text-sm">
                    Targeted campaigns across Facebook, Instagram, TikTok, and more
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Google Ads Tab */}
          {activeTab === "google-ads" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Google Ads</h3>
                <p className="text-gray-400 mb-6">
                  Reach customers at the right moment with Google Ads, driving traffic and sales through targeted online
                  ads.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Keyword research and selection",
                    "Ad copy and creative development",
                    "Landing page optimization",
                    "Conversion tracking and ROI analysis",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services">
                  <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100">
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </AnimatedButton>
                </Link>
              </div>
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-gray-400">Campaign Dashboard</div>
                    <div className="text-xs text-blue-400">Last 30 days</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Impressions</div>
                      <div className="text-lg font-bold text-white">+15.2K</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Clicks</div>
                      <div className="text-lg font-bold text-white">1,247</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">CTR</div>
                      <div className="text-lg font-bold text-green-400">8.2%</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Quality Score</div>
                      <div className="text-lg font-bold text-blue-400">9/10</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Google Ads</h4>
                  <p className="text-gray-400 text-sm">Search, Display, Shopping, and YouTube ad campaigns</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Email / SMS Tab */}
          {activeTab === "email" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Email / SMS</h3>
                <p className="text-gray-400 mb-6">
                  Reach customers with targeted email and SMS marketing that drives sales, growth, and loyalty.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Automated email sequences",
                    "SMS campaign management",
                    "Audience segmentation",
                    "A/B testing and optimization",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services">
                  <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100">
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </AnimatedButton>
                </Link>
              </div>
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-gray-400">Send</div>
                    <div className="text-xs text-blue-400">Email / SMS</div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-400">Open Rate</div>
                        <div className="text-sm font-bold text-green-400">32.5%</div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-400">Click Rate</div>
                        <div className="text-sm font-bold text-blue-400">12.8%</div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-400">Conversion</div>
                        <div className="text-sm font-bold text-purple-400">5.2%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Email / SMS</h4>
                  <p className="text-gray-400 text-sm">Targeted messaging that drives engagement and conversions</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* SEO Tab */}
          {activeTab === "seo" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">SEO</h3>
                <p className="text-gray-400 mb-6">
                  Enhance your search engine visibility with SEO services, including audits, keyword analysis, and
                  optimization.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Technical SEO audits",
                    "Keyword research and strategy",
                    "On-page optimization",
                    "Link building and authority development",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services">
                  <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100">
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </AnimatedButton>
                </Link>
              </div>
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-gray-400">SEO Report</div>
                    <div className="text-xs text-blue-400">Traffic</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-gray-800 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-400">Ranking</div>
                      <div className="text-sm font-bold text-white">Traffic</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-400">Ranking</div>
                      <div className="text-sm font-bold text-white">Ranking</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 text-center">
                      <div className="text-xs text-gray-400">Ranking</div>
                      <div className="text-sm font-bold text-white">Site Audit</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-800 rounded-lg p-2">
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-400">Performance</div>
                        <div className="text-xs font-bold text-green-400">Ranking</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-bold text-white">#1</div>
                        <div className="text-xs text-gray-400">for target keywords</div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2">
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-400">Impressions</div>
                        <div className="text-sm font-bold text-white">12.5K</div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <div className="text-xs text-gray-400">Clicks</div>
                          <div className="text-sm font-bold text-white">2.1K</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Visitors</div>
                          <div className="text-sm font-bold text-white">1.8K</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">SEO</h4>
                  <p className="text-gray-400 text-sm">Improve search visibility and drive organic traffic</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Analytics Tab */}
          {activeTab === "analytics" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Analytics</h3>
                <p className="text-gray-400 mb-6">
                  Track performance and gain insights with comprehensive analytics and reporting solutions for
                  data-driven decisions.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Custom dashboard setup",
                    "Goal and conversion tracking",
                    "User behavior analysis",
                    "Regular performance reporting",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services">
                  <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100">
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </AnimatedButton>
                </Link>
              </div>
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-sm text-gray-400">Analytics</div>
                    <div className="text-xs text-blue-400">Last 30 days</div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-xs text-gray-400">Users</div>
                        <div className="text-xs text-green-400">+12.5%</div>
                      </div>
                      <div className="text-sm font-bold text-white">24,582</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-xs text-gray-400">Sessions</div>
                        <div className="text-xs text-green-400">+8.3%</div>
                      </div>
                      <div className="text-sm font-bold text-white">32,147</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-xs text-gray-400">Conversion Rate</div>
                        <div className="text-xs text-green-400">+2.1%</div>
                      </div>
                      <div className="text-sm font-bold text-white">4.7%</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Analytics</h4>
                  <p className="text-gray-400 text-sm">Data-driven insights to optimize your marketing strategy</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Web Development Tab */}
          {activeTab === "web" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Web Development</h3>
                <p className="text-gray-400 mb-6">
                  We create everything from simple to complex websites, with flexible plans and custom solutions
                  tailored to your needs.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Responsive design for all devices",
                    "SEO-friendly architecture",
                    "Fast loading speeds",
                    "Secure and reliable hosting",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/services">
                  <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100">
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </AnimatedButton>
                </Link>
              </div>
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-green-400 text-sm mb-1">SSL Secured</div>
                        <div className="text-xs text-gray-400">HTTPS</div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-blue-400 text-sm mb-1">No Monthly Fees</div>
                        <div className="text-xs text-gray-400">One-time payment</div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-purple-400 text-sm mb-1">99.9% Uptime</div>
                        <div className="text-xs text-gray-400">Reliable hosting</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-sm text-gray-400 mb-1">www.motionmedia.com</div>
                    <div className="flex justify-center space-x-4 mt-2">
                      <div className="text-xs text-blue-400">Learn More</div>
                      <div className="text-xs text-blue-400">Learn More</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Web Development</h4>
                  <p className="text-gray-400 text-sm">Custom websites and web applications for your business</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
