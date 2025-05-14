import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="group relative mb-8 px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
    >
      {/* Button background with gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90 backdrop-blur-xl"></div>
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      {/* Button content */}
      <div className="relative flex items-center space-x-2 text-purple-200 group-hover:text-white transition-colors duration-300">
        <ArrowLeft className="w-5 h-5 transform group-hover:translate-x-[-4px] transition-transform duration-300" />
        <span>Volver</span>
      </div>
    </button>
  );
};

export default BackButton;