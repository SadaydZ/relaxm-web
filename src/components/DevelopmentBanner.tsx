import React from 'react';
import { Construction } from 'lucide-react';

const DevelopmentBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-teal-400/20 backdrop-blur-xl"></div>
      
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <Construction className="w-12 h-12 text-blue-400 animate-pulse" />
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Tu nuevo hogar digital está en desarrollo
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Estamos trabajando arduamente para traerte la mejor experiencia en el cuidado de tu salud.
            Pronto podrás acceder a todas las funcionalidades.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-blue-300">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Desarrollo Activo</span>
            </div>
            <div className="flex items-center space-x-2 text-teal-300">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
              <span>Lanzamiento Próximo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentBanner;