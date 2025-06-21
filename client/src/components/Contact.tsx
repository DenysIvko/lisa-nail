import { MapPin, Phone, Instagram, Calendar, Facebook } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const { t } = useTranslation();

  const openingHours = [
    { day: 'contact.monday', hours: '09:00 - 20:00' },
    { day: 'contact.tuesday', hours: '09:00 - 20:00' },
    { day: 'contact.wednesday', hours: '09:00 - 20:00' },
    { day: 'contact.thursday', hours: '09:00 - 20:00' },
    { day: 'contact.friday', hours: '09:00 - 20:00' },
    { day: 'contact.saturday', hours: '09:00 - 18:00' },
    { day: 'contact.sunday', hours: t('contact.closed'), closed: true }
  ];

  return (
    <section id="contact" className="py-20 bg-lisa-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lisa-black rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t('contact.location')}</h4>
                    <p className="text-gray-600">{t('contact.locationValue')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lisa-black rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t('contact.phone')}</h4>
                    <a 
                      href="tel:+48790336362" 
                      className="text-gray-600 hover:text-lisa-black transition-colors"
                    >
                      +48 790 336 362
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lisa-black rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t('contact.instagram')}</h4>
                    <a 
                      href="https://www.instagram.com/lisa.nail.pl?igsh=MXVrZDdlMnpyNGM4Ng==" 
                      target="_blank"
                      className="text-gray-600 hover:text-lisa-black transition-colors"
                    >
                      @lisa.nail.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lisa-black rounded-full flex items-center justify-center">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Facebook</h4>
                    <a 
                      href="https://www.facebook.com/share/16RkNdJEXd/?mibextid=wwXIfr" 
                      target="_blank"
                      className="text-gray-600 hover:text-lisa-black transition-colors"
                    >
                      Lisa Nail
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lisa-black rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t('contact.booking')}</h4>
                    <a 
                      href="https://lisanailpl.booksy.com/" 
                      target="_blank"
                      className="text-gray-600 hover:text-lisa-black transition-colors"
                    >
                      lisanailpl.booksy.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/lisa.nail.pl?igsh=MXVrZDdlMnpyNGM4Ng==" 
                    target="_blank"
                    className="w-10 h-10 bg-lisa-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/16RkNdJEXd/?mibextid=wwXIfr" 
                    target="_blank"
                    className="w-10 h-10 bg-lisa-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://lisanailpl.booksy.com/" 
                    target="_blank"
                    className="w-10 h-10 bg-lisa-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <Calendar className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">{t('contact.hours')}</h3>
              
              <div className="space-y-4">
                {openingHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium">{t(item.day)}</span>
                    <span className={`${item.closed ? 'text-red-500 font-medium' : 'text-gray-600'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <Button 
                  asChild
                  className="w-full bg-lisa-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  <a href="https://lisanailpl.booksy.com/" target="_blank">
                    {t('contact.bookOnline')}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
