import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, Clock, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { useLanguage } from '../context/LanguageContext';
import { services, team, testimonials } from '../mock';

const Home = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      hero: {
        title: 'Luxury Beauty Experience',
        subtitle: 'in the Heart of Dubai',
        description: 'Transform your look with expert styling, coloring, and spa services at Dubai\'s premier beauty salon',
        cta: 'Book Your Appointment',
        cta2: 'Explore Services'
      },
      features: [
        { icon: Award, title: 'Expert Stylists', desc: 'Lebanese professionals with 15+ years experience' },
        { icon: Sparkles, title: 'Premium Services', desc: 'Hair, makeup, nails, and spa treatments' },
        { icon: Clock, title: 'Flexible Hours', desc: 'Open daily from 10:30 AM to 9:00 PM' }
      ],
      services: {
        title: 'Our Services',
        subtitle: 'Discover Excellence',
        cta: 'View All Services'
      },
      team: {
        title: 'Meet Our Team',
        subtitle: 'Expert Professionals'
      },
      testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Client Reviews'
      },
      stats: [
        { number: '15+', label: 'Years Experience' },
        { number: '10,000+', label: 'Happy Clients' },
        { number: '4.8', label: 'Average Rating' },
        { number: '50+', label: 'Services Offered' }
      ],
      cta: {
        title: 'Ready to Transform Your Look?',
        subtitle: 'Book your appointment today and experience luxury beauty services',
        button: 'Book Now'
      }
    },
    ar: {
      hero: {
        title: 'تجربة تجميل فاخرة',
        subtitle: 'في قلب دبي',
        description: 'غير إطلالتك مع خدمات التصفيف والصبغ والسبا المتخصصة في أفضل صالون تجميل في دبي',
        cta: 'احجز موعدك',
        cta2: 'استكشف الخدمات'
      },
      features: [
        { icon: Award, title: 'مصففون خبراء', desc: 'محترفون لبنانيون بخبرة 15+ عامًا' },
        { icon: Sparkles, title: 'خدمات متميزة', desc: 'شعر ومكياج وأظافر وسبا' },
        { icon: Clock, title: 'ساعات مرنة', desc: 'مفتوح يوميًا من 10:30 ص إلى 9:00 م' }
      ],
      services: {
        title: 'خدماتنا',
        subtitle: 'اكتشف التميز',
        cta: 'عرض جميع الخدمات'
      },
      team: {
        title: 'قابل فريقنا',
        subtitle: 'محترفون خبراء'
      },
      testimonials: {
        title: 'آراء عملائنا',
        subtitle: 'تقييمات العملاء'
      },
      stats: [
        { number: '15+', label: 'سنوات الخبرة' },
        { number: '10,000+', label: 'عميل سعيد' },
        { number: '4.8', label: 'متوسط التقييم' },
        { number: '50+', label: 'خدمة متاحة' }
      ],
      cta: {
        title: 'هل أنت مستعد لتغيير إطلالتك؟',
        subtitle: 'احجز موعدك اليوم واستمتع بخدمات التجميل الفاخرة',
        button: 'احجز الآن'
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-rose-900/30"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {t.hero.title}
              <br />
              <span className="bg-gradient-to-r from-rose-400 to-pink-600 bg-clip-text text-transparent">
                {t.hero.subtitle}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/booking">
                <Button size="lg" className="bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white text-lg px-8 py-6">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
                  {t.hero.cta2}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-rose-400">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600">{t.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Card key={service.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={language === 'en' ? service.title : service.titleAr}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{language === 'en' ? service.title : service.titleAr}</h3>
                  <p className="text-gray-600 mb-4">{language === 'en' ? service.description : service.descriptionAr}</p>
                  <p className="text-rose-500 font-semibold">{language === 'en' ? service.price : service.priceAr}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white">
                {t.services.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.team.title}</h2>
            <p className="text-xl text-gray-600">{t.team.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={language === 'en' ? member.name : member.nameAr}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-1">{language === 'en' ? member.name : member.nameAr}</h3>
                  <p className="text-rose-500 text-sm mb-3">{language === 'en' ? member.position : member.positionAr}</p>
                  <p className="text-gray-600 text-sm">{language === 'en' ? member.bio : member.bioAr}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
            <p className="text-xl text-gray-600">{t.testimonials.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{language === 'en' ? testimonial.comment : testimonial.commentAr}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{language === 'en' ? testimonial.name : testimonial.nameAr}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <Link to="/booking">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-6">
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
