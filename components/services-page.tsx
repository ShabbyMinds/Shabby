"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  MessageSquare,
  Database,
  Users,
  Layers,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Search,
  BarChart3,
  Mail,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import AnimatedButton from "./animated-button";

const services = [
  {
    id: "paid-social",
    title: "Paid Social",
    icon: <TrendingUp className="w-8 h-8" />,
    description:
      "Strategic social media advertising campaigns across Facebook, Instagram, LinkedIn, and other platforms to maximize ROI.",
    features: [
      "Facebook & Instagram Ads",
      "LinkedIn Advertising",
      "Twitter Ads Management",
      "Audience Targeting",
      "Creative Development",
      "Performance Analytics",
    ],
    priceRange: "Contact us for pricing",
    deliveryTime: "1-2 weeks",
    color: "blue",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    icon: <Search className="w-8 h-8" />,
    description:
      "Comprehensive Google Ads management including search, display, shopping, and YouTube advertising campaigns.",
    features: [
      "Search Campaigns",
      "Display Advertising",
      "Shopping Ads",
      "YouTube Advertising",
      "Keyword Research",
      "Conversion Tracking",
    ],
    priceRange: "Contact us for pricing",
    deliveryTime: "1-2 weeks",
    color: "green",
  },
  {
    id: "email-sms",
    title: "Email / SMS",
    icon: <Mail className="w-8 h-8" />,
    description:
      "Automated email marketing campaigns and SMS marketing solutions to nurture leads and drive conversions.",
    features: [
      "Email Automation",
      "SMS Campaigns",
      "List Segmentation",
      "A/B Testing",
      "Drip Campaigns",
      "Performance Tracking",
    ],
    priceRange: "Contact us for pricing",
    deliveryTime: "1-2 weeks",
    color: "purple",
  },
  {
    id: "seo",
    title: "SEO",
    icon: <Search className="w-8 h-8" />,
    description:
      "Search engine optimization services to improve organic rankings and drive qualified traffic to your website.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "Local SEO",
    ],
    priceRange: "Contact us for pricing",
    deliveryTime: "2-4 weeks",
    color: "orange",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <BarChart3 className="w-8 h-8" />,
    description:
      "Comprehensive analytics setup and reporting to track performance and optimize marketing campaigns.",
    features: [
      "Google Analytics Setup",
      "Conversion Tracking",
      "Custom Dashboards",
      "Performance Reports",
      "Data Analysis",
      "ROI Measurement",
    ],
    priceRange: "Contact us for pricing",
    deliveryTime: "1-2 weeks",
    color: "cyan",
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: <Globe className="w-8 h-8" />,
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Fast Loading Speed",
      "SSL Security",
      "Content Management",
      "E-commerce Integration",
    ],
    priceRange: "Contact us for pricing",
    deliveryTime: "2-6 weeks",
    color: "green",
  },
  {
    id: "ai-solutions",
    title: "Agentic AI Solutions",
    icon: <Brain className="w-8 h-8" />,
    description:
      "Intelligent AI agents that can perform complex tasks, make decisions, and interact with your systems autonomously.",
    features: [
      "Natural Language Processing",
      "Decision Making Systems",
      "Task Automation",
      "Learning Capabilities",
      "Custom AI Model Training",
      "API Integration",
    ],
    priceRange: "Contact us for pricing",
    deliveryTime: "4-8 weeks",
    color: "blue",
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation",
    icon: <MessageSquare className="w-8 h-8" />,
    description:
      "Complete WhatsApp business automation with chatbots, bulk messaging, and customer engagement tools.",
    features: [
      "Chatbot Integration",
      "Bulk Messaging",
      "Auto Responses",
      "Analytics Dashboard",
      "Customer Segmentation",
      "Multi-agent Support",
    ],
    priceRange: "Contact us for pricing",
    deliveryTime: "1-3 weeks",
    color: "purple",
  },
  {
    id: "erp-systems",
    title: "Custom ERP Systems",
    icon: <Database className="w-8 h-8" />,
    description:
      "Tailored Enterprise Resource Planning systems to streamline your business operations and workflows.",
    features: [
      "Inventory Management",
      "Financial Tracking",
      "HR Management",
      "Reporting Tools",
      "System Integration",
      "Cloud Deployment",
    ],
    priceRange: "Contact us for pricing",
    deliveryTime: "8-16 weeks",
    color: "orange",
  },
  {
    id: "crm-solutions",
    title: "CRM Solutions",
    icon: <Users className="w-8 h-8" />,
    description:
      "Customer Relationship Management systems designed to enhance customer interactions and boost sales.",
    features: [
      "Lead Management",
      "Sales Pipeline",
      "Customer Analytics",
      "Email Integration",
      "Task Automation",
      "Mobile Access",
    ],
    priceRange: "Contact us for pricing",
    deliveryTime: "6-12 weeks",
    color: "red",
  },
  {
    id: "saas-products",
    title: "SaaS Products",
    icon: <Layers className="w-8 h-8" />,
    description:
      "Complete Software-as-a-Service platforms with subscription management, user authentication, and scalable architecture.",
    features: [
      "Multi-tenant Architecture",
      "Subscription Billing",
      "User Management",
      "API Integration",
      "Analytics Dashboard",
      "Scalable Infrastructure",
    ],
    priceRange: "Contact us for pricing",
    deliveryTime: "10-20 weeks",
    color: "cyan",
  },
];

export default function ServicesPage() {
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our White Label Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Comprehensive technology solutions that you can offer to your
            clients under your brand without any technical expertise.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <Shield className="w-5 h-5" />
            <span>Enterprise-grade solutions with 99.9% uptime guarantee</span>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-16 h-16 bg-${service.color}-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className={`text-${service.color}-400`}>
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">
                      {service.deliveryTime}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                {service.features.slice(0, 4).map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
                {service.features.length > 4 && (
                  <div className="text-sm text-gray-500">
                    +{service.features.length - 4} more features
                  </div>
                )}
              </div>

              <div className="border-t border-gray-800 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-sm text-gray-400">Starting Price</div>
                    <div className="text-lg font-bold text-white">
                      {service.priceRange}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Premium</span>
                  </div>
                </div>

                <div className="flex gap-2 w-full">
                  <Link href={`/services/${service.id}`} className="flex-1">
                    <AnimatedButton className="w-full h-10 bg-red-600 text-white hover:bg-red-700 text-xs sm:text-sm">
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4" />
                    </AnimatedButton>
                  </Link>

                  <Link href="/contact" className="flex-1">
                    <AnimatedButton
                      variant="outline"
                      className="w-full h-10 border-gray-600 text-gray-300 hover:bg-gray-800 text-xs sm:text-sm"
                    >
                      Get Quote
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Projects Delivered" },
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "24/7", label: "Support Available" },
            { number: "150+", label: "Happy Partners" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gray-900/40 border border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Users className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Start Your Tech Agency?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Partner with us to offer these premium services under your brand
            without any technical expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/become-partner">
              <AnimatedButton className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg">
                Become a Partner
              </AnimatedButton>
            </Link>
            <Link href="/contact">
              <AnimatedButton
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
              >
                Contact Us
              </AnimatedButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
