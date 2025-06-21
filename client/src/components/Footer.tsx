import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();

  const services = [
    'Manicure hybrydowy',
    'Przedłużanie rzęs',
    'Stylizacja brwi',
    'Laminacja brwi',
    'Rekonstrukcja paznokci'
  ];

  return (
    <footer className="bg-lisa-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-lisa-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c-3.2 0-6 1.2-8 3.2-1.2 1.2-2 2.8-2 4.8 0 3.2 2 6 4.8 7.2l-0.8 6c-0.4 3.2 0.8 6 3.2 8 1.2 0.8 2.4 1.2 4 1.2s2.8-0.4 4-1.2c2.4-2 3.6-4.8 3.2-8l-0.8-6c2.8-1.2 4.8-4 4.8-7.2 0-2-0.8-3.6-2-4.8-2-2-4.8-3.2-8-3.2zm0 3.2c2 0 3.6 0.8 4.8 2 0.8 0.8 1.2 1.6 1.2 2.8 0 2-1.2 3.6-2.8 4.4l-1.2 0.8-0.4 1.2-0.8 6.8c0 1.6-0.8 3.2-2 4-0.8 0.4-1.2 0.8-2 0.8s-1.2-0.4-2-0.8c-1.2-0.8-2-2.4-2-4l-0.8-6.8-0.4-1.2-1.2-0.8c-1.6-0.8-2.8-2.4-2.8-4.4 0-1.2 0.4-2 1.2-2.8 1.2-1.2 2.8-2 4.8-2z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">LISA NAIL</span>
            </div>
            <p className="text-gray-300 mb-4">{t('footer.description')}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.servicesTitle')}</h3>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactTitle')}</h3>
            <div className="space-y-2 text-gray-300">
              <p>Warszawa, Polska</p>
              <p>+48 790 336 362</p>
              <p>@lisa.nail.pl</p>
              <a 
                href="https://lisanailpl.booksy.com/" 
                target="_blank"
                className="text-white hover:text-gray-300 transition-colors"
              >
                lisanailpl.booksy.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Lisa Nail. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
