
'use client';

import Link from 'next/link';
import MatrixRain from '@/components/MatrixRain';
import { useEffect, useState } from 'react';
import Image2 from "../picture/1741543101748.jpeg"

export default function CyberLandingVariant2() {
  const [showHackerSilhouette, setShowHackerSilhouette] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHackerSilhouette(true);
      setTimeout(() => setShowHackerSilhouette(false), 2200);
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-cyan-400 overflow-hidden relative">
      {/* Matrix Background with cyan color */}
      <MatrixRain color="#00ffff" />

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
          <Link href="/" className="bg-gray-100/15 px-4 py-1 rounded-full text-[15px] font-mono font-bold text-cyan-400/70 hover:text-cyan-300 transition-colors">
            Main
          </Link>
          <Link href="/variant2" className="bg-gray-100/15 px-4 py-1 rounded-full text-[15px] font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
            Variant 2
          </Link>
          <Link href="/variant3" className="bg-gray-100/15 px-4 py-1 rounded-full text-[15px] font-mono font-bold text-cyan-400/70 hover:text-cyan-300 transition-colors">
            Variant 3
          </Link>
        </div>
      </nav>

      {/* Main Layout - Both Desktop & Mobile */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
        <div className="bg-black/70 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20 max-w-md w-full floating-content-2">
          <div className="text-center space-y-6">
            
            {/* 1. Profile Photo at Top (Centered, Inside Block) */}
            <div>
              <div className="relative mx-auto w-32 h-32">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-green-500 to-cyan-600 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <img 
                    src={Image2.src}
                    className="rounded-full flex items-center justify-center" alt="rasm" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2. Title Under Photo */}
            <h1 className="text-2xl font-bold text-cyan-400 font-mono glitch-text-2">
              Omadbek | Official
            </h1>

            {/* 3. Online Badge Under Title */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 border border-cyan-400/50 rounded-full px-4 py-[5px] bg-black/50">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-300 text-sm font-mono">ONLINE</span>
                <i className="ri-map-pin-line w-4 pb-7 h-4 text-cyan-400"></i>
              </div>
            </div>

            {/* 4. Description Under Badge */}
            <p className="text-cyan-300 text-base font-mono">
              Don't forget to subscribe to our channels!
            </p>

            {/* 5. Buttons Under Text */}
            <div className="space-y-3">
              {/* Coming Soon Button with Low Blur - Clear Text Behind */}
              <div className="relative">
                {/* Orqada xira "Web sayt" yozuvi */}
                <div className="absolute inset-0 flex items-center justify-center cursor-not-allowed">
                  <span className="text-cyan-400 font-mono text-lg md:text-xl opacity-20 blur- select-none ">
                    <i className="ri-global-line w-5 h-5 mr-2"></i>
                    Web sayt
                  </span>
                </div>

                {/* Button border va fon */}
                <div className="w-full py-3 px-6 border-2 border-cyan-400/50 rounded-lg bg-black/30 relative cursor-not-allowed">
                  {/* Blur qavat: icon + text blur */}
                  <div className="flex items-center justify-center blur-sm opacity-60">
                    <i className="ri-global-line w-5 h-5 mr-2"></i>
                    <span className="text-cyan-400 font-mono">Web sayt</span>
                  </div>
                </div>

                {/* Old qavatda normal button (transparent, faqat border uchun) */}
                <button className="absolute inset-0 w-full h-full border-2 border-cyan-400/50 rounded-lg pointer-events-none"></button>

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

              {/* Different GitHub link */}
              <Link href="https://github.com/OmadbekXusanboyev" target="_blank" className="block">
                <button className="cyber-button-2 w-full py-3 px-6 border-2 border-cyan-400/50 rounded-lg bg-black/30 text-cyan-400 font-mono transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 hover:bg-cyan-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-github-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  GitHub
                </button>
              </Link>

              <Link href="https://omadbek-portfolio.vercel.app/" className="block">
                <button className="cyber-button-2 w-full py-3 px-6 border-2 border-cyan-400/50 rounded-lg bg-black/30 text-cyan-400 font-mono transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 hover:bg-cyan-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-briefcase-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  Portfolio
                </button>
              </Link>

              <Link href="https://www.linkedin.com/in/xusanboyev-omadbek/" target="_blank" className="block">
                <button className="cyber-button-2 w-full py-3 px-6 border-2 border-cyan-400/50 rounded-lg bg-black/30 text-cyan-400 font-mono transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 hover:bg-cyan-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-linkedin-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  LinkedIn
                </button>
              </Link>

              <Link href="https://t.me/XusanboyevOmadbek" target="_blank" className="block">
                <button className="cyber-button-2 w-full py-3 px-6 border-2 border-cyan-400/50 rounded-lg bg-black/30 text-cyan-400 font-mono transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 hover:bg-cyan-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-telegram-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  Telegram
                </button>
              </Link>

              <Link href="https://t.me/KiberQoriqchiBot" className="block">
                <button className="cyber-button-2 w-full py-3 px-6 border-2 border-cyan-400/50 rounded-lg bg-black/30 text-cyan-400 font-mono transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 hover:bg-cyan-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-shield-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  Kiber Qo'riqchi Bot
                </button>
              </Link>

              <Link href="https://www.youtube.com/@omadbek_official" target="_blank" className="block">
                <button className="cyber-button-2 w-full py-3 px-6 border-2 border-red-400/50 rounded-lg bg-black/30 text-red-400 font-mono transition-all duration-300 hover:border-red-400 hover:shadow-lg hover:shadow-red-400/30 hover:bg-red-400/10 whitespace-nowrap cursor-pointer">
                  <i className="ri-youtube-line w-5 h-5 inline-flex items-center justify-center mr-2"></i>
                  YouTube
                </button>
              </Link>
            </div>

            {/* Footer */}
            <div className="pt-4 text-xs text-cyan-600 font-mono">
              <p>© 2025 Omadbek | Official</p>
              <p className="mt-1">Penetration Testing Expert</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .floating-content-2 {
          animation: floatContent2 8.5s ease-in-out infinite;
        }

        @keyframes floatContent2 {
          0%, 100% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
          60% { transform: translateY(8px); }
        }

        .glitch-text-2 {
          animation: glitch-2 3.5s infinite;
        }

        @keyframes glitch-2 {
          0%, 90%, 100% { transform: translate(0); }
          12% { transform: translate(-1px, -2px); }
          24% { transform: translate(1px, 2px); }
          36% { transform: translate(-2px, 1px); }
          48% { transform: translate(2px, -1px); }
          60% { transform: translate(-1px, 2px); }
          72% { transform: translate(1px, -2px); }
          84% { transform: translate(-2px, -1px); }
        }

        .cyber-button-2 {
          position: relative;
          overflow: hidden;
        }

        .cyber-button-2::before {
          content: '';
          position: absolute;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
          transition: right 0.7s ease;
        }

        .cyber-button-2:hover::before {
          right: 100%;
        }

        .low-blur {
          filter: blur(0.5px);
        }

        @media (min-width: 768px) {
          .floating-content-2 {
            max-width: 28rem;
          }
        }
      `}</style>
    </div>
  );
}
