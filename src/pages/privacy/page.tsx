import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPage() {
  const [scrolled, setScrolled] = useState(false);
  const githubAccount = "https://github.com/jw054413-hash/LionXboost";
  const twitterAccount = "https://x.com/LionXboost";
  const contractAddress = "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb";
  const dexscreenerUrl = `https://dexscreener.com/ethereum/${contractAddress}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-animation { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F1A]/95 backdrop-blur-lg border-b border-emerald-500/10' : 'bg-[#0B0F1A]/95 backdrop-blur-lg border-b border-emerald-500/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">LionXboost</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer">Home</Link>
            <Link to="/docs" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer">Docs</Link>
            <a href={dexscreenerUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer" title="View on Dexscreener">
              <img src="https://dexscreener.com/favicon.ico" alt="Dexscreener" className="w-4 h-4" />
            </a>
            <a href={twitterAccount} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="ri-twitter-x-line"></i>
            </a>
            <a href={githubAccount} target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer whitespace-nowrap">
              <i className="ri-github-fill mr-2"></i>Repository
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-gray-400">
              Last Updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 sm:space-y-12 text-gray-300">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">1. Introduction</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  LionXboost ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our decentralized verification protocol and related services.
                </p>
                <p>
                  By using the LionXboost services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">2. Information We Collect</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <h3 className="text-xl font-semibold text-emerald-400">2.1 Blockchain Data</h3>
                <p>
                  As a decentralized protocol, certain information is inherently public on the blockchain:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Wallet addresses</li>
                  <li>Transaction hashes and amounts</li>
                  <li>Smart contract interactions</li>
                  <li>Staking and verification activities</li>
                  <li>Node operation data</li>
                </ul>

                <h3 className="text-xl font-semibold text-emerald-400 mt-6">2.2 Technical Information</h3>
                <p>
                  When you interact with our website or services, we may automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP addresses</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Operating system</li>
                  <li>Access times and dates</li>
                  <li>Pages viewed and navigation patterns</li>
                </ul>

                <h3 className="text-xl font-semibold text-emerald-400 mt-6">2.3 Communication Data</h3>
                <p>
                  If you contact us directly, we may collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email addresses</li>
                  <li>Names and contact information</li>
                  <li>Message content</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">3. How We Use Your Information</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  We use the collected information for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process verification requests and transactions</li>
                  <li>To monitor and analyze usage patterns and trends</li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>To send administrative information and updates</li>
                  <li>To enforce our terms and policies</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">4. Data Sharing and Disclosure</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <h3 className="text-xl font-semibold text-emerald-400">4.1 Public Blockchain Data</h3>
                <p>
                  Information recorded on public blockchains is inherently transparent and accessible to anyone. This includes all transaction data, smart contract interactions, and verification activities.
                </p>

                <h3 className="text-xl font-semibold text-emerald-400 mt-6">4.2 Service Providers</h3>
                <p>
                  We may share information with third-party service providers who perform services on our behalf:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cloud hosting providers</li>
                  <li>Analytics services</li>
                  <li>Customer support tools</li>
                  <li>Security and fraud prevention services</li>
                </ul>

                <h3 className="text-xl font-semibold text-emerald-400 mt-6">4.3 Legal Requirements</h3>
                <p>
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities, including to meet national security or law enforcement requirements.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">5. Data Security</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure development practices</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">6. Cookies and Tracking Technologies</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                <p>
                  Types of cookies we use:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">7. Your Privacy Rights</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                  <li><strong>Portability:</strong> Request transfer of your information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-4">
                  Please note that blockchain data cannot be deleted or modified due to the immutable nature of blockchain technology.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">8. International Data Transfers</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Your information may be transferred to and maintained on computers located outside of your jurisdiction where data protection laws may differ. By using our services, you consent to such transfers.
                </p>
                <p>
                  We take appropriate measures to ensure that your information receives an adequate level of protection in accordance with applicable data protection laws.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">9. Children's Privacy</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">10. Third-Party Links</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">11. Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">12. Contact Us</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-[#161B22] border border-emerald-500/20 rounded-xl p-4 sm:p-6">
                  <p className="text-emerald-400 font-semibold mb-2">LionXboost Privacy Team</p>
                  <p className="text-gray-400">Email: privacy@lionxboost.ai</p>
                  <p className="text-gray-400">Website: https://lionxboost.ai</p>
                </div>
              </div>
            </section>
          </div>

          {/* Back Button */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-800">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer text-sm sm:text-base">
              <i className="ri-arrow-left-line"></i>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
