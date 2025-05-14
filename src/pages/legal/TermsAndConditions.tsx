import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';

const TermsAndConditions: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-white mb-8">Términos y Condiciones</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-purple-200 mb-4">
                Al acceder y utilizar VidaSana, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestra aplicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">2. Uso del Servicio</h2>
              <p className="text-purple-200 mb-4">
                VidaSana es una aplicación diseñada para el seguimiento de la salud y bienestar. No sustituye el consejo médico profesional.
              </p>
              <ul className="list-disc list-inside text-purple-200 mb-4">
                <li>Debes ser mayor de 18 años para usar el servicio</li>
                <li>La información proporcionada es solo para fines informativos</li>
                <li>No garantizamos la precisión de los datos de seguimiento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">3. Cuenta de Usuario</h2>
              <p className="text-purple-200 mb-4">
                Eres responsable de mantener la confidencialidad de tu cuenta y contraseña. Notifica inmediatamente cualquier uso no autorizado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">4. Limitación de Responsabilidad</h2>
              <p className="text-purple-200 mb-4">
                VidaSana no se hace responsable de cualquier daño directo, indirecto, incidental o consecuente que resulte del uso de la aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">5. Modificaciones</h2>
              <p className="text-purple-200">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;