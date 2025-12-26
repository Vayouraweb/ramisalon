import React, { useState } from 'react';
import { Calendar } from '../components/ui/calendar';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { useLanguage } from '../context/LanguageContext';
import { services, timeSlots } from '../mock';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail } from 'lucide-react';

const BookingPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', notes: '' });
  const { toast } = useToast();
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Book Your Appointment',
      subtitle: 'Choose your service, date, and time',
      service: 'Select Service',
      date: 'Choose Date',
      time: 'Select Time',
      details: 'Your Details',
      name: 'Full Name',
      phone: 'Phone Number',
      email: 'Email Address',
      notes: 'Special Requests (Optional)',
      submit: 'Confirm Booking',
      success: 'Booking confirmed! We\'ll contact you shortly.',
      error: 'Please fill in all required fields'
    },
    ar: {
      title: 'احجز موعدك',
      subtitle: 'اختر الخدمة والتاريخ والوقت',
      service: 'اختر الخدمة',
      date: 'اختر التاريخ',
      time: 'اختر الوقت',
      details: 'بياناتك',
      name: 'الاسم الكامل',
      phone: 'رقم الهاتف',
      email: 'البريد الإلكتروني',
      notes: 'طلبات خاصة (اختياري)',
      submit: 'تأكيد الحجز',
      success: 'تم تأكيد الحجز! سنتواصل معك قريباً.',
      error: 'يرجى ملء جميع الحقول المطلوبة'
    }
  };

  const t = content[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedService || !date || !selectedTime || !formData.name || !formData.phone || !formData.email) {
      toast({ title: t.error, variant: 'destructive' });
      return;
    }

    // Save booking to localStorage (mock backend)
    const booking = {
      id: Date.now().toString(),
      service: selectedService,
      date: date.toISOString(),
      time: selectedTime,
      ...formData,
      status: 'pending'
    };
    
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    toast({ title: t.success });
    
    // Reset form
    setSelectedService('');
    setSelectedTime('');
    setFormData({ name: '', phone: '', email: '', notes: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Service, Date, Time */}
            <div className="space-y-6">
              {/* Service Selection */}
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <CalendarIcon className="w-5 h-5 text-rose-500 mr-2" />
                  <h2 className="text-xl font-semibold">{t.service}</h2>
                </div>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder={t.service} />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {language === 'en' ? service.title : service.titleAr} - {language === 'en' ? service.price : service.priceAr}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Card>

              {/* Date Selection */}
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <CalendarIcon className="w-5 h-5 text-rose-500 mr-2" />
                  <h2 className="text-xl font-semibold">{t.date}</h2>
                </div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border mx-auto"
                />
              </Card>

              {/* Time Selection */}
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-rose-500 mr-2" />
                  <h2 className="text-xl font-semibold">{t.time}</h2>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      type="button"
                      variant={selectedTime === slot ? 'default' : 'outline'}
                      className={selectedTime === slot ? 'bg-gradient-to-r from-rose-400 to-pink-600' : ''}
                      onClick={() => setSelectedTime(slot)}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Personal Details */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center mb-6">
                  <User className="w-5 h-5 text-rose-500 mr-2" />
                  <h2 className="text-xl font-semibold">{t.details}</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t.name}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.name}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t.phone}</Label>
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
                    <Label htmlFor="email">{t.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">{t.notes}</Label>
                    <textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={t.notes}
                      className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
              </Card>

              {/* Booking Summary */}
              {selectedService && date && selectedTime && (
                <Card className="p-6 bg-gradient-to-br from-rose-50 to-pink-50">
                  <h3 className="font-semibold mb-4 text-lg">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Service:</span> {services.find(s => s.id === selectedService)?.[language === 'en' ? 'title' : 'titleAr']}</p>
                    <p><span className="font-medium">Date:</span> {date.toLocaleDateString()}</p>
                    <p><span className="font-medium">Time:</span> {selectedTime}</p>
                  </div>
                </Card>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-rose-400 to-pink-600 hover:from-rose-500 hover:to-pink-700 text-white text-lg py-6"
              >
                {t.submit}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
