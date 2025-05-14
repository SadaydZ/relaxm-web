import React from 'react';
import { Activity, Heart, Moon, PieChart, Dumbbell, Zap, ChevronDown } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="funciones" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-400/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Funciones <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Principales</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Descubre las herramientas que te ayudarán a tomar el control de tu entorno y bienestar día tras día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon={<Heart className="w-8 h-8 text-purple-400" />}
            title="Monitoreo Cardíaco"
            description="Seguimiento continuo de tu ritmo cardíaco con alertas personalizadas y análisis de tendencias."
          />
          <FeatureCard
            icon={<Activity className="w-8 h-8 text-purple-400" />}
            title="Seguimiento de Actividad"
            description="Registra automáticamente tus estados de ánimo durante el día."
          />
          <FeatureCard
            icon={<Moon className="w-8 h-8 text-purple-400" />}
            title="Análisis de Patrones"
            description="Comprende tus patrones y mejora tu salud mental con recomendaciones personalizadas."
          />
          <FeatureCard
            icon={<PieChart className="w-8 h-8 text-purple-400" />}
            title="Datos Estadísticos"
            description="Seguimiento de datos semanales para mantener una rutina equilibrada."
          />
          <FeatureCard
            icon={<Dumbbell className="w-8 h-8 text-purple-400" />}
            title="Entrenamiento Guiado"
            description="Rutinas antiestrés adaptadas a tus objetivos y nivel de estrés."
          />
          <FeatureCard
            icon={<Zap className="w-8 h-8 text-purple-400" />}
            title="Gestión del Estrés"
            description="Técnicas de relajación y meditación para reducir el estrés y mejorar tu bienestar mental."
          />
        </div>

        {/* Wavy More Details Button */}
        <div className="flex justify-center">
          <button
            onClick={scrollToServices}
            className="group flex flex-col items-center bg-gradient-to-b from-black/50 via-black/70 to-black/90 backdrop-blur-xl px-8 py-4 rounded-full backdrop-blur-lg transition-all duration-500"
          >
            <span className="text-purple-200 text-lg font-medium mb-2 group-hover:text-white transition-colors">
              Más detalles
            </span>
            <div className="relative">
              <div className="absolute -inset-1 bg-purple-500/20 blur-sm rounded-full group-hover:bg-purple-400/30 transition-all duration-500"></div>
              <ChevronDown className="w-6 h-6 text-purple-300 relative z-10 animate-bounce group-hover:text-white transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative">
      {/* Hover glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-b from-black/50 via-black/70 to-black/90 backdrop-blur-xl rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      
      {/* Card content */}
      <div className="relative glass-effect p-6 rounded-2xl transform transition-all duration-500 hover:scale-[1.02] hover:purple-glow">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-black/50 via-black/70 to-black/90 backdrop-blur-xl flex items-center justify-center mb-5 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-purple-200 group-hover:text-white transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;