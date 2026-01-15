import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, AlertTriangle, Terminal } from 'lucide-react';

const NotFound: React.FC = () => {
  const [glitchText, setGlitchText] = useState('404');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    // Glitch effect for 404 text
    const glitchInterval = setInterval(() => {
      const glitchChars = ['4', '0', '4', '@', '#', '$', '%', '&'];
      const randomGlitch = Array(3)
        .fill(0)
        .map(() => glitchChars[Math.floor(Math.random() * glitchChars.length)])
        .join('');
      setGlitchText(randomGlitch);

      setTimeout(() => setGlitchText('404'), 100);
    }, 3000);

    // Terminal animation
    const lines = [
      '$ system.scan --target=current_page',
      '> Analyzing request...',
      '> ERROR: Page not found in registry',
      '> Status Code: 404',
      '> Recommendation: Return to safe zone',
    ];

    let currentLine = 0;
    const terminalInterval = setInterval(() => {
      if (currentLine < lines.length) {
        setTerminalLines((prev) => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(terminalInterval);
      }
    }, 400);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(terminalInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-aspexa-red/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main 404 Text with Glitch Effect */}
        <div className="mb-8 relative">
          <h1
            className="text-[180px] md:text-[280px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-aspexa-red to-red-900 select-none relative"
            style={{
              textShadow: '0 0 80px rgba(239, 68, 68, 0.5)',
            }}
          >
            {glitchText}
          </h1>

          {/* Scanline effect */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-aspexa-red/10 to-transparent"
            style={{
              animation: 'scanline 3s linear infinite',
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* Alert Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <AlertTriangle className="w-16 h-16 text-aspexa-red animate-pulse" />
            <div className="absolute inset-0 w-16 h-16 border-2 border-aspexa-red rounded-full animate-ping" />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
          <span className="text-white">Page Not</span>{' '}
          <span className="text-aspexa-red">Found</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          The page you're looking for has been compromised, deleted, or never existed in our security perimeter.
        </p>

        {/* Terminal Box */}
        <div className="bg-black/60 backdrop-blur-sm border border-aspexa-red/30 rounded-lg p-6 mb-12 text-left max-w-2xl mx-auto shadow-[0_0_50px_rgba(239,68,68,0.2)]">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
            <Terminal className="w-5 h-5 text-aspexa-red" />
            <span className="text-sm font-mono text-gray-400">aspexa_terminal</span>
            <div className="ml-auto flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>

          <div className="font-mono text-sm space-y-2">
            {terminalLines.map((line, index) => (
              <div
                key={index}
                className={`${
                  line.startsWith('$')
                    ? 'text-green-400'
                    : line.includes('ERROR')
                    ? 'text-aspexa-red'
                    : 'text-gray-300'
                }`}
                style={{
                  animation: 'fadeIn 0.3s ease-in'
                }}
              >
                {line}
              </div>
            ))}
            <div className="flex items-center">
              <span className="text-green-400">$</span>
              <span className="ml-2 w-2 h-4 bg-green-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group flex items-center gap-3 bg-aspexa-red hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_50px_rgba(239,68,68,0.6)]"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-16 flex items-center justify-center gap-8 text-xs font-mono text-gray-600 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-aspexa-red rounded-full animate-pulse" />
            <span>ERROR_404</span>
          </div>
          <div className="w-px h-4 bg-gray-800" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <span>RESOURCE_MISSING</span>
          </div>
          <div className="w-px h-4 bg-gray-800" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <span>ASPEXA_SEC</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
