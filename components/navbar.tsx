"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const services = [
  { name: "Paid Social", href: "/services/paid-social" },
  { name: "Google Ads", href: "/services/google-ads" },
  { name: "Email / SMS", href: "/services/email-sms" },
  { name: "SEO", href: "/services/seo" },
  { name: "Analytics", href: "/services/analytics" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Agentic AI Solutions", href: "/services/ai-solutions" },
  { name: "WhatsApp Automation", href: "/services/whatsapp-automation" },
  { name: "Custom ERP Systems", href: "/services/erp-systems" },
  { name: "CRM Solutions", href: "/services/crm-solutions" },
  { name: "SaaS Products", href: "/services/saas-products" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md border-b border-gray-800/50" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/shabbyminds-logo.png"
              alt="ShabbyMinds"
              width={200}
              height={60}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        pathname === item.href ? "text-red-400" : "text-gray-300 hover:text-white"
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 border border-gray-700/50 rounded-xl shadow-xl"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <div className="p-2">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      pathname === item.href ? "text-red-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/become-partner"
              className="bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-200"
            >
              Become Partner
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-900/95 border-t border-gray-800/50"
            >
              <div className="px-4 py-2 space-y-0.5 rounded-b-2xl">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-800/30 last:border-b-0">
                    {item.hasDropdown ? (
                      <>
                        <div className="flex items-center">
                          <Link
                            href={item.href}
                            className={`flex items-center space-x-3 py-2.5 px-3 text-base font-medium transition-all duration-200 rounded-lg hover:bg-gray-800/30 flex-1 ${
                              pathname === item.href ? "text-red-400 bg-red-500/10" : "text-gray-300 hover:text-white"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${pathname === item.href ? "bg-red-400" : "bg-gray-500"} opacity-60`}
                            ></div>
                            <span>{item.name}</span>
                          </Link>
                          <button
                            className="p-2 text-gray-500 hover:text-red-400 transition-colors duration-200"
                            onClick={() => setServicesOpen(!servicesOpen)}
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180 text-red-400" : "text-gray-500"}`}
                            />
                          </button>
                        </div>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden bg-gray-800/20 rounded-lg mt-2 mb-4"
                            >
                              <div className="p-2 space-y-1">
                                {services.map((service, index) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="flex items-center space-x-3 py-2 px-4 text-sm text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200 group"
                                    onClick={() => {
                                      setIsOpen(false)
                                      setServicesOpen(false)
                                    }}
                                  >
                                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-red-400 transition-colors duration-200"></div>
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                                      {service.name}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 py-2.5 px-3 text-base font-medium transition-all duration-200 rounded-lg hover:bg-gray-800/30 ${
                          pathname === item.href ? "text-red-400 bg-red-500/10" : "text-gray-300 hover:text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${pathname === item.href ? "bg-red-400" : "bg-gray-500"} opacity-60`}
                        ></div>
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-3 mt-3 border-t border-gray-800/50">
                  <Link
                    href="/become-partner"
                    className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-xl text-center font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-red-500/25"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Become Partner</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
