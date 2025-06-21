import { useTranslation } from '../hooks/useTranslation';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export default function SEOHead({ title, description, keywords, canonical }: SEOHeadProps) {
  const { t, language } = useTranslation();
  
  const siteTitle = title || t('seo.title');
  const siteDescription = description || t('seo.description');
  const siteKeywords = keywords || t('seo.keywords');
  const canonicalUrl = canonical || `https://lisanail.pl/${language === 'pl' ? '' : language}`;

  // Create favicon SVG from the fox logo concept
  const faviconSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23000'/%3E%3Cpath d='M32 12c-6 0-11 2.5-14.5 6.5-2 2-3 4.5-3 7.5 0 5.5 3.5 10 8.5 12.5l-1.5 10c-0.5 5.5 1.5 10.5 5.5 14 2 1.5 4.5 2.5 7 2.5s5-1 7-2.5c4-3.5 6-8.5 5.5-14l-1.5-10c5-2.5 8.5-7 8.5-12.5 0-3-1-5.5-3-7.5-3.5-4-8.5-6.5-14.5-6.5zm0 6c3.5 0 6.5 1.5 8.5 3.5 1.5 1.5 2 2.5 2 4.5 0 3.5-2 6.5-5 8l-2 1.5-0.5 2-1.5 12c0 3-1.5 5.5-3.5 7-1 0.5-2 1.5-3.5 1.5s-2.5-1-3.5-1.5c-2-1.5-3.5-4-3.5-7l-1.5-12-0.5-2-2-1.5c-3-1.5-5-4.5-5-8 0-2 0.5-3 2-4.5 2-2 5-3.5 8.5-3.5z' fill='%23fff'/%3E%3C/svg%3E`;

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href={faviconSvg} />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://lisanail.pl/og-image.jpg" />
      <meta property="og:locale" content={language === 'pl' ? 'pl_PL' : language === 'uk' ? 'uk_UA' : language === 'ru' ? 'ru_RU' : 'en_US'} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content="https://lisanail.pl/og-image.jpg" />
      
      {/* Hreflang */}
      <link rel="alternate" hrefLang="pl" href="https://lisanail.pl" />
      <link rel="alternate" hrefLang="uk" href="https://lisanail.pl/uk" />
      <link rel="alternate" hrefLang="en" href="https://lisanail.pl/en" />
      <link rel="alternate" hrefLang="ru" href="https://lisanail.pl/ru" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          "name": "Lisa Nail",
          "description": siteDescription,
          "url": "https://lisanail.pl",
          "telephone": "+48790336362",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Warszawa",
            "addressCountry": "PL"
          },
          "openingHours": [
            "Mo-Fr 09:00-20:00",
            "Sa 09:00-18:00"
          ],
          "sameAs": [
            "https://www.instagram.com/lisa.nail.pl",
            "https://www.facebook.com/share/16RkNdJEXd/?mibextid=wwXIfr",
            "https://lisanailpl.booksy.com/"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Lisa Nail Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Manicure hybrydowy"
                },
                "price": "150",
                "priceCurrency": "PLN"
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Przedłużanie rzęs 1:1"
                },
                "price": "160",
                "priceCurrency": "PLN"
              }
            ]
          }
        })}
      </script>
    </>
  );
}
