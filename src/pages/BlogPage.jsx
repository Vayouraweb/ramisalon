import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts } from '../mock';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Beauty Blog',
      subtitle: 'Tips, trends, and expert advice from our professionals',
      readMore: 'Read More'
    },
    ar: {
      title: 'مدونة التجميل',
      subtitle: 'نصائح وصيحات ومشورة من محترفينا',
      readMore: 'اقرأ المزيد'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={language === 'en' ? post.title : post.titleAr}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-rose-400 to-pink-600 text-white text-sm rounded-full">
                    {language === 'en' ? post.category : post.categoryAr}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {language === 'en' ? post.title : post.titleAr}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {language === 'en' ? post.excerpt : post.excerptAr}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-rose-400 group-hover:to-pink-600 group-hover:text-white group-hover:border-0 transition-all duration-300"
                >
                  {t.readMore}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
