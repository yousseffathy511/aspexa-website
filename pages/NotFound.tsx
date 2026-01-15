import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, AlertTriangle, Terminal } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
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

  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const handleGoBack = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-24 relative overflow-hidden">
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
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-aspexa-red/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-white/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Main 404 Text with Glitch Effect */}
        <div className="mb-6 sm:mb-8 relative">
          <h1
            className="text-[120px] sm:text-[180px] md:text-[220px] lg:text-[280px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-aspexa-red to-red-900 select-none relative"
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
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="relative">
            <AlertTriangle className="w-12 h-12 sm:w-16 sm:h-16 text-aspexa-red animate-pulse" />
            <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 border-2 border-aspexa-red rounded-full animate-ping" />
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 uppercase tracking-tight px-4">
          <span className="text-white">Page Not</span>{' '}
          <span className="text-aspexa-red">Found</span>
        </h2>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          The page you're looking for has been compromised, deleted, or never existed in our security perimeter.
        </p>

        {/* Terminal Box */}
        <div className="bg-black/60 backdrop-blur-sm border border-aspexa-red/30 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12 text-left max-w-2xl mx-auto shadow-[0_0_50px_rgba(239,68,68,0.2)]">
          <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-800">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-aspexa-red" />
            <span className="text-xs sm:text-sm font-mono text-gray-400">aspexa_terminal</span>
            <div className="ml-auto flex gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
            </div>
          </div>

          <div className="font-mono text-xs sm:text-sm space-y-1.5 sm:space-y-2 overflow-x-auto">
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
              <span className="ml-2 w-1.5 h-3 sm:w-2 sm:h-4 bg-green-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 sm:gap-3 bg-aspexa-red hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold uppercase tracking-wider text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_50px_rgba(239,68,68,0.6)]"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            Return Home
          </button>

          <button
            onClick={handleGoBack}
            className="w-full sm:w-auto group flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold uppercase tracking-wider text-sm sm:text-base transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Go Back
          </button>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs font-mono text-gray-600 uppercase tracking-widest px-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-aspexa-red rounded-full animate-pulse" />
            <span>ERROR_404</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-800" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <span>RESOURCE_MISSING</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-800" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
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
