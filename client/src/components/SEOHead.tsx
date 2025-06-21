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
  const faviconSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 10c-8 0-15 3-20 8-3 3-5 7-5 12 0 8 5 15 12 18l-2 15c-1 8 2 15 8 20 3 2 6 3 10 3s7-1 10-3c6-5 9-12 8-20l-2-15c7-3 12-10 12-18 0-5-2-9-5-12-5-5-12-8-20-8zm0 8c5 0 9 2 12 5 2 2 3 4 3 7 0 5-3 9-7 11l-3 2-1 3-2 17c0 4-2 8-5 10-2 1-3 2-5 2s-3-1-5-2c-3-2-5-6-5-10l-2-17-1-3-3-2c-4-2-7-6-7-11 0-3 1-5 3-7 3-3 7-5 12-5z' fill='%23000'/%3E%3C/svg%3E`;

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
      <meta property="og:locale" content={language === 'pl' ? 'pl_PL' : language === 'uk' ? 'uk_UA' : 'en_US'} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content="https://lisanail.pl/og-image.jpg" />
      
      {/* Hreflang */}
      <link rel="alternate" hreflang="pl" href="https://lisanail.pl" />
      <link rel="alternate" hreflang="uk" href="https://lisanail.pl/uk" />
      <link rel="alternate" hreflang="en" href="https://lisanail.pl/en" />
      
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
            "https://lisanailpl.booksy.com/a"
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
