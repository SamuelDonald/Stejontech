import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-tech-green/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-tech-green to-cyan rounded-lg glow-cyan-hover transition-all duration-300 flex items-center justify-center">
                <span className="text-beige font-bold text-xl">S</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan to-tech-green rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-beige group-hover:text-cyan transition-colors">
                STEJON
              </div>
              <div className="text-xs text-tan">Integrated Services</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-tech-green text-cyan glow-cyan'
                    : 'text-beige hover:text-cyan hover:bg-tech-green/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('admin')}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan to-tech-green text-dark-bg rounded-lg glow-cyan-hover transition-all duration-300 hover:scale-105"
            >
              Admin
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-cyan hover:bg-tech-green/50 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-card border-t border-tech-green/30">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-tech-green text-cyan'
                    : 'text-beige hover:bg-tech-green/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('admin');
                setIsMenuOpen(false);
              }}
              className="w-full px-4 py-3 bg-gradient-to-r from-cyan to-tech-green text-dark-bg rounded-lg transition-all duration-300"
            >
              Admin Dashboard
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
