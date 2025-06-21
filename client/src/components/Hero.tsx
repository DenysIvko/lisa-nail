import { useTranslation } from '../hooks/useTranslation';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-lisa-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}<br />
              <span className="text-gray-600">{t('hero.titleAccent')}</span><br />
              {t('hero.titleLocation')}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                className="bg-lisa-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <a href="https://lisanailpl.booksy.com/a" target="_blank">
                  {t('hero.cta1')}
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={scrollToServices}
                className="border border-lisa-black text-lisa-black px-8 py-4 rounded-lg font-medium hover:bg-lisa-black hover:text-white transition-colors"
              >
                {t('hero.cta2')}
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt={t('hero.title')}
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
