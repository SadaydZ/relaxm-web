import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import HeartRateAnimation from './HeartRateAnimation';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isHeartAnimating, setIsHeartAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isLegalPage = location.pathname.startsWith('/legal/');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleLogoClick = () => {
    if (isLegalPage) return;
    
    setIsHeartAnimating(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.3 },
      colors: ['#c084fc', '#a855f7', '#7e22ce']
    });
    setTimeout(() => setIsHeartAnimating(false), 1000);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/50 via-black/70 to-black/90 backdrop-blur-xl`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-800/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo for mobile */}
          <div className="flex-1 lg:hidden">
            {!isLegalPage && (
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-purple-200 hover:text-white p-2 -ml-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            )}
          </div>

          {/* Centered Logo for mobile */}
          <div className="flex-1 flex justify-center lg:hidden">
            <div 
              className={`flex items-center ${!isLegalPage ? 'cursor-pointer' : 'cursor-default'}`}
              onClick={handleLogoClick}
            >
              <Heart 
                className={`h-8 w-8 text-purple-400 ${
                  isHeartAnimating ? 'animate-ping' : 'animate-pulse'
                }`}
              />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                RelaxmLife
              </span>
            </div>
          </div>

          <div className="flex-1 lg:hidden"></div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="w-32 h-16">
              <HeartRateAnimation minimal={true} />
            </div>

            <div className="flex items-center space-x-8">
              {isLegalPage ? (
                <p className="text-purple-200">Por favor, lee atentamente el siguiente documento legal</p>
              ) : (
                <>
                  <NavLink href="#funciones">Funciones</NavLink>
                  <NavLink href="#servicios">Servicios</NavLink>
                  <button 
                    onClick={handleLogoClick}
                    className="flex items-center px-4 focus:outline-none"
                  >
                    <Heart 
                      className={`h-8 w-8 text-purple-400 ${
                        isHeartAnimating ? 'animate-ping' : 'animate-pulse'
                      }`}
                    />
                    <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      RelaxmLife
                    </span>
                  </button>
                  <NavLink href="#testimonios">Testimonios</NavLink>
                  <NavLink href="#equipo">Equipo</NavLink>
                </>
              )}
            </div>

            <div className="w-32 h-16">
              <HeartRateAnimation minimal={true} />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {!isLegalPage && (
          <div 
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen 
                ? 'max-h-64 opacity-100' 
                : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          >
            <div className="py-2 space-y-1">
              <MobileNavLink href="#funciones" onClick={() => setIsMobileMenuOpen(false)}>
                Funciones
              </MobileNavLink>
              <MobileNavLink href="#servicios" onClick={() => setIsMobileMenuOpen(false)}>
                Servicios
              </MobileNavLink>
              <MobileNavLink href="#testimonios" onClick={() => setIsMobileMenuOpen(false)}>
                Testimonios
              </MobileNavLink>
              <MobileNavLink href="#equipo" onClick={() => setIsMobileMenuOpen(false)}>
                Equipo
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="relative font-medium text-purple-200 hover:text-white transition-colors duration-200 px-3 py-2"
    >
      {children}
    </a>
  );
};

const MobileNavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-4 py-2 text-purple-200 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default Navbar;