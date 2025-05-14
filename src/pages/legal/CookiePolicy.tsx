import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';

const CookiePolicy: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="min-h-screen py-20 relative overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BackButton />
          <h1 className="text-4xl font-bold text-white mb-8">Política de Cookies</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">1. ¿Qué son las Cookies?</h2>
              <p className="text-purple-200 mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestra aplicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">2. Tipos de Cookies que Utilizamos</h2>
              <div className="text-purple-200 mb-4">
                <h3 className="text-xl font-semibold mb-2">Cookies Esenciales</h3>
                <p className="mb-4">Necesarias para el funcionamiento básico de la aplicación.</p>
                
                <h3 className="text-xl font-semibold mb-2">Cookies de Rendimiento</h3>
                <p className="mb-4">Nos ayudan a entender cómo utilizas la aplicación.</p>
                
                <h3 className="text-xl font-semibold mb-2">Cookies de Funcionalidad</h3>
                <p className="mb-4">Permiten recordar tus preferencias y personalización.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">3. Control de Cookies</h2>
              <p className="text-purple-200 mb-4">
                Puedes controlar y/o eliminar las cookies según desees:
              </p>
              <ul className="list-disc list-inside text-purple-200 mb-4">
                <li>Configurar tu navegador para rechazar cookies</li>
                <li>Eliminar cookies existentes</li>
                <li>Configurar preferencias en la aplicación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">4. Más Información</h2>
              <p className="text-purple-200">
                Para más información sobre cómo utilizamos las cookies, contáctanos a través de nuestro formulario de contacto.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;