import React from 'react';
import HeartRateAnimation from './HeartRateAnimation';
import logo from '../assets/logo.svg';

const HeroSection: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('funciones');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-400/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Reduce tu estrés,<br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              mejora tu vida
            </span>
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Una aplicación diseñada para ayudarte a manejar el estrés y encontrar la calma en tu día a día
          </p>
          <div className="flex flex-col items-center">
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 py-3 bg-gradient-to-b from-black/50 via-black/70 to-black/90 backdrop-blur-xl text-white font-medium rounded-full hover:bg-purple-700 transform hover:scale-105 transition-all duration-200"
              >
                Ver demo
              </a>
              <button 
                onClick={scrollToFeatures}
                className="px-8 py-3 bg-transparent text-purple-300 font-medium rounded-full border-2 border-purple-500/30 hover:border-purple-500 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                Más información
              </button>
            </div>
            <img src={logo} alt="Logo" className="size-40 object-contain" />
          </div>
        </div>
        <HeartRateAnimation />
      </div>
      <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
            Próximamente <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Disponible</span>
          </h2>
            <div className="flex justify-center items-center space-x-6">
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-[45px] w-auto opacity-60 hover:opacity-100 transition-opacity cursor-not-allowed"
              />
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-[60px] w-auto opacity-60 hover:opacity-100 transition-opacity cursor-not-allowed"
              />
            </div>
          </div>
    </section>
  );
};

export default HeroSection;