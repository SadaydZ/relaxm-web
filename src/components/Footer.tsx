import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient and blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90 backdrop-blur-xl"></div>
      
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-800/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Heart className="h-8 w-8 text-purple-500 animate-pulse" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Relaxm Life
              </span>
            </div>
            <p className="text-purple-200 mb-4">
              Monitoreando tu salud,<br/>mejorando tu vida.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <SocialIcon type="facebook" />
              <SocialIcon type="twitter" />
              <SocialIcon type="instagram" />
              <SocialIcon type="youtube" />
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-white">Empresa</h3>
            <ul className="space-y-2">
              <FooterLink href="#acerca">Acerca de</FooterLink>
              <FooterLink href="#equipo">Equipo</FooterLink>
              <FooterLink href="#carreras">Carreras</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
              <FooterLink href="#prensa">Prensa</FooterLink>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="/legal/terms">Términos y Condiciones</FooterLink>
              <FooterLink href="/legal/privacy">Política de Privacidad</FooterLink>
              <FooterLink href="/legal/cookies">Política de Cookies</FooterLink>
              <FooterLink href="/legal/licenses">Licencias</FooterLink>
              <FooterLink href="#contacto">Contacto</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-900/50 pt-8 mt-8 text-center">
          <p className="text-purple-300">&copy; 2025 Relaxm Life. Todos los derechos reservados.</p>
          <p className="text-purple-300 mt-2">
            Diseñado con <span className="text-purple-500">♥</span> para tu bienestar
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-purple-300 hover:text-purple-400 transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
};

interface SocialIconProps {
  type: 'facebook' | 'twitter' | 'instagram' | 'youtube';
}

const SocialIcon: React.FC<SocialIconProps> = ({ type }) => {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-800/50 transition-colors duration-200"
    >
      {type === 'facebook' && (
        <svg className="w-5 h-5 fill-current text-purple-300" viewBox="0 0 24 24">
          <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.5h-4.33c-3.28,0-5.37,1.73-5.37,4.47v2.5H5.5v4h3.3v12h5.7v-12h4.97L19.5,7.46H18.77z" />
        </svg>
      )}
      {type === 'twitter' && (
        <svg className="w-5 h-5 fill-current text-purple-300" viewBox="0 0 24 24">
          <path d="M23.44,4.83c-0.8,0.37-1.66,0.61-2.58,0.73c0.93-0.56,1.64-1.44,1.98-2.49c-0.87,0.52-1.83,0.89-2.85,1.09C18.94,3.05,17.62,2.5,16.19,2.5c-2.76,0-4.99,2.25-4.99,5.04c0,0.4,0.04,0.78,0.13,1.15C7.49,8.45,4.14,6.49,1.67,3.6c-0.43,0.74-0.68,1.58-0.68,2.5c0,1.75,0.89,3.29,2.24,4.19c-0.82-0.02-1.59-0.25-2.27-0.63c0,0.02,0,0.04,0,0.06c0,2.44,1.73,4.48,4.02,4.94c-0.42,0.12-0.86,0.18-1.32,0.18c-0.32,0-0.64-0.03-0.95-0.09c0.64,2,2.49,3.46,4.68,3.51c-1.71,1.35-3.87,2.15-6.21,2.15c-0.4,0-0.8-0.02-1.19-0.07c2.22,1.43,4.85,2.26,7.69,2.26c9.23,0,14.27-7.69,14.27-14.36c0-0.22-0.01-0.44-0.02-0.65C22.06,6.53,22.83,5.76,23.44,4.83z" />
        </svg>
      )}
      {type === 'instagram' && (
        <svg className="w-5 h-5 fill-current text-purple-300" viewBox="0 0 24 24">
          <path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07c3.252,0.148,4.771,1.691,4.919,4.919c0.058,1.265,0.069,1.645,0.069,4.849c0,3.205-0.012,3.584-0.069,4.849c-0.149,3.225-1.664,4.771-4.919,4.919c-1.266,0.058-1.644,0.07-4.85,0.07c-3.204,0-3.584-0.012-4.849-0.07c-3.26-0.149-4.771-1.699-4.919-4.92c-0.058-1.265-0.07-1.644-0.07-4.849c0-3.204,0.013-3.583,0.07-4.849c0.149-3.227,1.664-4.771,4.919-4.919c1.266-0.057,1.645-0.069,4.849-0.069zm0-2.163c-3.259,0-3.667,0.014-4.947,0.072c-4.358,0.2-6.78,2.618-6.98,6.98c-0.059,1.281-0.073,1.689-0.073,4.948c0,3.259,0.014,3.668,0.072,4.948c0.2,4.358,2.618,6.78,6.98,6.98c1.281,0.058,1.689,0.072,4.948,0.072c3.259,0,3.668-0.014,4.948-0.072c4.354-0.2,6.782-2.618,6.979-6.98c0.059-1.28,0.073-1.689,0.073-4.948c0-3.259-0.014-3.667-0.072-4.947c-0.196-4.354-2.617-6.78-6.979-6.98c-1.281-0.059-1.69-0.073-4.949-0.073zm0,5.838c-3.403,0-6.162,2.759-6.162,6.162s2.759,6.163,6.162,6.163s6.162-2.759,6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0,10.162c-2.209,0-4-1.79-4-4c0-2.209,1.791-4,4-4s4,1.791,4,4c0,2.21-1.791,4-4,4zm6.406-11.845c-0.796,0-1.441,0.645-1.441,1.44s0.645,1.44,1.441,1.44c0.795,0,1.439-0.645,1.439-1.44s-0.644-1.44-1.439-1.44z" />
        </svg>
      )}
      {type === 'youtube' && (
        <svg className="w-5 h-5 fill-current text-purple-300" viewBox="0 0 24 24">
          <path d="M19.615,3.184c-3.604-0.246-11.631-0.245-15.23,0C0.488,3.45,0.112,5.23,0,12c0.112,6.77,0.488,8.549,4.385,8.816c3.6,0.245,11.626,0.246,15.23,0C23.512,20.55,23.888,18.77,24,12C23.888,5.23,23.512,3.45,19.615,3.184z M9.6,15.998V8.002l6.399,3.998L9.6,15.998z" />
        </svg>
      )}
    </a>
  );
};

export default Footer;