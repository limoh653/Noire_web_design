import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/Loire logo.jpeg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* 2. LOGO CONTAINER */}
          {/* We use 'flex' and 'gap-3' to align the image and text nicely */}
          <div className="flex items-center gap-3 text-2xl font-bold tracking-tight text-white cursor-pointer" onClick={() => scrollToSection('home')}>
            
            {/* 3. THE CIRCULAR IMAGE */}
            <img 
              src={logo} 
              alt="Noire Web Design Logo" 
              // These are the key classes:
              className="w-12 h-12 rounded-full object-cover border border-amber-500/20 shadow-lg" 
            />
            
            {/* Keeping the text name next to the logo is a common practice */}
            <span>
              Noire<span className="text-amber-500">. Web Design</span>
            </span>
          </div>

          {/* Rest of your navigation code... */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-white transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-amber-500 text-black font-semibold rounded-sm hover:bg-amber-400 transition-colors"
            >
              Start Your Project
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-white transition-colors text-left">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-left">
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-amber-500 text-black font-semibold rounded-sm hover:bg-amber-400 transition-colors text-left"
            >
              Start Your Project
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}