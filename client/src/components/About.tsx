import { Check } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function About() {
  const { t } = useTranslation();

  const features = [
    'about.feature1',
    'about.feature2', 
    'about.feature3',
    'about.feature4'
  ];

  return (
    <section id="about" className="py-20 bg-lisa-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('about.paragraph2')}
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{t(feature)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt={t('about.title')}
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
