
'use client';

import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';
import { useEffect, useState } from 'react';

export default function CyberLandingVariant3() {
  const [showHackerSilhouette, setShowHackerSilhouette] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHackerSilhouette(true);
      setTimeout(() => setShowHackerSilhouette(false), 2500);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-purple-400 overflow-hidden relative">
      {/* Matrix Background with purple color */}
      <MatrixRain color="#a855f7" />

      {/* Hacker Silhouette Overlay - Behind content, z-5 */}
      {showHackerSilhouette && (
        <div className="fixed inset-0 z-5 pointer-events-none">
          <div className="absolute top-[330px] left-20 w-90 h-90 opacity-12 animate-pulse">
            <img 
              src="https://www.freepnglogos.com/uploads/hacker-png/hacker-ddos-protection-stop-dos-attacks-dosarrest-internet-10.png" 
              alt="" 
              className="w-full h-full object-cover filter brightness-50 contrast-200"
            />
          </div>
        </div>
      )}
      {showHackerSilhouette && (
        <div className="fixed inset-0 z-5 pointer-events-none">
          <div className="absolute top-24 right-1 w-90 h-90 opacity-10 animate-pulse">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/045/478/507/non_2x/ai-generated-hacker-in-hoodie-using-laptop-isolated-on-transparent-background-free-png.png" 
              alt="" 
              className="w-full h-full object-cover filter brightness-50 contrast-200"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative z-30 p-4">
        <div className="flex justify-center space-x-4 text-sm font-mono">
          <Link href="/" className="bg-gray-100/15 px-4 py-1 rounded-full text-[15px] font-mono font-bold text-purple-400/70 hover:text-purple-300 transition-colors">
            Main
          </Link>
          <Link href="/variant2" className="bg-gray-100/15 px-4 py-1 rounded-full text-[15px] font-mono font-bold text-purple-400/70 hover:text-purple-300 transition-colors">
            Variant 2
          </Link>
          <Link href="/variant3" className="bg-gray-100/15 px-4 py-1 rounded-full text-[15px] font-mono font-bold text-purple-400/70 hover:text-purple-300 transition-colors">
            Variant 3
          </Link>
        </div>
      </nav>

      {/* Main Layout - Both Desktop & Mobile */}
      <div className="relative z-30 min-h-screen flex items-center justify-center px-4">
        <div className="bg-black/70 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 shadow-2xl shadow-purple-500/20 max-w-md w-full floating-content-3">
          <div className="text-center space-y-6">
            
            {/* 1. Profile Photo at Top (Centered, Inside Block) */}
            <div>
              <div className="relative mx-auto w-32 h-32">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 via-green-500 to-purple-600 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                     <img
                    src="https://media.licdn.com/dms/image/v2/D4D35AQFP4FRhQ9GEWw/profile-framedphoto-shrink_200_200/B4DZV8DtPAHYAY-/0/1741543101748?e=1755435600&v=beta&t=bJyAPxiG4X5XI9N1T6YvTpYIL6wDjAy3USuNNKnImvo"
                    className="rounded-full flex items-center justify-center"
                    alt="rasm"
                  />
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2. Title Under Photo */}
            <h1 className="text-2xl font-bold text-purple-400 font-mono glitch-text-3">
              Omadbek | Official
            </h1>

            {/* 3. Online Badge Under Title */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 border border-purple-400/50 rounded-full px-5 py-[5px] bg-black/50">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-300 text-sm font-mono">ONLINE</span>
                <i className="ri-map-pin-line w-4 pb-7 h-4 text-purple-400"></i>
              </div>
            </div>

            {/* 4. Description Under Badge */}
            <p className="text-purple-300 text-base font-mono">
              Don't forget to subscribe to our channels!
            </p>

            {/* 5. Buttons Under Text */}
            <div className="space-y-3">
              {/* Coming Soon Button with Low Blur - Clear Text Behind */}
<div className="relative">
                {/* Orqada xira "Web sayt" yozuvi */}
                <div className="absolute inset-0 flex items-center justify-center cursor-not-allowed">
                  <span className="text-purple-400 font-mono text-lg md:text-xl opacity-20 blur- select-none ">
                    <i className="ri-global-line w-5 h-5 mr-2"></i>
                    Web sayt
                  </span>
                </div>

                {/* Button border va fon */}
                <div className="w-full py-3 px-6 border-2 border-purple-400/50 rounded-lg bg-black/30 relative cursor-not-allowed">
                  {/* Blur qavat: icon + text blur */}
                  <div className="flex items-center justify-center blur-sm opacity-60">
                    <i className="ri-global-line w-5 h-5 mr-2"></i>
                    <span className="text-purple-400 font-mono">Web sayt</span>
                  </div>
                </div>

                {/* Old qavatda normal button (transparent, faqat border uchun) */}
                <button className="absolute inset-0 w-full h-full border-2 border-purple-400/50 rounded-lg pointer-events-none"></button>

                {/* Badge */}
                <div className="absolute inset-0 flex items-center justify-between w-[90%] mx-auto space-x-2">
                  <span className="bg-gray-100/15 px-4 py-1 rounded-full text-[15px] font-mono font-bold text-white">
                    coming
                  </span>
                  <span className="bg-gray-100/15 px-4 py-1 rounded-full text-[15px] font-mono font-bold text-white">
                    soon
                  </span>
                </div>
              </div>



              {/* Third set of different links */}
              <Link href="https://github.com/OmadbekXusanboyev" target="_blank" className="block">
                <button className="cyber-button-3 w-full py-3 px-6 border-2 border-purple-400/50 rounded-lg bg-black/30 text-purple-400 font-mono transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/30 hover:bg-purple-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-github-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  GitHub
                </button>
              </Link>

              <Link href="https://omadbek-portfolio.vercel.app/" className="block">
                <button className="cyber-button-3 w-full py-3 px-6 border-2 border-purple-400/50 rounded-lg bg-black/30 text-purple-400 font-mono transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/30 hover:bg-purple-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-briefcase-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  Portfolio
                </button>
              </Link>

              <Link href="https://www.linkedin.com/in/xusanboyev-omadbek/" target="_blank" className="block">
                <button className="cyber-button-3 w-full py-3 px-6 border-2 border-purple-400/50 rounded-lg bg-black/30 text-purple-400 font-mono transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/30 hover:bg-purple-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-linkedin-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  LinkedIn
                </button>
              </Link>

              <Link href="https://t.me/XusanboyevOmadbek" target="_blank" className="block">
                <button className="cyber-button-3 w-full py-3 px-6 border-2 border-purple-400/50 rounded-lg bg-black/30 text-purple-400 font-mono transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/30 hover:bg-purple-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-telegram-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  Telegram
                </button>
              </Link>

              <Link href="https://t.me/KiberQoriqchiBot" className="block">
                <button className="cyber-button-3 w-full py-3 px-6 border-2 border-purple-400/50 rounded-lg bg-black/30 text-purple-400 font-mono transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-400/30 hover:bg-purple-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-shield-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  Kiber Qo'riqchi Bot
                </button>
              </Link>

              <Link href="https://www.youtube.com/@omadbek_official" target="_blank" className="block">
                <button className="cyber-button-3 w-full py-3 px-6 border-2 border-red-400/50 rounded-lg bg-black/30 text-red-400 font-mono transition-all duration-300 hover:border-red-400 hover:shadow-lg hover:shadow-red-400/30 hover:bg-red-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-youtube-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  YouTube
                </button>
              </Link>
            </div>

            {/* Footer */}
            <div className="pt-4 text-xs text-purple-600 font-mono">
              <p>© 2025 Omadbek | Official</p>
              <p className="mt-1">Ethical Hacker & Security Researcher</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .floating-content-3 {
          animation: floatContent3 9s ease-in-out infinite;
        }

        @keyframes floatContent3 {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(12px); }
          50% { transform: translateY(-12px); }
          80% { transform: translateY(6px); }
        }

        .glitch-text-3 {
          animation: glitch-3 4s infinite;
        }

        @keyframes glitch-3 {
          0%, 85%, 100% { transform: translate(0); }
          10% { transform: translate(-2px, -1px); }
          20% { transform: translate(2px, 2px); }
          30% { transform: translate(-1px, 2px); }
          40% { transform: translate(1px, -2px); }
          50% { transform: translate(-2px, 1px); }
          60% { transform: translate(1px, -1px); }
          70% { transform: translate(-1px, -1px); }
          80% { transform: translate(2px, 1px); }
        }

        .cyber-button-3 {
          position: relative;
          overflow: hidden;
        }

        .cyber-button-3::before {
          content: '';
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, transparent, rgba(168, 85, 247, 0.2), transparent);
          transition: top 0.8s ease;
        }

        .cyber-button-3:hover::before {
          top: 100%;
        }

        .low-blur {
          filter: blur(0.5px);
        }

        @media (min-width: 768px) {
          .floating-content-3 {
            max-width: 28rem;
          }
        }
      `}</style>
    </div>
  );
}
