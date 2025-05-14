import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">1. Recopilación de Información</h2>
              <p className="text-purple-200 mb-4">
                Recopilamos información que proporcionas directamente:
              </p>
              <ul className="list-disc list-inside text-purple-200 mb-4">
                <li>Información de perfil</li>
                <li>Datos de salud y actividad física</li>
                <li>Métricas de bienestar</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">2. Uso de la Información</h2>
              <p className="text-purple-200 mb-4">
                Utilizamos tu información para:
              </p>
              <ul className="list-disc list-inside text-purple-200 mb-4">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Personalizar tu experiencia</li>
                <li>Enviar actualizaciones importantes</li>
                <li>Análisis y mejora del servicio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">3. Protección de Datos</h2>
              <p className="text-purple-200 mb-4">
                Implementamos medidas de seguridad para proteger tu información personal:
              </p>
              <ul className="list-disc list-inside text-purple-200 mb-4">
                <li>Encriptación de datos</li>
                <li>Acceso restringido a la información</li>
                <li>Monitoreo regular de seguridad</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">4. Compartir Información</h2>
              <p className="text-purple-200 mb-4">
                No vendemos ni compartimos tu información personal con terceros, excepto:
              </p>
              <ul className="list-disc list-inside text-purple-200 mb-4">
                <li>Con tu consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>Con proveedores de servicios necesarios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">5. Tus Derechos</h2>
              <p className="text-purple-200">
                Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;