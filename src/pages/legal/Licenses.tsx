import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';

const Licenses: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-white mb-8">Licencias</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">1. Licencia de Usuario Final</h2>
              <p className="text-purple-200 mb-4">
                VidaSana te otorga una licencia limitada, no exclusiva y no transferible para usar la aplicación de acuerdo con estos términos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">2. Restricciones de Uso</h2>
              <p className="text-purple-200 mb-4">No está permitido:</p>
              <ul className="list-disc list-inside text-purple-200 mb-4">
                <li>Copiar o modificar la aplicación</li>
                <li>Realizar ingeniería inversa</li>
                <li>Distribuir o vender el acceso a la aplicación</li>
                <li>Usar la aplicación para fines ilegales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">3. Software de Terceros</h2>
              <p className="text-purple-200 mb-4">
                VidaSana utiliza los siguientes componentes de código abierto:
              </p>
              <ul className="list-disc list-inside text-purple-200 mb-4">
                <li>React - MIT License</li>
                <li>Tailwind CSS - MIT License</li>
                <li>Lucide Icons - ISC License</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">4. Propiedad Intelectual</h2>
              <p className="text-purple-200">
                Todos los derechos, títulos e intereses en y sobre VidaSana, incluyendo todos los derechos de propiedad intelectual, son y permanecerán propiedad exclusiva de VidaSana y sus licenciantes.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Licenses;