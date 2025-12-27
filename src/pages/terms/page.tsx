import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  const [scrolled, setScrolled] = useState(false);

  const twitterAccount = "https://twitter.com/youraccount";
  const githubAccount = "https://github.com/youraccount";

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
          <div className="flex items-center gap-4">
            <a href={twitterAccount} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="ri-twitter-x-line text-lg"></i>
            </a>
            <Link to="/" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer text-sm sm:text-base">
              <i className="ri-arrow-left-line mr-1 sm:mr-2"></i>Back
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-gray-400">
              Last Updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 sm:space-y-12 text-gray-300">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  By accessing or using the LionXboost protocol, website, or any related services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Services.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and LionXboost. We reserve the right to modify these Terms at any time. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">2. Eligibility</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  You must be at least 18 years old to use the Services. By using the Services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                </p>
                <p>
                  You may not use the Services if you are located in, or a citizen or resident of, any jurisdiction where the use of blockchain technology, cryptocurrency, or the Services would be illegal or restricted.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">3. Description of Services</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  LionXboost provides a decentralized infrastructure layer for cryptographic verification of off-chain data. The Services include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access to the LionXboost verification protocol</li>
                  <li>Node operation capabilities</li>
                  <li>Smart contract interactions</li>
                  <li>API and SDK tools for integration</li>
                  <li>Documentation and technical resources</li>
                </ul>
                <p>
                  The Services are provided on an "as is" and "as available" basis. We do not guarantee that the Services will be uninterrupted, secure, or error-free.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">4. Node Operation</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  If you choose to operate a node on the LionXboost network, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintain the minimum required stake as specified in the protocol</li>
                  <li>Operate your node honestly and in accordance with protocol rules</li>
                  <li>Maintain adequate hardware and network infrastructure</li>
                  <li>Keep your node software updated</li>
                  <li>Accept the risk of slashing for dishonest behavior or protocol violations</li>
                </ul>
                <p>
                  You acknowledge that operating a node involves technical and financial risks, including but not limited to the potential loss of staked tokens through slashing.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">5. Tokens and Staking</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  The LionXboost protocol utilizes tokens for staking and network security. By participating in staking:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You acknowledge that tokens may be subject to slashing for protocol violations</li>
                  <li>You understand that staked tokens may be subject to lock-up periods</li>
                  <li>You accept all risks associated with token price volatility</li>
                  <li>You are responsible for the security of your private keys and wallet</li>
                </ul>
                <p>
                  Tokens are not securities and do not represent any ownership, equity, or profit-sharing rights in LionXboost or any related entity.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">6. Prohibited Activities</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the Services for any illegal purpose or in violation of any laws</li>
                  <li>Attempt to manipulate, exploit, or attack the protocol or network</li>
                  <li>Submit false or misleading verification requests</li>
                  <li>Interfere with other users' access to the Services</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                  <li>Use automated systems to access the Services without authorization</li>
                  <li>Engage in any activity that could damage the reputation of LionXboost</li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">7. Intellectual Property</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  All content, features, and functionality of the Services, including but not limited to text, graphics, logos, and software, are owned by LionXboost or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  The LionXboost protocol smart contracts and certain components are open source and licensed under applicable open source licenses. Use of open source components is subject to the terms of their respective licenses.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">8. Disclaimers</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p className="uppercase font-semibold">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p>
                  We disclaim all warranties, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Non-infringement of third-party rights</li>
                  <li>Accuracy, reliability, or completeness of information</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Security of data or transactions</li>
                </ul>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">9. Limitation of Liability</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p className="uppercase font-semibold">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, LIONXBOOST SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
                </p>
                <p>
                  This includes but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Loss of tokens or digital assets</li>
                  <li>Loss of data or information</li>
                  <li>Business interruption</li>
                  <li>Smart contract vulnerabilities or exploits</li>
                  <li>Network failures or attacks</li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">10. Indemnification</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  You agree to indemnify, defend, and hold harmless LionXboost and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your use of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Your operation of a node on the network</li>
                </ul>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">11. Governing Law</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which LionXboost is established, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration association.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">12. Contact Information</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  If you have any questions about these Terms, please contact us through our official channels:
                </p>
                <div className="bg-[#161B22] border border-emerald-500/20 rounded-xl p-4 sm:p-6">
                  <p className="text-emerald-400 font-semibold mb-2">LionXboost</p>
                  <p className="text-gray-400">Email: legal@lionxboost.ai</p>
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
