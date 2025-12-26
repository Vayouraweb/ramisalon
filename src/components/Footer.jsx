import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      about: 'About Us',
      aboutText: 'Luxury beauty salon in Dubai offering premium hair, makeup, nail, and spa services.',
      quickLinks: 'Quick Links',
      contact: 'Contact Info',
      hours: 'Opening Hours',
      hoursText: 'Daily: 10:30 AM - 9:00 PM',
      rights: '© 2025 Rami Arabi Beauty Salon. All rights reserved.',
      specialSection: 'Private section available for veiled women'
    },
    ar: {
      about: 'معلومات عنا',
      aboutText: 'صالون تجميل فاخر في دبي يقدم خدمات متميزة للشعر والمكياج والأظافر والسبا.',
      quickLinks: 'روابط سريعة',
      contact: 'معلومات الاتصال',
      hours: 'ساعات العمل',
      hoursText: 'يومياً: 10:30 صباحاً - 9:00 مساءً',
      rights: '© 2025 صالون رامي عربي للتجميل. جميع الحقوق محفوظة.',
      specialSection: 'يوجد قسم خاص للمحجبات'
    }
  };

  const links = [
    { name: { en: 'Home', ar: 'الرئيسية' }, path: '/' },
    { name: { en: 'Services', ar: 'الخدمات' }, path: '/services' },
    { name: { en: 'Gallery', ar: 'المعرض' }, path: '/gallery' },
    { name: { en: 'Blog', ar: 'المدونة' }, path: '/blog' },
    { name: { en: 'Contact', ar: 'اتصل بنا' }, path: '/contact' }
  ];

  const t = content[language];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-rose-400 to-pink-600 bg-clip-text text-transparent mb-4">
              {language === 'en' ? 'Rami Arabi' : 'رامي عربي'}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{t.aboutText}</p>
            <p className="text-rose-400 text-sm font-medium">{t.specialSection}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-rose-400 transition-colors duration-200 text-sm"
                  >
                    {link.name[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  {language === 'en'
                    ? 'Anantara Hotel, Business Bay, Dubai, UAE'
                    : 'فندق أنانتارا، الخليج التجاري، دبي، الإمارات'}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-400" />
                <a href="tel:+97145890555" className="text-gray-300 hover:text-rose-400 transition-colors text-sm">
                  +971 4 589 0555
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-400" />
                <a
                  href="mailto:info@ramiarabi.com"
                  className="text-gray-300 hover:text-rose-400 transition-colors text-sm"
                >
                  info@ramiarabi.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.hours}</h3>
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="w-5 h-5 text-rose-400" />
              <span className="text-gray-300 text-sm">{t.hoursText}</span>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rami.arabi.salon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/Ramiarabisalon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 hover:bg-rose-500 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
