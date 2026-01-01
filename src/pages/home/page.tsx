import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const contractAddress = "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb";
  const githubAccount = "https://github.com/jw054413-hash/LionXboost";
  const twitterAccount = "https://x.com/lionxboost33?s=11";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .fade-in-up { opacity: 0; }
        .fade-in-left { opacity: 0; }
        .fade-in-right { opacity: 0; }
        .scale-in { opacity: 0; }
        .fade-in-up.animate-in { animation: slide-in-up 0.8s ease-out forwards; }
        .fade-in-left.animate-in { animation: slide-in-left 0.8s ease-out forwards; }
        .fade-in-right.animate-in { animation: slide-in-right 0.8s ease-out forwards; }
        .scale-in.animate-in { animation: scale-in 0.6s ease-out forwards; }
        .float-animation { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .rotate-slow { animation: rotate-slow 20s linear infinite; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0F1A]/95 backdrop-blur-lg border-b border-emerald-500/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">LionXboost</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#problem" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer text-sm whitespace-nowrap">Problem</a>
            <a href="#solution" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer text-sm whitespace-nowrap">Solution</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer text-sm whitespace-nowrap">How It Works</a>
            <a href="#features" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer text-sm whitespace-nowrap">Features</a>
            <a href="#token" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer text-sm whitespace-nowrap">Token</a>
            <a href={twitterAccount} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer text-sm flex items-center gap-1">
              <i className="ri-twitter-x-line text-base"></i>
            </a>
            <a href={githubAccount} target="_blank" rel="noopener noreferrer" className="px-4 xl:px-5 py-2 border border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer whitespace-nowrap text-sm">Explore Repository</a>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-emerald-400 hover:bg-emerald-400/10 rounded-xl transition-all duration-300"
          >
            <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0F1A]/98 backdrop-blur-lg border-t border-emerald-500/10">
            <div className="px-4 py-4 space-y-2">
              <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/5 rounded-xl transition-all duration-300 cursor-pointer">Problem</a>
              <a href="#solution" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/5 rounded-xl transition-all duration-300 cursor-pointer">Solution</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/5 rounded-xl transition-all duration-300 cursor-pointer">How It Works</a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/5 rounded-xl transition-all duration-300 cursor-pointer">Features</a>
              <a href="#token" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/5 rounded-xl transition-all duration-300 cursor-pointer">Token</a>
              <a href={twitterAccount} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/5 rounded-xl transition-all duration-300 cursor-pointer">
                <i className="ri-twitter-x-line mr-2"></i>Twitter
              </a>
              <a href={githubAccount} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 border border-emerald-400 text-emerald-400 rounded-xl hover:bg-emerald-400/10 transition-all duration-300 cursor-pointer text-center">Explore Repository</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#1a1f35] to-[#0B0F1A]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.15) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-emerald-500/20 rounded-full blur-3xl pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-violet-500/20 rounded-full blur-3xl pulse-glow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] border border-emerald-500/10 rounded-full rotate-slow"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight scale-in px-4">
            <span className="bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
              Trustless Verification
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-violet-400 bg-clip-text text-transparent">
              For Decentralized Systems
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up px-4" style={{animationDelay: '0.2s'}}>
            A decentralized protocol enabling cryptographic verification of off-chain data without trust assumptions. Built for Web3 infrastructure that demands transparency and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center fade-in-up px-4" style={{animationDelay: '0.4s'}}>
            <a href="/docs" className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-black rounded-full font-semibold hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-sm sm:text-base">
              <i className="ri-file-text-line"></i>
              Read Documentation
            </a>
            <a href={githubAccount} target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-400 text-emerald-400 rounded-full font-semibold hover:bg-emerald-400/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-sm sm:text-base">
              <i className="ri-github-fill"></i>
              Explore Repository
            </a>
          </div>
        </div>
      </section>

      {/* Contract Address Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#0B0F1A] to-[#0D1117] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] rounded-2xl sm:rounded-3xl border border-emerald-500/30 p-6 sm:p-8 md:p-10 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 fade-in-up">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full mb-4">
                <i className="ri-file-list-3-line text-emerald-400"></i>
                <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-wider uppercase">Smart Contract</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Official Contract Address</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Verified and Audited</p>
            </div>
            
            <div className="bg-[#0B0F1A] rounded-xl p-4 sm:p-6 border border-emerald-500/20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <code className="text-emerald-400 text-xs sm:text-sm md:text-base font-mono break-all text-center sm:text-left">{contractAddress}</code>
                <button
                  onClick={() => copyToClipboard(contractAddress)}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap text-sm sm:text-base cursor-pointer"
                >
                  <i className={`${copiedAddress ? 'ri-check-line' : 'ri-file-copy-line'}`}></i>
                  {copiedAddress ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6">
              <a 
                href={githubAccount}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-2 sm:py-3 border border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-sm sm:text-base"
              >
                <i className="ri-github-fill"></i>
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#0D1117] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
            <div className="lg:col-span-2 fade-in-left">
              <div className="lg:sticky lg:top-32">
                <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase">The Challenge</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
                  Trust Assumptions<br />Break Decentralization
                </h2>
                <div className="w-1 h-16 sm:h-20 lg:h-32 bg-gradient-to-b from-emerald-500 to-transparent"></div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-rose-500/20 hover:border-rose-500/60 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] transition-all duration-300 hover:scale-105 fade-in-right" style={{animationDelay: '0.1s'}}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-rose-500/10 rounded-xl sm:rounded-2xl flex-shrink-0">
                    <i className="ri-error-warning-line text-xl sm:text-2xl text-rose-400"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Unverifiable Off-Chain Data</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Decentralized applications rely on external data sources that cannot be cryptographically verified on-chain, creating centralized points of failure and undermining the trustless nature of blockchain systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-amber-500/20 hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all duration-300 hover:scale-105 fade-in-right" style={{animationDelay: '0.2s'}}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-amber-500/10 rounded-xl sm:rounded-2xl flex-shrink-0">
                    <i className="ri-lock-line text-xl sm:text-2xl text-amber-400"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Centralized Oracles</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Current oracle solutions require trusting intermediaries to honestly report data, contradicting Web3's trustless principles and introducing single points of compromise that can manipulate entire protocols.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-orange-500/20 hover:border-orange-500/60 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all duration-300 hover:scale-105 fade-in-right" style={{animationDelay: '0.3s'}}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-orange-500/10 rounded-xl sm:rounded-2xl flex-shrink-0">
                    <i className="ri-alert-line text-xl sm:text-2xl text-orange-400"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">Verification Bottlenecks</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      Manual verification processes and centralized nodes create scalability limitations and single points of compromise, preventing Web3 infrastructure from achieving true decentralization at scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-[#1a1f35] to-[#0F1729] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 fade-in-up">
            <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase">Our Approach</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">Decentralized Verification Layer</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              Cryptographic proof system enabling trustless verification of any data source through distributed consensus and economic incentives.
            </p>
          </div>

          {/* Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            <div className="relative scale-in" style={{animationDelay: '0.1s'}}>
              <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 bg-gradient-to-br from-[#161B22] to-[#1a1f2e] rounded-2xl border-2 border-emerald-500/30 flex flex-col items-center justify-center p-4 sm:p-6 hover:border-emerald-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-110 float-animation">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-emerald-500/10 rounded-xl mb-3 sm:mb-4">
                  <i className="ri-database-2-line text-3xl sm:text-4xl text-emerald-400"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Data Source</h3>
                <p className="text-xs sm:text-sm text-gray-400 text-center">Off-chain systems</p>
              </div>
            </div>

            <div className="hidden md:block scale-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-500 to-transparent relative">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="relative scale-in" style={{animationDelay: '0.3s'}}>
              <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 bg-gradient-to-br from-[#161B22] to-[#1a1f2e] rounded-2xl border-2 border-emerald-500/30 flex flex-col items-center justify-center p-4 sm:p-6 shadow-[0_0_50px_rgba(16,185,129,0.4)] hover:shadow-[0_0_70px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-110">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center bg-emerald-500/20 rounded-xl mb-3 sm:mb-4 pulse-glow">
                  <i className="ri-shield-check-line text-4xl sm:text-5xl text-emerald-400"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">LionXboost Protocol</h3>
                <p className="text-xs sm:text-sm text-gray-400 text-center">Decentralized verification</p>
              </div>
            </div>

            <div className="hidden md:block scale-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 relative">
                <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="relative scale-in" style={{animationDelay: '0.5s'}}>
              <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 bg-gradient-to-br from-[#161B22] to-[#1a1f2e] rounded-2xl border-2 border-teal-500/30 flex flex-col items-center justify-center p-4 sm:p-6 hover:border-teal-500 hover:shadow-[0_0_40px_rgba(20,184,166,0.3)] transition-all duration-300 hover:scale-110 float-animation" style={{animationDelay: '3s'}}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-teal-500/10 rounded-xl mb-3 sm:mb-4">
                  <i className="ri-links-line text-3xl sm:text-4xl text-teal-400"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">On-Chain Proof</h3>
                <p className="text-xs sm:text-sm text-gray-400 text-center">Immutable verification</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center fade-in-up px-4" style={{animationDelay: '0.6s'}}>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              The protocol eliminates trust assumptions by distributing verification across a decentralized network of nodes who stake tokens and provide cryptographic proofs of data accuracy, slashable for dishonest behavior. This creates an economically secure layer for trustless verification of any off-chain data.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#0A0E27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 fade-in-up">
            <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase">Protocol Mechanics</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4">Verification Process</h2>
          </div>

          <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div className="relative fade-in-left">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-emerald-500/10 absolute -top-4 sm:-top-6 md:-top-8 -left-2 sm:-left-4">01</div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Data Submission</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    Applications or users submit data requests to the protocol with attached verification parameters and fee payment. Requests are broadcast to the node network via decentralized messaging layer, ensuring no single point of failure.
                  </p>
                  <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-4 sm:p-6 rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
                    <p className="text-xs sm:text-sm text-gray-400">
                      <strong className="text-emerald-400">Submission includes:</strong> data hash, verification criteria, timeout parameters, node requirements, economic incentives
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-emerald-500/10 to-violet-500/10 rounded-2xl border border-emerald-500/20 flex items-center justify-center hover:shadow-[0_0_50px_rgba(16,185,129,0.2)] transition-all duration-300 fade-in-right">
                <div className="text-center float-animation">
                  <i className="ri-send-plane-line text-6xl sm:text-7xl md:text-8xl text-emerald-400 opacity-50"></i>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-violet-500/10 to-emerald-500/10 rounded-2xl border border-violet-500/20 flex items-center justify-center order-2 md:order-1 hover:shadow-[0_0_50px_rgba(139,92,246,0.2)] transition-all duration-300 fade-in-left">
                <div className="text-center float-animation" style={{animationDelay: '1s'}}>
                  <i className="ri-team-line text-6xl sm:text-7xl md:text-8xl text-violet-400 opacity-50"></i>
                </div>
              </div>
              <div className="relative order-1 md:order-2 fade-in-right">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-violet-500/10 absolute -top-4 sm:-top-6 md:-top-8 -right-2 sm:-right-4">02</div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Node Selection</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    Protocol algorithmically selects nodes based on stake weight, reputation score, and specialization. Multiple nodes are assigned to each request ensuring redundancy and preventing collusion through cryptographic randomness.
                  </p>
                  <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-4 sm:p-6 rounded-lg border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300">
                    <p className="text-xs sm:text-sm text-gray-400">
                      <strong className="text-violet-400">Selection criteria:</strong> minimum stake threshold, historical accuracy rate, response time metrics, geographic distribution
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div className="relative fade-in-left">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-teal-500/10 absolute -top-4 sm:-top-6 md:-top-8 -left-2 sm:-left-4">03</div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Verification &amp; Consensus</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    Selected nodes independently verify the data against specified criteria, execute verification logic, and submit cryptographic attestations. Byzantine fault-tolerant consensus mechanism aggregates results to ensure accuracy even with malicious actors.
                  </p>
                  <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-4 sm:p-6 rounded-lg border border-teal-500/20 hover:border-teal-500/50 transition-all duration-300">
                    <p className="text-xs sm:text-sm text-gray-400">
                      <strong className="text-teal-400">Consensus requires:</strong> 2/3+ node agreement. Outlier responses trigger additional verification rounds and reputation penalties
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-2xl border border-teal-500/20 flex items-center justify-center hover:shadow-[0_0_50px_rgba(20,184,166,0.2)] transition-all duration-300 fade-in-right">
                <div className="text-center float-animation" style={{animationDelay: '2s'}}>
                  <i className="ri-checkbox-multiple-line text-6xl sm:text-7xl md:text-8xl text-teal-400 opacity-50"></i>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
              <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-lime-500/10 to-emerald-500/10 rounded-2xl border border-lime-500/20 flex items-center justify-center order-2 md:order-1 hover:shadow-[0_0_50px_rgba(132,204,22,0.2)] transition-all duration-300 fade-in-left">
                <div className="text-center float-animation" style={{animationDelay: '3s'}}>
                  <i className="ri-file-shield-line text-6xl sm:text-7xl md:text-8xl text-lime-400 opacity-50"></i>
                </div>
              </div>
              <div className="relative order-1 md:order-2 fade-in-right">
                <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-lime-500/10 absolute -top-4 sm:-top-6 md:-top-8 -right-2 sm:-right-4">04</div>
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">On-Chain Proof Generation</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    Aggregated verification results are compressed into succinct cryptographic proof and committed to blockchain. Proof includes node signatures, timestamp, and verification metadata, enabling trustless verification by any party without re-executing verification.
                  </p>
                  <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-4 sm:p-6 rounded-lg border border-lime-500/20 hover:border-lime-500/50 transition-all duration-300">
                    <p className="text-xs sm:text-sm text-gray-400">
                      <strong className="text-lime-400">Proofs utilize:</strong> zero-knowledge cryptography for privacy-preserving verification when required, with full auditability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 fade-in-up">
            <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase">Protocol Features</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4">Built for Web3 Infrastructure</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-105 group scale-in" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-emerald-500/10 rounded-xl mb-4 sm:mb-6 group-hover:bg-emerald-500/20 transition-all duration-300 group-hover:scale-110">
                <i className="ri-node-tree text-3xl sm:text-4xl text-emerald-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Fully Decentralized</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                No central authority or trusted intermediaries. Node network operates permissionlessly with economic incentives ensuring honest behavior and censorship resistance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-105 group scale-in" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-emerald-500/10 rounded-xl mb-4 sm:mb-6 group-hover:bg-emerald-500/20 transition-all duration-300 group-hover:scale-110">
                <i className="ri-lock-password-line text-3xl sm:text-4xl text-emerald-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Cryptographically Secure</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                All verifications produce verifiable cryptographic proofs. Zero-knowledge techniques enable privacy-preserving verification without revealing sensitive data to nodes or observers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-105 group scale-in" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-emerald-500/10 rounded-xl mb-4 sm:mb-6 group-hover:bg-emerald-500/20 transition-all duration-300 group-hover:scale-110">
                <i className="ri-expand-diagonal-line text-3xl sm:text-4xl text-emerald-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Horizontally Scalable</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Node network scales dynamically with demand. Parallel verification processing enables thousands of concurrent verification requests without performance degradation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-105 group scale-in" style={{animationDelay: '0.4s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-emerald-500/10 rounded-xl mb-4 sm:mb-6 group-hover:bg-emerald-500/20 transition-all duration-300 group-hover:scale-110">
                <i className="ri-puzzle-line text-3xl sm:text-4xl text-emerald-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Composable &amp; Modular</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Protocol integrates seamlessly with existing Web3 infrastructure. Custom verification logic can be deployed as plugins without protocol upgrades or governance delays.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-105 group scale-in" style={{animationDelay: '0.5s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-emerald-500/10 rounded-xl mb-4 sm:mb-6 group-hover:bg-emerald-500/20 transition-all duration-300 group-hover:scale-110">
                <i className="ri-sword-line text-3xl sm:text-4xl text-emerald-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Economic Security</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Nodes stake tokens as collateral, slashable for dishonest attestations. Economic penalties exceed potential gains from malicious behavior, ensuring rational actors remain honest.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-800 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-105 group scale-in" style={{animationDelay: '0.6s'}}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-emerald-500/10 rounded-xl mb-4 sm:mb-6 group-hover:bg-emerald-500/20 transition-all duration-300 group-hover:scale-110">
                <i className="ri-open-source-line text-3xl sm:text-4xl text-emerald-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Transparent &amp; Auditable</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                All protocol logic is open source. Verification history and proof data permanently stored on-chain for public verification, audit, and dispute resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-[#1a1f35] to-[#0A0E27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 fade-in-up">
            <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase">Applications</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 sm:mt-4">Trustless Verification Across Web3</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-105 scale-in" style={{animationDelay: '0.1s'}}>
              <span className="text-emerald-400 text-xs sm:text-sm font-semibold">DeFi Protocols</span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-emerald-500/10 rounded-xl my-4 sm:my-6">
                <i className="ri-line-chart-line text-3xl sm:text-4xl text-emerald-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Price Feed Verification</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Decentralized exchanges and lending protocols verify price oracle data before executing trades or liquidations, eliminating manipulation risks and protecting user funds.
              </p>
              <a href="#" className="text-sm sm:text-base text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2 cursor-pointer">
                Learn more <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 rounded-2xl border border-teal-500/20 hover:border-teal-500/50 hover:shadow-[0_0_40px_rgba(20,184,166,0.2)] transition-all duration-300 hover:scale-105 scale-in" style={{animationDelay: '0.2s'}}>
              <span className="text-teal-400 text-xs sm:text-sm font-semibold">Oracle Networks</span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-teal-500/10 rounded-xl my-4 sm:my-6">
                <i className="ri-database-line text-3xl sm:text-4xl text-teal-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Multi-Source Aggregation</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Oracle systems verify data consistency across multiple sources, providing cryptographic proof of aggregation accuracy for smart contract consumption and dispute resolution.
              </p>
              <a href="#" className="text-sm sm:text-base text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-2 cursor-pointer">
                Learn more <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 rounded-2xl border border-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-300 hover:scale-105 scale-in" style={{animationDelay: '0.3s'}}>
              <span className="text-violet-400 text-xs sm:text-sm font-semibold">DAO Governance</span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-violet-500/10 rounded-xl my-4 sm:my-6">
                <i className="ri-government-line text-3xl sm:text-4xl text-violet-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Proposal Verification</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                DAOs verify off-chain voting results, identity credentials, and proposal execution parameters before on-chain commitment, ensuring governance integrity and preventing manipulation.
              </p>
              <a href="#" className="text-sm sm:text-base text-violet-400 hover:text-violet-300 transition-colors inline-flex items-center gap-2 cursor-pointer">
                Learn more <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 rounded-2xl border border-fuchsia-500/20 hover:border-fuchsia-500/50 hover:shadow-[0_0_40px_rgba(217,70,239,0.2)] transition-all duration-300 hover:scale-105 scale-in" style={{animationDelay: '0.4s'}}>
              <span className="text-fuchsia-400 text-xs sm:text-sm font-semibold">Gaming &amp; NFTs</span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-fuchsia-500/10 rounded-xl my-4 sm:my-6">
                <i className="ri-gamepad-line text-3xl sm:text-4xl text-fuchsia-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Asset Provenance</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Verify authenticity of off-chain game state, NFT metadata, and digital asset ownership without centralized game servers, enabling truly decentralized gaming economies.
              </p>
              <a href="#" className="text-sm sm:text-base text-fuchsia-400 hover:text-fuchsia-300 transition-colors inline-flex items-center gap-2 cursor-pointer">
                Learn more <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 rounded-2xl border border-lime-500/20 hover:border-lime-500/50 hover:shadow-[0_0_40px_rgba(132,204,22,0.2)] transition-all duration-300 hover:scale-105 scale-in" style={{animationDelay: '0.5s'}}>
              <span className="text-lime-400 text-xs sm:text-sm font-semibold">Identity Systems</span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-lime-500/10 rounded-xl my-4 sm:my-6">
                <i className="ri-shield-user-line text-3xl sm:text-4xl text-lime-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Credential Verification</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Decentralized identity protocols verify credentials, attestations, and reputation data while preserving user privacy through zero-knowledge proofs and selective disclosure.
              </p>
              <a href="#" className="text-sm sm:text-base text-lime-400 hover:text-lime-300 transition-colors inline-flex items-center gap-2 cursor-pointer">
                Learn more <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 rounded-2xl border border-sky-500/20 hover:border-sky-500/50 hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] transition-all duration-300 hover:scale-105 scale-in" style={{animationDelay: '0.6s'}}>
              <span className="text-sky-400 text-xs sm:text-sm font-semibold">Cross-Chain Bridges</span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-sky-500/10 rounded-xl my-4 sm:my-6">
                <i className="ri-links-line text-3xl sm:text-4xl text-sky-400"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Bridge Security</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                Verify cross-chain state transitions and asset transfers through decentralized verification, eliminating trusted relayers and preventing bridge exploits that have cost billions.
              </p>
              <a href="#" className="text-sm sm:text-base text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-2 cursor-pointer">
                Learn more <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Token Utility Section */}
      <section id="token" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#0A0E27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-8 sm:gap-12 md:gap-16">
            <div className="md:col-span-2 fade-in-left">
              <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase">Tokenomics</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">Protocol Token Utility</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
                Multi-functional token design aligns node incentives with protocol security and long-term sustainability.
              </p>
            </div>
            <div className="md:col-span-3 space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 fade-in-right" style={{animationDelay: '0.1s'}}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-emerald-500/10 rounded-lg flex-shrink-0">
                    <i className="ri-stack-line text-xl sm:text-2xl text-emerald-400"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Node Staking</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
                      Nodes must stake minimum token amount to participate in verification network. Stake acts as collateral, slashable for dishonest attestations or downtime, ensuring skin in the game.
                    </p>
                    <div className="text-emerald-400 text-xs sm:text-sm font-semibold">Minimum Stake: 10,000 tokens</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 rounded-xl border border-teal-500/20 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all duration-300 hover:scale-105 fade-in-right" style={{animationDelay: '0.2s'}}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-teal-500/10 rounded-lg flex-shrink-0">
                    <i className="ri-gift-line text-xl sm:text-2xl text-teal-400"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Verification Rewards</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
                      Nodes earn token rewards for accurate attestations. Reward amount proportional to stake weight and verification complexity, creating sustainable yield for honest participants.
                    </p>
                    <div className="text-teal-400 text-xs sm:text-sm font-semibold">APY Range: 8-15%</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 rounded-xl border border-violet-500/20 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105 fade-in-right" style={{animationDelay: '0.3s'}}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-violet-500/10 rounded-lg flex-shrink-0">
                    <i className="ri-government-line text-xl sm:text-2xl text-violet-400"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Protocol Governance</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
                      Token holders vote on protocol parameters, node requirements, fee structures, and upgrade proposals through on-chain governance, ensuring community-driven evolution.
                    </p>
                    <div className="text-violet-400 text-xs sm:text-sm font-semibold">1 token = 1 vote</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#161B22] to-[#1a1f2e] p-6 sm:p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-105 fade-in-right" style={{animationDelay: '0.4s'}}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-orange-500/10 rounded-lg flex-shrink-0">
                    <i className="ri-fire-line text-xl sm:text-2xl text-orange-400"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Network Fees</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
                      Applications pay verification fees in protocol tokens. Fees distributed to nodes and burned, creating deflationary pressure and aligning token value with protocol usage.
                    </p>
                    <div className="text-orange-400 text-xs sm:text-sm font-semibold">Burn Rate: 20% of fees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[#0D1117] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(16, 185, 129, 0.1) 0px, transparent 1px, transparent 2px, rgba(16, 185, 129, 0.1) 3px)',
            backgroundSize: '100% 4px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center bg-emerald-500/10 rounded-2xl mx-auto mb-6 sm:mb-8 float-animation">
            <i className="ri-github-fill text-4xl sm:text-5xl text-emerald-400"></i>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 fade-in-up">Built in the Open</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16 fade-in-up" style={{animationDelay: '0.1s'}}>
            The protocol is fully open source. All smart contracts, node client software, and cryptographic libraries are publicly auditable. We believe transparency is fundamental to trustless systems and invite the community to verify, contribute, and build upon our work.
          </p>

          <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-14 md:mb-16">
            <div className="scale-in" style={{animationDelay: '0.2s'}}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">12,000+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">GitHub Stars</div>
            </div>
            <div className="scale-in" style={{animationDelay: '0.3s'}}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400 mb-2">200+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">Contributors</div>
            </div>
            <div className="scale-in" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-400 mb-2">100%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">Test Coverage</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 md:mb-12 fade-in-up px-4" style={{animationDelay: '0.5s'}}>
            <a href={githubAccount} target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-400 to-teal-400 text-black rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-sm sm:text-base">
              <i className="ri-github-fill"></i>
              Explore Repository
            </a>
            <a href="/docs" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-400 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-400/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap text-sm sm:text-base">
              <i className="ri-file-text-line"></i>
              Read Technical Docs
            </a>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 fade-in-up" style={{animationDelay: '0.6s'}}>
            Licensed under MIT. Contributions welcome from the community
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-[#0B0F1A] border-t border-emerald-500/10 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
            <div className="col-span-2 md:col-span-1 fade-in-up">
              <div className="mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">LionXboost</span>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">Trustless verification infrastructure</p>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <Link to="/terms" className="text-gray-600 hover:text-emerald-400 transition-colors cursor-pointer">Terms</Link>
                <span className="text-gray-800">|</span>
                <Link to="/privacy" className="text-gray-600 hover:text-emerald-400 transition-colors cursor-pointer">Privacy</Link>
                <span className="text-gray-800">|</span>
                <Link to="/security" className="text-gray-600 hover:text-emerald-400 transition-colors cursor-pointer">Security</Link>
              </div>
            </div>

            <div className="fade-in-up" style={{animationDelay: '0.1s'}}>
              <h4 className="text-white font-bold uppercase text-xs sm:text-sm mb-3 sm:mb-4">Protocol</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="/docs" className="text-gray-500 hover:text-emerald-400 transition-colors text-xs sm:text-sm cursor-pointer">Documentation</a></li>
                <li><a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors text-xs sm:text-sm cursor-pointer">Whitepaper</a></li>
              </ul>
            </div>

            <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
              <h4 className="text-white font-bold uppercase text-xs sm:text-sm mb-3 sm:mb-4">Community</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href={twitterAccount} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors text-xs sm:text-sm cursor-pointer">Twitter</a></li>
                <li><a href={githubAccount} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors text-xs sm:text-sm cursor-pointer">GitHub</a></li>
              </ul>
            </div>

            <div className="fade-in-up" style={{animationDelay: '0.3s'}}>
              <h4 className="text-white font-bold uppercase text-xs sm:text-sm mb-3 sm:mb-4">Legal</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/terms" className="text-gray-500 hover:text-emerald-400 transition-colors text-xs sm:text-sm cursor-pointer">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-500 hover:text-emerald-400 transition-colors text-xs sm:text-sm cursor-pointer">Privacy Policy</Link></li>
                <li><Link to="/security" className="text-gray-500 hover:text-emerald-400 transition-colors text-xs sm:text-sm cursor-pointer">Security</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">© 2025 LionXboost. Open source under MIT license</p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
              <Link to="/terms" className="text-gray-600 hover:text-emerald-400 transition-colors cursor-pointer">Terms</Link>
              <span className="text-gray-800">|</span>
              <Link to="/privacy" className="text-gray-600 hover:text-emerald-400 transition-colors cursor-pointer">Privacy</Link>
              <span className="text-gray-800">|</span>
              <Link to="/security" className="text-gray-600 hover:text-emerald-400 transition-colors cursor-pointer">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
