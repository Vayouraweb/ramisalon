import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const { toast } = useToast();
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our team',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message'
      },
      info: {
        address: 'Visit Us',
        addressText: 'Anantara Hotel, 1st Floor, Marasi Drive, Business Bay, Dubai, UAE',
        phone: 'Call Us',
        phoneText: '+971 4 589 0555',
        email: 'Email Us',
        emailText: 'info@ramiarabi.com',
        hours: 'Opening Hours',
        hoursText: 'Daily: 10:30 AM - 9:00 PM'
      },
      success: 'Message sent successfully! We\'ll get back to you soon.',
      error: 'Please fill in all fields.'
    },
    ar: {
      title: 'اتصل بنا',
      subtitle: 'تواصل مع فريقنا',
      form: {
        name: 'اسمك',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'الموضوع',
        message: 'رسالتك',
        submit: 'إرسال الرسالة'
      },
      info: {
        address: 'زرنا',
        addressText: 'فندق أنانتارا، الطابق الأول، مرسى درايف، الخليج التجاري، دبي، الإمارات',
        phone: 'اتصل بنا',
        phoneText: '+971 4 589 0555',
        email: 'راسلنا',
        emailText: 'info@ramiarabi.com',
        hours: 'ساعات العمل',
        hoursText: 'يومياً: 10:30 ص - 9:00 م'
      },
      success: 'تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.',
      error: 'يرجى ملء جميع الحقول.'
    }
  };

  const t = content[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      toast({ title: t.error, variant: 'destructive' });
      return;
    }

    // Save message to localStorage (mock backend)
    const message = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toISOString()
    };
    
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push(message);
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    toast({ title: t.success });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">{t.form.name}</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.form.name}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">{t.form.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.form.email}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">{t.form.phone}</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md text-gray-500">+971</span>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="50 123 4567"
                    className="rounded-l-none"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">{t.form.subject}</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.form.subject}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">{t.form.message}</Label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.form.message}
                  className="w-full min-h-[150px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white"
              >
                <Send className="mr-2 w-5 h-5" />
                {t.form.submit}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t.info.address}</h3>
                  <p className="text-gray-600">{t.info.addressText}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t.info.phone}</h3>
                  <a href="tel:+97145890555" className="text-gray-600 hover:text-rose-500 transition-colors">
                    {t.info.phoneText}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t.info.email}</h3>
                  <a href="mailto:info@ramiarabi.com" className="text-gray-600 hover:text-rose-500 transition-colors">
                    {t.info.emailText}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t.info.hours}</h3>
                  <p className="text-gray-600">{t.info.hoursText}</p>
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.478374516727!2d55.27119931500838!3d25.184277583899767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69a021dfdabf%3A0xec7352e9a68c5a95!2sRami%20Arabi%20Beauty%20Salon!5e0!3m2!1sen!2sae!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rami Arabi Beauty Salon Location"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
