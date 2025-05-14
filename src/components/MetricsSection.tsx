import React, { useState } from 'react';
import HeartRateAnimation from './HeartRateAnimation';

const MetricsSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('diario');
  
  return (
    <section id="metricas" className="py-20 bg-white relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-300/10 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-300/10 rounded-full filter blur-3xl animate-blob animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tus <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">Métricas</span> de Salud
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualiza y analiza tus datos de salud para tomar decisiones informadas sobre tu bienestar.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 md:p-8">
          <div className="flex justify-center mb-8 space-x-2 bg-gray-100 p-1 rounded-lg w-fit mx-auto">
            <TabButton 
              label="Diario" 
              active={selectedTab === 'diario'} 
              onClick={() => setSelectedTab('diario')} 
            />
            <TabButton 
              label="Semanal" 
              active={selectedTab === 'semanal'} 
              onClick={() => setSelectedTab('semanal')} 
            />
            <TabButton 
              label="Mensual" 
              active={selectedTab === 'mensual'} 
              onClick={() => setSelectedTab('mensual')} 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-xl">
              <HeartRateAnimation />
            </div>
            
            <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-700 mb-6">Actividad Diaria</h3>
              <div className="space-y-6">
                <MetricBar label="Pasos" value={75} target="10,000" current="7,532" />
                <MetricBar label="Calorías Activas" value={65} target="600" current="392" />
                <MetricBar label="Minutos de Ejercicio" value={40} target="60" current="24" />
                <MetricBar label="Km Recorridos" value={80} target="5.0" current="4.1" />
              </div>
            </div>
            
            <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Sueño</h3>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm">Horas dormidas anoche</p>
                  <p className="text-3xl font-bold text-blue-600">7h 24m</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 text-sm">Calidad del sueño</p>
                  <p className="text-xl font-semibold text-emerald-500">Buena</p>
                </div>
              </div>
              <div className="h-20 bg-gray-100 rounded-lg flex items-end overflow-hidden">
                <div className="h-14 w-[15%] bg-indigo-200 rounded-tl-lg rounded-tr-lg"></div>
                <div className="h-20 w-[35%] bg-indigo-400 border-r border-gray-100"></div>
                <div className="h-16 w-[40%] bg-indigo-600 border-r border-gray-100"></div>
                <div className="h-10 w-[10%] bg-indigo-300 rounded-tr-lg"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>11pm</span>
                <span>2am</span>
                <span>5am</span>
                <span>7am</span>
              </div>
            </div>
            
            <div className="bg-gray-50/80 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Nutrición</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-600 text-sm">Calorías</p>
                  <p className="text-2xl font-bold text-gray-800">1,842</p>
                  <p className="text-sm text-amber-500">2,200 objetivo</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-600 text-sm">Agua</p>
                  <p className="text-2xl font-bold text-gray-800">1.2 L</p>
                  <p className="text-sm text-blue-500">2.0 L objetivo</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold">25%</span>
                  </div>
                  <p className="text-sm mt-2 text-gray-600">Proteínas</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border-4 border-emerald-500 flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold">45%</span>
                  </div>
                  <p className="text-sm mt-2 text-gray-600">Carbohidratos</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border-4 border-amber-500 flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold">30%</span>
                  </div>
                  <p className="text-sm mt-2 text-gray-600">Grasas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
        active 
          ? 'bg-white shadow-sm text-blue-600' 
          : 'text-gray-500 hover:text-gray-700'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

interface MetricBarProps {
  label: string;
  value: number;
  target: string;
  current: string;
}

const MetricBar: React.FC<MetricBarProps> = ({ label, value, target, current }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-600 text-sm">{label}</span>
        <span className="text-gray-600 text-sm">{current} / {target}</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MetricsSection;