import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

/**
 * SeoBooster component for enhancing SEO on all pages
 * This injects critical SEO elements dynamically
 */
export const SeoBooster = () => {
  // Keywords for SEO optimization based on high search volumes
  const primaryKeywords = [
    // Pokhara-focused keywords
    'iPhone price in Pokhara', 
    'Mobile shop in Pokhara',
    'Samsung mobile shop Pokhara',
    'Mobile repair Pokhara',
    'EMI mobile phones Pokhara',
    'iPhone 15 Pro Max Pokhara',
    'Samsung S24 Ultra Pokhara',
    'Best mobile store Pokhara',
    'Phone accessories shop Pokhara',
    'Mobile phone dealer Pokhara',
    'Apple service center Pokhara',
    'Second hand iPhone Pokhara',
    'Phone repair shop near me Pokhara',
    'Genuine Samsung phones Pokhara',
    'Mobile accessories Pokhara',
    
    // Nepal-focused keywords
    'iPhone price in Nepal',
    'Mobile shop in Nepal',
    'Samsung mobile shop Nepal',
    'Mobile repair Nepal',
    'EMI mobile phones Nepal',
    'iPhone 15 Pro Max Nepal',
    'Samsung S24 Ultra Nepal',
    'Buy mobile phone Nepal',
    'Phone accessories Nepal',
    'Official warranty phones Nepal',
    'Online mobile shopping Nepal',
    'Second hand iPhone Nepal',
    'Genuine Samsung phones Nepal',
    'Apple authorized dealer Nepal',
    'iPhone service center Nepal',
    
    // Mahendrapool-focused keywords
    'iPhone price in Mahendrapool',
    'Mobile shop in Mahendrapool',
    'Samsung mobile shop Mahendrapool',
    'Mobile repair Mahendrapool',
    'EMI mobile phones Mahendrapool',
    'iPhone 15 Pro Max Mahendrapool',
    'Samsung S24 Ultra Mahendrapool',
    'Phone store Mahendrapool',
    'Mobile accessories Mahendrapool',
    'Phone repair center Mahendrapool',
    'Second hand phones Mahendrapool',
    
    // Long tail keywords
    'How to buy iPhone with EMI in Pokhara',
    'Best mobile phone shop in Pokhara city center',
    'Samsung phone repair cost in Nepal',
    'iPhone screen replacement price Pokhara',
    'Where to find genuine mobile phones in Pokhara',
    'Best place to buy Samsung phone in Mahendrapool',
    'Mobile phone installment plans without credit card Nepal',
    
    // Himal Mobile Traders specific keywords
    'Himal Mobile Traders Pokhara',
    'Himal Mobile Traders Mahendrapool',
    'Himal Mobile phone shop',
    'Himal Mobile contact number',
    'Himal Mobile Traders reviews',
    'Himal Mobile Traders iPhone dealer',
    'Himal Mobile Traders EMI options',
    'Himal Mobile Traders location',
    'Best mobile shop Himal Pokhara',
    'Himal Mobile shop Nepal'
  ];

  // Execute structural data loading
  useEffect(() => {
    // Add structured data ref to Google Business listing
    const linkElement = document.createElement('link');
    linkElement.rel = 'preload';
    linkElement.as = 'fetch';
    linkElement.href = '/google-business.json';
    linkElement.crossOrigin = 'anonymous';
    document.head.appendChild(linkElement);

    // Track page views for analytics
    try {
      if (window.location.hostname !== 'localhost') {
        // This would connect to your analytics service
        console.log('Page view tracked for SEO analytics');
      }
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }

    return () => {
      document.head.removeChild(linkElement);
    };
  }, []);

  return (
    <Helmet>
      {/* Dynamic keyword optimization */}
      <meta name="keywords" content={primaryKeywords.join(', ')} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Mobile optimization */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Local business structured data reference */}
      <link rel="preload" href="/google-business.json" as="fetch" crossOrigin="anonymous" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://maps.googleapis.com" />
    </Helmet>
  );
};

/**
 * Use this component in specific pages for targeted SEO
 */
export const PageSeo = ({
  title,
  description,
  keywords = [],
  image = '/photos/shop-image.png',
  type = 'website'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
