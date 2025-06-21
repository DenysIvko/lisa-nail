import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-lisa-black rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-3.2 0-6 1.2-8 3.2-1.2 1.2-2 2.8-2 4.8 0 3.2 2 6 4.8 7.2l-0.8 6c-0.4 3.2 0.8 6 3.2 8 1.2 0.8 2.4 1.2 4 1.2s2.8-0.4 4-1.2c2.4-2 3.6-4.8 3.2-8l-0.8-6c2.8-1.2 4.8-4 4.8-7.2 0-2-0.8-3.6-2-4.8-2-2-4.8-3.2-8-3.2zm0 3.2c2 0 3.6 0.8 4.8 2 0.8 0.8 1.2 1.6 1.2 2.8 0 2-1.2 3.6-2.8 4.4l-1.2 0.8-0.4 1.2-0.8 6.8c0 1.6-0.8 3.2-2 4-0.8 0.4-1.2 0.8-2 0.8s-1.2-0.4-2-0.8c-1.2-0.8-2-2.4-2-4l-0.8-6.8-0.4-1.2-1.2-0.8c-1.6-0.8-2.8-2.4-2.8-4.4 0-1.2 0.4-2 1.2-2.8 1.2-1.2 2.8-2 4.8-2z"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-wide">LISA NAIL</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium hover:text-gray-600 transition-colors"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>
          
          {/* Language Switcher & CTA */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button 
              asChild
              className="bg-lisa-black text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <a href="https://lisanailpl.booksy.com/" target="_blank">
                {t('nav.book')}
              </a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-2">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-sm font-medium hover:text-gray-600 transition-colors"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
