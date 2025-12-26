import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../mock';
import { ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Our Services',
      subtitle: 'Experience luxury beauty treatments at Rami Arabi Beauty Salon',
      cta: 'Book This Service'
    },
    ar: {
      title: 'خدماتنا',
      subtitle: 'استمتع بعلاجات التجميل الفاخرة في صالون رامي عربي',
      cta: 'احجز هذه الخدمة'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={language === 'en' ? service.title : service.titleAr}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{language === 'en' ? service.title : service.titleAr}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 min-h-[48px]">{language === 'en' ? service.description : service.descriptionAr}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                    {language === 'en' ? service.price : service.priceAr}
                  </p>
                  <Link to="/booking">
                    <Button className="bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white">
                      {t.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
