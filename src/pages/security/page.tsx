import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SecurityPage() {
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
              Security
            </h1>
            <p className="text-base sm:text-lg text-gray-400">
              Our commitment to protecting the LionXboost protocol and community
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 sm:space-y-12 text-gray-300">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Security Overview</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Security is the foundation of the LionXboost protocol. We employ multiple layers of protection to ensure the integrity, availability, and confidentiality of our decentralized verification infrastructure.
                </p>
                <p>
                  Our security approach combines cryptographic guarantees, economic incentives, rigorous auditing, and continuous monitoring to create a robust and trustless system.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Smart Contract Security</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <h3 className="text-xl font-semibold text-emerald-400">Audits</h3>
                <p>
                  All LionXboost smart contracts undergo comprehensive security audits by leading blockchain security firms:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="bg-[#161B22] border border-emerald-500/20 rounded-xl p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 rounded-lg">
                        <i className="ri-shield-check-line text-xl text-emerald-400"></i>
                      </div>
                      <h4 className="font-semibold">Multiple Audits</h4>
                    </div>
                    <p className="text-sm text-gray-400">Audited by 3+ top-tier security firms</p>
                  </div>
                  <div className="bg-[#161B22] border border-teal-500/20 rounded-xl p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-teal-500/10 rounded-lg">
                        <i className="ri-file-list-3-line text-xl text-teal-400"></i>
                      </div>
                      <h4 className="font-semibold">Public Reports</h4>
                    </div>
                    <p className="text-sm text-gray-400">All audit reports publicly available</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-emerald-400 mt-6">Formal Verification</h3>
                <p>
                  Critical contract components undergo formal verification to mathematically prove correctness and security properties.
                </p>

                <h3 className="text-xl font-semibold text-emerald-400 mt-6">Continuous Monitoring</h3>
                <p>
                  We employ real-time monitoring systems to detect and respond to potential security threats:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Automated anomaly detection</li>
                  <li>Transaction pattern analysis</li>
                  <li>Gas usage monitoring</li>
                  <li>Emergency pause mechanisms</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Economic Security Model</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  LionXboost's security is reinforced through economic incentives that make attacks prohibitively expensive:
                </p>

                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-4 sm:p-6 my-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <i className="ri-coins-line text-2xl text-emerald-400"></i>
                    Staking Requirements
                  </h3>
                  <p className="mb-4">
                    Nodes must stake a minimum of 10,000 tokens to participate in the network. This collateral ensures honest behavior and can be slashed for protocol violations.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-[#161B22] rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Minimum Stake</div>
                      <div className="text-2xl font-bold text-emerald-400">10,000 tokens</div>
                    </div>
                    <div className="bg-[#161B22] rounded-lg p-4">
                      <div className="text-sm text-gray-400 mb-1">Maximum Slashing</div>
                      <div className="text-2xl font-bold text-rose-400">100%</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-emerald-400">Slashing Conditions</h3>
                <p>
                  Nodes can be slashed for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing false attestations</li>
                  <li>Double-signing verification requests</li>
                  <li>Extended downtime or unavailability</li>
                  <li>Attempting to manipulate consensus</li>
                  <li>Colluding with other nodes</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Cryptographic Security</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  LionXboost employs industry-standard cryptographic primitives and protocols:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="bg-[#161B22] border border-violet-500/20 rounded-xl p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-violet-500/10 rounded-lg">
                        <i className="ri-key-2-line text-xl text-violet-400"></i>
                      </div>
                      <h4 className="font-semibold">ECDSA Signatures</h4>
                    </div>
                    <p className="text-sm text-gray-400">Secure signing and verification of attestations</p>
                  </div>
                  <div className="bg-[#161B22] border border-fuchsia-500/20 rounded-xl p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-fuchsia-500/10 rounded-lg">
                        <i className="ri-git-merge-line text-xl text-fuchsia-400"></i>
                      </div>
                      <h4 className="font-semibold">Merkle Proofs</h4>
                    </div>
                    <p className="text-sm text-gray-400">Efficient verification of data integrity</p>
                  </div>
                  <div className="bg-[#161B22] border border-cyan-500/20 rounded-xl p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                        <i className="ri-eye-off-line text-xl text-cyan-400"></i>
                      </div>
                      <h4 className="font-semibold">ZK-SNARKs</h4>
                    </div>
                    <p className="text-sm text-gray-400">Privacy-preserving verification proofs</p>
                  </div>
                  <div className="bg-[#161B22] border border-lime-500/20 rounded-xl p-4 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-lime-500/10 rounded-lg">
                        <i className="ri-shuffle-line text-xl text-lime-400"></i>
                      </div>
                      <h4 className="font-semibold">VRF</h4>
                    </div>
                    <p className="text-sm text-gray-400">Verifiable random node selection</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Bug Bounty Program</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  We maintain an active bug bounty program to incentivize responsible disclosure of security vulnerabilities. Security researchers who discover and report vulnerabilities are eligible for rewards.
                </p>

                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-4 sm:p-6 my-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-400">Reward Tiers</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Critical</span>
                      <span className="text-amber-400 font-bold">Up to $100,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">High</span>
                      <span className="text-orange-400 font-bold">Up to $50,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Medium</span>
                      <span className="text-yellow-400 font-bold">Up to $10,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Low</span>
                      <span className="text-lime-400 font-bold">Up to $1,000</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-emerald-400">Scope</h3>
                <p>
                  The bug bounty program covers:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Smart contracts on mainnet</li>
                  <li>Core protocol logic</li>
                  <li>Node client software</li>
                  <li>API and SDK vulnerabilities</li>
                  <li>Website and infrastructure</li>
                </ul>

                <h3 className="text-xl font-semibold text-emerald-400 mt-6">How to Report</h3>
                <p>
                  To report a security vulnerability:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Email security@lionxboost.ai with details</li>
                  <li>Include proof of concept if possible</li>
                  <li>Do not publicly disclose the vulnerability</li>
                  <li>Allow us reasonable time to address the issue</li>
                </ol>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Incident Response</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  We maintain a comprehensive incident response plan to quickly address security issues:
                </p>

                <div className="space-y-4">
                  <div className="bg-[#161B22] border border-gray-800 rounded-xl p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 rounded-lg flex-shrink-0 text-emerald-400 font-bold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Detection</h4>
                        <p className="text-sm text-gray-400">Automated monitoring and community reports identify potential issues</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#161B22] border border-gray-800 rounded-xl p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 rounded-lg flex-shrink-0 text-emerald-400 font-bold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Assessment</h4>
                        <p className="text-sm text-gray-400">Security team evaluates severity and impact</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#161B22] border border-gray-800 rounded-xl p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 rounded-lg flex-shrink-0 text-emerald-400 font-bold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Containment</h4>
                        <p className="text-sm text-gray-400">Emergency measures activated to prevent further damage</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#161B22] border border-gray-800 rounded-xl p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 rounded-lg flex-shrink-0 text-emerald-400 font-bold text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Resolution</h4>
                        <p className="text-sm text-gray-400">Fix deployed and thoroughly tested</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#161B22] border border-gray-800 rounded-xl p-4 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 rounded-lg flex-shrink-0 text-emerald-400 font-bold text-sm">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Communication</h4>
                        <p className="text-sm text-gray-400">Transparent disclosure to community with post-mortem analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Best Practices for Users</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Protect yourself when using LionXboost:
                </p>

                <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-xl p-4 sm:p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <i className="ri-shield-user-line text-2xl text-rose-400"></i>
                    Security Checklist
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-emerald-400 mt-1"></i>
                      <span>Use hardware wallets for large amounts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-emerald-400 mt-1"></i>
                      <span>Never share your private keys or seed phrases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-emerald-400 mt-1"></i>
                      <span>Verify contract addresses before interacting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-emerald-400 mt-1"></i>
                      <span>Enable two-factor authentication where available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-emerald-400 mt-1"></i>
                      <span>Be cautious of phishing attempts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-line text-emerald-400 mt-1"></i>
                      <span>Keep your software and wallets updated</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Contact Security Team</h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  For security-related inquiries or to report vulnerabilities:
                </p>
                <div className="bg-[#161B22] border border-emerald-500/20 rounded-xl p-4 sm:p-6">
                  <p className="text-emerald-400 font-semibold mb-2">LionXboost Security Team</p>
                  <p className="text-gray-400 mb-1">Email: security@lionxboost.ai</p>
                  <p className="text-gray-400 mb-1">PGP Key: Available on request</p>
                  <p className="text-gray-400">Response Time: Within 24 hours</p>
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
