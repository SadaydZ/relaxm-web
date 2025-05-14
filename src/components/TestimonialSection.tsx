import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Corredora Aficionada",
      quote: "Desde que empecé a usar Relaxm Life, he mejorado mi productividad en un 15%. El seguimiento y las recomendaciones personalizadas han sido clave.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Profesional de Oficina",
      quote: "La aplicación me ha ayudado a mantenerme activo a pesar de mi estado de ánimo. Las alertas personalizadas y los ejercicios son perfectos.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4
    },
    {
      name: "Laura Martínez",
      role: "Madre y Emprendedora",
      quote: "Con Relaxm Life, finalmente logré establecer una rutina diaria saludable. Las estadísticas me motivaron a hacer cambios positivos en mis hábitos.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 3
    },
    {
      name: "Juan Pérez",
      role: "Entrenador Personal",
      quote: "Como profesional del fitness, valoro la precisión de los datos que ofrece Relaxm Life. Mis clientes pueden hacer un seguimiento detallado de su progreso.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5
    },
    {
      name: "Ana Silva",
      role: "Estudiante Universitaria",
      quote: "La función de meditación guiada me ha ayudado enormemente con el estrés de los exámenes. ¡Es como tener un instructor personal de mindfulness!",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonios" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#2e1065] via-[#4c1d95] to-[#2e1065]">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-400/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">usuarios</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Descubre cómo Relaxm Life está ayudando a miles de personas a mejorar su salud y bienestar diario.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.slice(pageIndex * 3, (pageIndex + 1) * 3).map((testimonial, index) => (
                      <TestimonialCard
                        key={index}
                        {...testimonial}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {testimonials.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-purple-900/50 text-white hover:bg-purple-800/50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-purple-900/50 text-white hover:bg-purple-800/50 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {testimonials.length > 3 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-purple-400' : 'bg-purple-800'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote, image, rating }) => {
  return (
    <div className="bg-gradient-to-b from-black/50 via-black/70 to-black/90 backdrop-blur-xl p-6 rounded-2xl shadow-md group hover:purple-glow transition-all duration-300">
      <div className="flex items-start mb-4">
        <div className="flex-shrink-0 mr-4">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-2 border-purple-500/30 group-hover:border-purple-400 transition-colors duration-300"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-purple-300">{role}</p>
        </div>
      </div>
      <p className="text-purple-200 italic group-hover:text-white transition-colors duration-300">"{quote}"</p>
      <div className="mt-4 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${star <= rating ? 'text-purple-400' : 'text-purple-900'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;