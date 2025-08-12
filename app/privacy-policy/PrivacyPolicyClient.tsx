"use client"

import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function PrivacyPolicyClient() {
  return (
    <>
      <Navbar />
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-8">
              <p className="text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-4">We collect information you provide directly to us, such as when you:</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Apply for our white label partnership program</li>
                <li>• Contact us through our website or email</li>
                <li>• Use our partner portal and project management tools</li>
                <li>• Participate in training sessions or meetings</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Process your partnership application</li>
                <li>• Provide technical support and project management</li>
                <li>• Calculate and process commission payments</li>
                <li>• Communicate about projects and partnership updates</li>
                <li>• Improve our services and partnership program</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties. We may share
                information only when necessary to complete projects or as required by law.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">5. Client Data</h2>
              <p className="text-gray-300 mb-6">
                Any client data shared through our partnership program is handled with strict confidentiality. We do not
                access or use client data beyond what is necessary to complete the requested services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6">
                Our website uses cookies to enhance user experience and analyze website traffic. You can disable cookies
                in your browser settings, though this may affect website functionality.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate information</li>
                <li>• Request deletion of your information</li>
                <li>• Opt out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about this privacy policy, please contact us at info@shabbyminds.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
