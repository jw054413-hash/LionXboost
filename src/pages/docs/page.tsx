import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [scrolled, setScrolled] = useState(false);

  // Contract address - update this with your actual contract address
  const contractAddress = "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb";
  const githubAccount = "https://github.com/jw054413-hash/LionXboost";
  const twitterAccount = "https://twitter.com/youraccount";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-100px 0px -50% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-animation { animation: float 4s ease-in-out infinite; }
        
        pre {
          background: #161B22;
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 8px;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        code {
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        
        .keyword { color: #8B5CF6; }
        .string { color: #10B579; }
        .function { color: #14B8A6; }
        .comment { color: #6B7280; }
        .number { color: #F59E0B; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F1A]/95 backdrop-blur-lg border-b border-emerald-500/10' : 'bg-[#0B0F1A]/95 backdrop-blur-lg border-b border-emerald-500/10'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">LionXboost</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer">Home</Link>
            <a href={twitterAccount} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer">
              <i className="ri-twitter-x-line text-lg"></i>
            </a>
            <a href={githubAccount} target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer whitespace-nowrap">
              <i className="ri-github-fill mr-2"></i>Explore Repository
            </a>
          </div>
        </div>
      </nav>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 fixed left-0 top-20 bottom-0 border-r border-gray-800 bg-[#0D1117] overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Documentation</h3>
              <nav className="space-y-1">
                <button
                  onClick={() => scrollToSection('introduction')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'introduction' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                >
                  Introduction
                </button>
                <button
                  onClick={() => scrollToSection('getting-started')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'getting-started' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                >
                  Getting Started
                </button>
                <button
                  onClick={() => scrollToSection('architecture')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'architecture' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                >
                  Architecture
                </button>
                <button
                  onClick={() => scrollToSection('smart-contracts')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'smart-contracts' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                >
                  Smart Contracts
                </button>
                <button
                  onClick={() => scrollToSection('node-guide')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'node-guide' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                >
                  Node Guide
                </button>
                <button
                  onClick={() => scrollToSection('integration')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'integration' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                >
                  Integration Guide
                </button>
                <button
                  onClick={() => scrollToSection('security')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'security' ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400' : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                >
                  Security Model
                </button>
              </nav>
            </div>

            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Resources</h3>
              <nav className="space-y-1">
                <a href={githubAccount} target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 cursor-pointer">
                  GitHub Repository
                </a>
                <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 cursor-pointer">
                  Whitepaper
                </a>
                <a href="#" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 cursor-pointer">
                  Community
                </a>
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-72">
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Introduction */}
            <section id="introduction" className="mb-24">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
                Technical Documentation
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Welcome to the LionXboost technical documentation. This guide provides comprehensive information for developers, nodes, and integrators building on our decentralized verification infrastructure.
              </p>
              
              <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/20 rounded-lg flex-shrink-0">
                    <i className="ri-information-line text-2xl text-emerald-400"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-emerald-400">Protocol Overview</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      LionXboost is a decentralized infrastructure layer enabling cryptographic verification of off-chain data without trust assumptions. It provides a Byzantine fault-tolerant consensus mechanism for trustless verification across Web3 applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-500/10 rounded-lg mb-4">
                    <i className="ri-shield-check-line text-2xl text-emerald-400"></i>
                  </div>
                  <h3 className="font-semibold mb-2">Trustless</h3>
                  <p className="text-sm text-gray-400">No central authority or trusted intermediaries required</p>
                </div>
                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-500/10 rounded-lg mb-4">
                    <i className="ri-lock-password-line text-2xl text-teal-400"></i>
                  </div>
                  <h3 className="font-semibold mb-2">Cryptographic</h3>
                  <p className="text-sm text-gray-400">All verifications produce verifiable proofs</p>
                </div>
                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6 hover:border-violet-500/50 transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 flex items-center justify-center bg-violet-500/10 rounded-lg mb-4">
                    <i className="ri-expand-diagonal-line text-2xl text-violet-400"></i>
                  </div>
                  <h3 className="font-semibold mb-2">Scalable</h3>
                  <p className="text-sm text-gray-400">Horizontal scaling with parallel processing</p>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section id="getting-started" className="mb-24">
              <h2 className="text-4xl font-bold mb-6">Getting Started</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                This guide will help you integrate the LionXboost into your Web3 application in minutes.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Installation</h3>
              <p className="text-gray-400 mb-4">Install the protocol SDK using npm or yarn:</p>
              <pre><code><span className="keyword">npm</span> install <span className="string">@lionxboost/sdk</span></code></pre>

              <h3 className="text-2xl font-semibold mb-4 mt-8 text-emerald-400">Quick Start</h3>
              <p className="text-gray-400 mb-4">Initialize the client and submit your first verification request:</p>
              <pre><code><span className="keyword">import</span> {`{ `}<span className="function">VerificationClient</span>{` }`} <span className="keyword">from</span> <span className="string">'@lionxboost/sdk'</span>;

<span className="comment">// Initialize client with your configuration</span>
<span className="keyword">const</span> client = <span className="keyword">new</span> <span className="function">VerificationClient</span>({`{`}
  network: <span className="string">'mainnet'</span>,
  apiKey: <span className="string">process.env.VERIFICATION_API_KEY</span>
{`}`});

<span className="comment">// Submit verification request</span>
<span className="keyword">const</span> result = <span className="keyword">await</span> client.<span className="function">verify</span>({`{`}
  dataHash: <span className="string">'0x...'</span>,
  verificationType: <span className="string">'price-feed'</span>,
  parameters: {`{`}
    source: <span className="string">'chainlink'</span>,
    threshold: <span className="number">0.01</span>
  {`}`}
{`}`});

<span className="comment">// Verify proof on-chain</span>
<span className="keyword">const</span> isValid = <span className="keyword">await</span> client.<span className="function">verifyProof</span>(result.proof);</code></pre>

              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-amber-500/20 rounded-lg flex-shrink-0">
                    <i className="ri-lightbulb-line text-2xl text-amber-400"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-amber-400">Testnet First</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      We recommend testing on our testnet before deploying to mainnet. Get free testnet tokens from our faucet and experiment without risk.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Architecture */}
            <section id="architecture" className="mb-24">
              <h2 className="text-4xl font-bold mb-6">Protocol Architecture</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                LionXboost consists of four core layers working together to provide trustless verification.
              </p>

              <div className="space-y-6">
                <div className="bg-[#161B22] border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 rounded-lg flex-shrink-0 text-emerald-400 font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Application Layer</h3>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        Client SDKs and APIs enabling applications to submit verification requests. Supports multiple programming languages and frameworks with consistent interfaces.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs">JavaScript/TypeScript</span>
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs">Python</span>
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs">Rust</span>
                        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs">Go</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#161B22] border border-teal-500/20 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-teal-500/10 rounded-lg flex-shrink-0 text-teal-400 font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Consensus Layer</h3>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        Byzantine fault-tolerant consensus mechanism coordinating node network. Implements stake-weighted voting with cryptographic randomness for node selection.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs">BFT Consensus</span>
                        <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs">VRF Selection</span>
                        <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-xs">Slashing</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#161B22] border border-violet-500/20 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-violet-500/10 rounded-lg flex-shrink-0 text-violet-400 font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Verification Layer</h3>
                      <p className="text-gray-400 leading-relaxed mb-4">
                        Distributed network of nodes executing verification logic and producing cryptographic attestations. Supports custom verification plugins and zero-knowledge proofs.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs">ZK Proofs</span>
                        <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs">Custom Logic</span>
                        <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs">Parallel Processing</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#161B22] border border-lime-500/20 rounded-xl p-6 hover:border-lime-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-lime-500/10 rounded-lg flex-shrink-0 text-lime-400 font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">Settlement Layer</h3>
                      <p className="text-gray-400 leading-relaxed">
                        Smart contracts on EVM-compatible chains storing verification proofs and managing economic security. Enables trustless verification by any party.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-lime-500/10 text-lime-400 rounded-full text-xs">Polygon</span>
                        <span className="px-3 py-1 bg-lime-500/10 text-lime-400 rounded-full text-xs">Arbitrum</span>
                        <span className="px-3 py-1 bg-lime-500/10 text-lime-400 rounded-full text-xs">Optimism</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Smart Contracts */}
            <section id="smart-contracts" className="mb-24">
              <h2 className="text-4xl font-bold mb-6">Smart Contracts</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Core protocol contracts deployed on supported networks. All contracts are verified, audited, and open source.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-emerald-400">VerificationRegistry.sol</h3>
              <p className="text-gray-400 mb-4">Main registry contract managing verification requests and proofs.</p>
              <pre><code><span className="keyword">interface</span> <span className="function">IVerificationRegistry</span> {`{`}
  <span className="comment">// Submit verification request</span>
  <span className="keyword">function</span> <span className="function">submitRequest</span>(
    <span className="keyword">bytes32</span> dataHash,
    <span className="keyword">string</span> verificationType,
    <span className="keyword">bytes</span> parameters
  ) <span className="keyword">external</span> <span className="keyword">payable</span> <span className="keyword">returns</span> (<span className="keyword">uint256</span> requestId);

  <span className="comment">// Verify verification proof</span>
  <span className="keyword">function</span> <span className="function">verifyProof</span>(
    <span className="keyword">uint256</span> requestId,
    <span className="keyword">bytes</span> proof
  ) <span className="keyword">external</span> <span className="keyword">view</span> <span className="keyword">returns</span> (<span className="keyword">bool</span>);

  <span className="comment">// Get verification result</span>
  <span className="keyword">function</span> <span className="function">getResult</span>(
    <span className="keyword">uint256</span> requestId
  ) <span className="keyword">external</span> <span className="keyword">view</span> <span className="keyword">returns</span> (VerificationResult <span className="keyword">memory</span>);
{`}`}</code></pre>

              <h3 className="text-2xl font-semibold mb-4 mt-8 text-emerald-400">NodeStaking.sol</h3>
              <p className="text-gray-400 mb-4">Manages node stakes and slashing conditions.</p>
              <pre><code><span className="keyword">interface</span> <span className="function">INodeStaking</span> {`{`}
  <span className="comment">// Stake tokens to become node</span>
  <span className="keyword">function</span> <span className="function">stake</span>(<span className="keyword">uint256</span> amount) <span className="keyword">external</span>;

  <span className="comment">// Unstake tokens (with cooldown period)</span>
  <span className="keyword">function</span> <span className="function">unstake</span>(<span className="keyword">uint256</span> amount) <span className="keyword">external</span>;

  <span className="comment">// Slash node for dishonest behavior</span>
  <span className="keyword">function</span> <span className="function">slash</span>(
    <span className="keyword">address</span> node,
    <span className="keyword">uint256</span> amount,
    <span className="keyword">bytes</span> proof
  ) <span className="keyword">external</span>;
{`}`}</code></pre>

              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full mb-4">
                  <i className="ri-file-list-3-line text-emerald-400"></i>
                  <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-wider uppercase">Smart Contract</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Official Contract Address</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Verified and Audited</p>
              </div>

              <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6 mt-8">
                <h4 className="font-semibold mb-4">Deployed Contract</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <code className="text-emerald-400 break-all">{contractAddress}</code>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <a 
                    href={githubAccount}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    <i className="ri-github-fill"></i>
                    View Source Code
                  </a>
                </div>
              </div>
            </section>

            {/* Node Guide */}
            <section id="node-guide" className="mb-24">
              <h2 className="text-4xl font-bold mb-6">Node Guide</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Learn how to run a node and participate in the verification network.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Requirements</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <i className="ri-stack-line text-emerald-400"></i>
                    Minimum Stake
                  </h4>
                  <p className="text-2xl font-bold text-emerald-400 mb-2">10,000 Tokens</p>
                  <p className="text-sm text-gray-400">Required collateral to participate</p>
                </div>
                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <i className="ri-server-line text-teal-400"></i>
                    Hardware
                  </h4>
                  <p className="text-sm text-gray-400 mb-1">4+ CPU cores</p>
                  <p className="text-sm text-gray-400 mb-1">16GB+ RAM</p>
                  <p className="text-sm text-gray-400">500GB+ SSD storage</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Setup Instructions</h3>
              <div className="space-y-6">
                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 rounded-lg flex-shrink-0 text-emerald-400 font-bold text-sm">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Install Node Client</h4>
                      <pre className="mt-3"><code><span className="keyword">curl</span> -sSL https://install.lionxboost.ai | <span className="keyword">bash</span></code></pre>
                    </div>
                  </div>
                </div>

                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 rounded-lg flex-shrink-0 text-emerald-400 font-bold text-sm">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Configure Node</h4>
                      <pre className="mt-3"><code><span className="keyword">node-cli</span> init --network mainnet
<span className="keyword">node-cli</span> config set --key <span className="string">YOUR_PRIVATE_KEY</span></code></pre>
                    </div>
                  </div>
                </div>

                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 rounded-lg flex-shrink-0 text-emerald-400 font-bold text-sm">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Stake Tokens</h4>
                      <pre className="mt-3"><code><span className="keyword">node-cli</span> stake --amount <span className="number">10000</span></code></pre>
                    </div>
                  </div>
                </div>

                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 rounded-lg flex-shrink-0 text-emerald-400 font-bold text-sm">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Start Node</h4>
                      <pre className="mt-3"><code><span className="keyword">node-cli</span> start</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* API Reference */}
            <section id="api-reference" className="mb-24">
              <h2 className="text-4xl font-bold mb-6">API Reference</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Complete API documentation for integrating the LionXboost.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-emerald-400">REST API</h3>
              <div className="space-y-6">
                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded text-sm font-semibold">POST</span>
                    <code className="text-gray-300">/api/v1/verify</code>
                  </div>
                  <p className="text-gray-400 mb-4">Submit a new verification request</p>
                  <pre><code>{`{
  `}<span className="string">"dataHash"</span>: <span className="string">"0x..."</span>,
  <span className="string">"verificationType"</span>: <span className="string">"price-feed"</span>,
  <span className="string">"parameters"</span>: {`{`}
    <span className="string">"source"</span>: <span className="string">"chainlink"</span>,
    <span className="string">"threshold"</span>: <span className="number">0.01</span>
  {`}`}
{`}`}</code></pre>
                </div>

                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded text-sm font-semibold">GET</span>
                    <code className="text-gray-300">/api/v1/verify/:requestId</code>
                  </div>
                  <p className="text-gray-400 mb-4">Get verification result and proof</p>
                  <pre><code>{`{
  `}<span className="string">"requestId"</span>: <span className="string">"12345"</span>,
  <span className="string">"status"</span>: <span className="string">"completed"</span>,
  <span className="string">"result"</span>: <span className="keyword">true</span>,
  <span className="string">"proof"</span>: <span className="string">"0x..."</span>,
  <span className="string">"nodes"</span>: [<span className="string">"0x..."</span>, <span className="string">"0x..."</span>]
{`}`}</code></pre>
                </div>

                <div className="bg-[#161B22] border border-gray-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-400 rounded text-sm font-semibold">GET</span>
                    <code className="text-gray-300">/api/v1/nodes</code>
                  </div>
                  <p className="text-gray-400 mb-4">List active nodes</p>
                  <pre><code>{`{
  `}<span className="string">"nodes"</span>: [
    {`{`}
      <span className="string">"address"</span>: <span className="string">"0x..."</span>,
      <span className="string">"stake"</span>: <span className="number">50000</span>,
      <span className="string">"reputation"</span>: <span className="number">0.99</span>,
      <span className="string">"uptime"</span>: <span className="number">0.998</span>
    {`}`}
  ]
{`}`}</code></pre>
                </div>
              </div>
            </section>

            {/* Integration Guide */}
            <section id="integration" className="mb-24">
              <h2 className="text-4xl font-bold mb-6">Integration Guide</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Step-by-step guide for integrating verification into your Web3 application.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-emerald-400">DeFi Price Feed Example</h3>
              <p className="text-gray-400 mb-4">Verify oracle price data before executing trades:</p>
              <pre><code><span className="keyword">import</span> {`{ `}<span className="function">VerificationClient</span>{` }`} <span className="keyword">from</span> <span className="string">'@lionxboost/sdk'</span>;

<span className="keyword">async function</span> <span className="function">executeTrade</span>(tokenA, tokenB, amount) {`{`}
  <span className="comment">// Get price from oracle</span>
  <span className="keyword">const</span> price = <span className="keyword">await</span> oracle.<span className="function">getPrice</span>(tokenA, tokenB);
  
  <span className="comment">// Verify price data</span>
  <span className="keyword">const</span> verification = <span className="keyword">await</span> client.<span className="function">verify</span>({`{`}
    dataHash: <span className="function">keccak256</span>(price),
    verificationType: <span className="string">'price-feed'</span>,
    parameters: {`{`}
      sources: [<span className="string">'chainlink'</span>, <span className="string">'uniswap'</span>, <span className="string">'binance'</span>],
      maxDeviation: <span className="number">0.02</span> <span className="comment">// 2% max difference</span>
    {`}`}
  {`}`});

  <span className="comment">// Only execute if verification passes</span>
  <span className="keyword">if</span> (verification.result) {`{`}
    <span className="keyword">await</span> dex.<span className="function">swap</span>(tokenA, tokenB, amount, price);
  {`}`} <span className="keyword">else</span> {`{`}
    <span className="keyword">throw new</span> <span className="function">Error</span>(<span className="string">'Price verification failed'</span>);
  {`}`}
{`}`}</code></pre>

              <h3 className="text-2xl font-semibold mb-4 mt-8 text-emerald-400">DAO Governance Example</h3>
              <p className="text-gray-400 mb-4">Verify off-chain voting results before on-chain execution:</p>
              <pre><code><span className="keyword">async function</span> <span className="function">executeProposal</span>(proposalId, votes) {`{`}
  <span className="comment">// Verify voting results</span>
  <span className="keyword">const</span> verification = <span className="keyword">await</span> client.<span className="function">verify</span>({`{`}
    dataHash: <span className="function">keccak256</span>(votes),
    verificationType: <span className="string">'governance-vote'</span>,
    parameters: {`{`}
      proposalId,
      snapshotBlock: <span className="number">18500000</span>,
      votingPlatform: <span className="string">'snapshot'</span>
    {`}`}
  {`}`});

  <span className="comment">// Execute proposal with verified results</span>
  <span className="keyword">await</span> dao.<span className="function">execute</span>(proposalId, verification.proof);
{`}`}</code></pre>
            </section>

            {/* Security Model */}
            <section id="security" className="mb-24">
              <h2 className="text-4xl font-bold mb-6">Security Model</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Understanding the economic and cryptographic security guarantees of the protocol.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <i className="ri-shield-check-line text-2xl text-emerald-400"></i>
                    Economic Security
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Nodes stake tokens as collateral, slashable for dishonest attestations. Slashing penalties exceed potential gains from manipulation, ensuring rational actors remain honest.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#161B22] rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Minimum Stake</div>
                      <div className="text-2xl font-bold text-emerald-400">10,000 tokens</div>
                    </div>
                    <div className="bg-[#161B22] rounded-lg p-4">
                      <div className="text-sm text-gray-500 mb-1">Slashing Penalty</div>
                      <div className="text-2xl font-bold text-rose-400">Up to 100%</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <i className="ri-lock-password-line text-2xl text-violet-400"></i>
                    Cryptographic Security
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    All verifications produce verifiable cryptographic proofs using industry-standard algorithms. Zero-knowledge proofs enable privacy-preserving verification when required.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-sm">ECDSA Signatures</span>
                    <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-sm">Merkle Proofs</span>
                    <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-sm">ZK-SNARKs</span>
                    <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-sm">VRF</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <i className="ri-bug-line text-2xl text-amber-400"></i>
                    Audits &amp; Bug Bounty
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    All smart contracts have been audited by leading security firms. We maintain an active bug bounty program rewarding responsible disclosure of vulnerabilities.
                  </p>
                  <div className="flex items-center gap-4">
                    <a href="#" className="px-6 py-3 bg-amber-500/10 text-amber-400 rounded-lg hover:bg-amber-500/20 transition-all duration-300 cursor-pointer whitespace-nowrap">
                      View Audit Reports
                    </a>
                    <a href="#" className="px-6 py-3 bg-orange-500/10 text-orange-400 rounded-lg hover:bg-orange-500/20 transition-all duration-300 cursor-pointer whitespace-nowrap">
                      Bug Bounty Program
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Navigation */}
            <div className="border-t border-gray-800 pt-12 mt-24">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                  <i className="ri-arrow-left-line"></i>
                  Back to Home
                </Link>
                <div className="flex items-center gap-6">
                  <a href={githubAccount} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
