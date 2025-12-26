import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { galleryImages } from '../mock';

const GalleryPage = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const content = {
    en: {
      title: 'Our Gallery',
      subtitle: 'Explore our work and transformations',
      all: 'All',
      categories: ['Hair Styling', 'Hair Coloring', 'Facial', 'Nails', 'Makeup', 'Salon']
    },
    ar: {
      title: 'معرضنا',
      subtitle: 'استكشف أعمالنا وتحويلاتنا',
      all: 'الكل',
      categories: ['تصفيف الشعر', 'صبغ الشعر', 'العناية بالوجه', 'الأظافر', 'المكياج', 'الصالون']
    }
  };

  const t = content[language];
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            className={selectedCategory === 'all' ? 'bg-gradient-to-r from-rose-400 to-pink-600' : ''}
            onClick={() => setSelectedCategory('all')}
          >
            {t.all}
          </Button>
          {categories.filter(cat => cat !== 'all').map((category, index) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={selectedCategory === category ? 'bg-gradient-to-r from-rose-400 to-pink-600' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {language === 'en' ? category : t.categories[index]}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <Card key={image.id} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={language === 'en' ? image.category : image.categoryAr}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold p-4">{language === 'en' ? image.category : image.categoryAr}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
