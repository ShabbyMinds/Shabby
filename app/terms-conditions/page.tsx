import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "ShabbyMinds - Terms and Conditions",
  description: "Terms and conditions for ShabbyMinds white label partnership program.",
}

export default function TermsConditions() {
  return (
    <>
      <Navbar />
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">Terms and Conditions</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-8">
              <p className="text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using ShabbyMinds white label partnership program, you accept and agree to be bound by
                the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">2. Partnership Program</h2>
              <p className="text-gray-300 mb-4">
                ShabbyMinds offers a white label partnership program where partners can offer our technology services
                under their own brand. Partners earn commission based on their tier level and project value.
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• All partnership tiers are completely free</li>
                <li>• Partners are promoted based on performance and client frequency</li>
                <li>• Commission rates range from 15% to 35% depending on tier and service</li>
                <li>• Partners handle client relationships and billing directly</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">3. Commission Structure</h2>
              <p className="text-gray-300 mb-6">
                Commission rates are determined by your partnership tier and the type of service provided. Partners bill
                clients directly and remit the agreed percentage to ShabbyMinds after project completion.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">4. White Label Rights</h2>
              <p className="text-gray-300 mb-6">
                Partners have the right to present all services under their own brand. ShabbyMinds will not communicate
                directly with partner clients unless specifically requested for technical support.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">5. Quality Standards</h2>
              <p className="text-gray-300 mb-6">
                All work delivered through the partnership program meets ShabbyMinds quality standards. We guarantee
                client satisfaction and will revise work at no additional cost within the original project scope.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">6. Termination</h2>
              <p className="text-gray-300 mb-6">
                Either party may terminate the partnership agreement with 30 days written notice. All ongoing projects
                will be completed according to the original terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                All work created through the partnership program becomes the property of the end client. ShabbyMinds
                retains rights to methodologies and proprietary processes used in delivery.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">
                ShabbyMinds liability is limited to the value of the specific project in question. We are not liable for
                indirect, consequential, or punitive damages.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
              <p className="text-gray-300">
                For questions about these terms, please contact us at info@shabbyminds.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
