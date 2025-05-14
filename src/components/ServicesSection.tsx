import React from 'react';
import { Brain, Bell, Headphones, Mic2, LineChart, BookOpen, Book, ChevronDown } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const scrollToTeam = () => {
    const teamSection = document.getElementById('equipo');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Evaluación del Estrés",
      description: "Test diario interactivo con escala de colores para medir tus niveles de estrés.",
      features: ["Cuestionarios interactivos", "Escala visual de colores", "Resultados instantáneos"]
    },
    /*{
      icon: <Bell className="w-8 h-8 text-rose-500" />,
      title: "Alertas Automatizadas",
      description: "Recibe notificaciones personalizadas cuando detectamos niveles elevados de estrés.",
      features: ["Notificaciones push", "Recomendaciones personalizadas", "Seguimiento continuo"]
    },*/
    {
      icon: <Headphones className="w-8 h-8 text-purple-500" />,
      title: "Técnicas de Relajación",
      description: "Accede a una biblioteca completa de ejercicios de respiración y meditación.",
      features: ["Audios guiados", "Videos instructivos", "Ejercicios paso a paso"]
    },
    {
      icon: <Mic2 className="w-8 h-8 text-teal-500" />,
      title: "Voz Calmante",
      description: "Escucha voces suaves y relajantes que te guiarán en tus ejercicios.",
      features: ["Audios pregrabados", "Frases motivadoras", "Música relajante"]
    },
    {
      icon: <LineChart className="w-8 h-8 text-amber-500" />,
      title: "Seguimiento de Progreso",
      description: "Visualiza tu evolución semanal con gráficos intuitivos y consejos prácticos.",
      features: ["Gráficos interactivos", "Informes semanales", "Recomendaciones personalizadas"]
    },
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
      title: "Contenido Educativo",
      description: "Explora nuestra biblioteca de recursos sobre bienestar y salud mental.",
      features: ["Artículos especializados", "Videos explicativos", "Infografías"]
    },
    {
      icon: <Book className="w-8 h-8 text-emerald-500" />,
      title: "Diario Emocional",
      description: "Registra tus emociones diarias y descubre patrones en tu bienestar.",
      features: ["Editor personal", "Selector de emojis", "Análisis de patrones"]
    }
  ];

  return (
    <section id="servicios" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-400/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestros <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Descubre todas las herramientas que tenemos para ayudarte a manejar el estrés y mejorar tu bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-black/50 via-black/70 to-black/90 backdrop-blur-xl rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Card content */}
              <div className="relative glass-effect p-6 rounded-2xl transform transition-all duration-500 hover:scale-[1.02] hover:purple-glow">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-black/50 via-black/70 to-black/90 backdrop-blur-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-purple-200 mb-4 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li 
                      key={fIndex} 
                      className="flex items-center text-sm text-purple-300 group-hover:text-purple-200 transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 group-hover:bg-purple-300 transition-colors duration-300"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ServicesSection;