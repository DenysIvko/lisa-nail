import { useTranslation } from '../hooks/useTranslation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Services() {
  const { t } = useTranslation();

  const manicureServices = [
    { name: t('services.manicureServices.gelFill'), price: "180,00 zł", time: "2h", note: t('services.extras') },
    { name: t('services.manicureServices.hybridManicure'), price: "150,00 zł", time: "1h 40m", note: t('services.saveUp') },
    { name: t('services.manicureServices.gelCreation'), price: "180,00 zł", time: "2h", note: t('services.extras') },
    { name: t('services.manicureServices.nailReconstruction'), price: "200,00 zł", time: "2h 30m", note: t('services.extras') },
    { name: t('services.manicureServices.manicureNoPaint'), price: "90,00 zł", time: "30m", note: t('services.extras') },
    { name: t('services.manicureServices.mensManicure'), price: "89,00 zł", time: "40m", note: t('services.extras') }
  ];

  const browsLashesServices = [
    { name: t('services.browsServices.browLaminationFull'), price: "189,00 zł", time: "1h 20m", note: t('services.saveUp') },
    { name: t('services.browsServices.browTint'), price: "80,00 zł", time: "25m", note: t('services.saveUp') },
    { name: t('services.browsServices.browTintShape'), price: "120,00 zł", time: "1h", note: t('services.saveUp') },
    { name: t('services.browsServices.browBotox'), price: "30,00 zł", time: "15m", note: t('services.saveUp') },
    { name: t('services.browsServices.browShaping'), price: "60,00 zł", time: "30m", note: t('services.saveUp') },
    { name: t('services.browsServices.lipWaxing'), price: "50,00 zł", time: "15m", note: t('services.saveUp') }
  ];

  const lashExtensionsServices = [
    { name: t('services.lashServices.lashExtension1to1'), price: "160,00 zł", time: "2h 20m", note: t('services.saveUp') },
    { name: t('services.lashServices.lashExtension2D'), price: "170,00 zł", time: "2h 40m", note: t('services.saveUp') },
    { name: t('services.lashServices.lashExtension3D'), price: "190,00 zł", time: "3h", note: t('services.saveUp') },
    { name: t('services.lashServices.lashExtension4D'), price: "200,00 zł", time: "3h 10m", note: t('services.saveUp') },
    { name: t('services.lashServices.lashExtension5D'), price: "255,00 zł", time: "3h 30m", note: t('services.saveUp') },
    { name: t('services.lashServices.lashRemoval'), price: "30,00 zł", time: "20m", note: "" }
  ];

  const ServiceSection = ({ 
    title, 
    services, 
    images 
  }: { 
    title: string; 
    services: typeof manicureServices; 
    images: string[] 
  }) => (
    <div className="mb-20">
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-lisa-blue rounded-full flex items-center justify-center mr-4">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8 5a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`${title} service ${index + 1}`}
            className="rounded-xl shadow-lg w-full h-48 object-cover" 
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="bg-lisa-gray border-0">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">{service.name}</h4>
              <p className="text-2xl font-bold text-lisa-black">{service.price}</p>
              <p className="text-sm text-gray-600 mt-2">{t('services.time')}: {service.time}</p>
              {service.note && (
                <p className={`text-xs mt-1 font-medium ${
                  service.note === t('services.saveUp') ? 'text-emerald-600' : 'text-gray-500'
                }`}>
                  {service.note}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>

        <ServiceSection
          title={t('services.manicure')}
          services={manicureServices}
          images={[
            "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
            "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
          ]}
        />

        <ServiceSection
          title={t('services.browsLashes')}
          services={browsLashesServices}
          images={[
            "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
            "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
          ]}
        />

        <ServiceSection
          title={t('services.lashExtensions')}
          services={lashExtensionsServices}
          images={[
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
            "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
            "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
          ]}
        />

        <div className="text-center mt-16">
          <Button 
            asChild
            className="bg-lisa-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <a href="https://lisanailpl.booksy.com/" target="_blank">
              {t('services.bookOnline')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
