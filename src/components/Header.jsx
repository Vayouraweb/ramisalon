import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Languages } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { name: { en: 'Home', ar: 'الرئيسية' }, path: '/' },
    { name: { en: 'Services', ar: 'الخدمات' }, path: '/services' },
    { name: { en: 'Gallery', ar: 'المعرض' }, path: '/gallery' },
    { name: { en: 'Blog', ar: 'المدونة' }, path: '/blog' },
    { name: { en: 'Contact', ar: 'اتصل بنا' }, path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Rami Arabi' : 'رامي عربي'}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-rose-500 ${
                  isActive(item.path)
                    ? 'text-rose-500 border-b-2 border-rose-500 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name[language]}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/rami.arabi.salon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-rose-500 transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="tel:+97145890555"
              className="flex items-center space-x-2 text-gray-600 hover:text-rose-500 transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">+971 4 589 0555</span>
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm">{language === 'en' ? 'AR' : 'EN'}</span>
            </Button>
            <Link to="/booking">
              <Button className="bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white">
                {language === 'en' ? 'Book Now' : 'احجز الآن'}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Languages className="w-4 h-4" />
              <span className="text-xs">{language === 'en' ? 'AR' : 'EN'}</span>
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-rose-500 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-rose-500 ${
                    isActive(item.path) ? 'text-rose-500' : 'text-gray-700'
                  }`}
                >
                  {item.name[language]}
                </Link>
              ))}
              <Link to="/booking" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white">
                  {language === 'en' ? 'Book Appointment' : 'احجز موعد'}
                </Button>
              </Link>
              <a
                href="tel:+97145890555"
                className="flex items-center space-x-2 text-gray-600 hover:text-rose-500 transition-colors justify-center"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">+971 4 589 0555</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
