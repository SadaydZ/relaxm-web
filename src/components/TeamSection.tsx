import React from 'react';
import AndersonImage from '../assets/Anderson.svg';
import RubenImage from '../assets/Ruben.svg';
import MelanyImage from '../assets/Melany.svg';
import ElizabethImage from '../assets/Elizabeth.svg';
import RosaImage from '../assets/Rosa.svg';

const TeamSection: React.FC = () => {
  const teamMembersGroup1 = [
    {
      name: "Anderson Elizarbe Vilcatoma",
      role: "Director Ejecutivo - CEO",
      src: AndersonImage,
      description: "Liderazgo, pensamiento crítico y capacidad para tomar decisiones."
    },
    {
      name: "Ruben Tito Zúñiga Arevalo",
      role: "Director de operaciones - COO",
      src: RubenImage,
      description: "Visión estratégica y enfoque en resultados."
    },
    {
      name: "Melany Del Castillo Paredes",
      role: "Directora de Tecnología - CTO",
      src: MelanyImage,
      description: "Desempeño en el ámbito de tecnología y documentación."
    }
  ];

  const teamMembersGroup2 = [
    {
      name: "Elizabeth Huerto Ramos",
      role: "Directora de Finanzas - CFO",
      src: ElizabethImage,
      description: "Planificar, gestionar y supervisar los recursos financieros."
    },
    {
      name: "Rosa Monzon Palomino",
      role: "Directora de Marketing - CMO",
      src: RosaImage,
      description: "Habilidades analíticas, creatividad y un enfoque estratégico."
    }
  ];

  return (
    <section id="equipo" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-b from-[#2e1065] via-[#4c1d95] to-[#2e1065]">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-400/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestro <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Equipo</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Conoce a los expertos dedicados a mejorar tu bienestar mental y emocional.
          </p>
        </div>

        {/* First Group - 3 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembersGroup1.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Card content */}
              <div className="relative glass-effect p-6 rounded-2xl transform transition-all duration-500 hover:scale-[1.02] hover:purple-glow">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-w-1 aspect-h-1 flex items-center justify-center">
                    <img
                      src={member.src}
                      alt={member.name}
                      className="w-full h-64 object-contain transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-sm text-purple-200">{member.role}</p>
                  </div>
                </div>
                <p className="text-purple-200 group-hover:text-white transition-colors duration-300">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Group - 2 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembersGroup2.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Card content */}
              <div className="relative glass-effect p-6 rounded-2xl transform transition-all duration-500 hover:scale-[1.02] hover:purple-glow">
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-w-1 aspect-h-1 flex items-center justify-center">
                    <img
                      src={member.src}
                      alt={member.name}
                      className="w-full h-64 object-contain transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-sm text-purple-200">{member.role}</p>
                  </div>
                </div>
                <p className="text-purple-200 group-hover:text-white transition-colors duration-300">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;