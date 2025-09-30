import { seoConfig } from '@/lib/seo-config';

interface StructuredDataProps {
  type?: 'event' | 'organization' | 'webpage' | 'article';
  data?: any;
}

export function StructuredData({ type = 'event', data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'event':
        return {
          "@context": "https://schema.org",
          "@type": "Event",
          "name": seoConfig.event.name,
          "description": seoConfig.defaultDescription,
          "startDate": `${seoConfig.event.date}T${seoConfig.event.startTime}`,
          "endDate": `${seoConfig.event.date}T${seoConfig.event.endTime}`,
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": seoConfig.event.location.name,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shobhavana Campus, Mijar",
              "addressLocality": "Moodbidri",
              "addressRegion": "Karnataka",
              "postalCode": "574225",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": seoConfig.event.location.coordinates.latitude,
              "longitude": seoConfig.event.location.coordinates.longitude
            }
          },
          "image": [
            `${seoConfig.siteUrl}/logo-white-tedxaiet.png`,
            `${seoConfig.siteUrl}/cardimages/TED2024_20240416_2JR7866-medium.jpg`
          ],
          "organizer": {
            "@type": "Organization",
            "name": seoConfig.siteName,
            "url": seoConfig.siteUrl,
            "logo": `${seoConfig.siteUrl}/logo-white-tedxaiet.png`,
            "sameAs": [
              `https://www.instagram.com/${seoConfig.social.instagram.replace('@', '')}`,
              `https://www.linkedin.com/${seoConfig.social.linkedin}`,
              `https://twitter.com/${seoConfig.social.twitter.replace('@', '')}`
            ]
          },
          "performer": seoConfig.speakers.map(speaker => ({
            "@type": "Person",
            "name": speaker.name,
            "description": speaker.description,
            "image": `${seoConfig.siteUrl}${speaker.image}`
          })),
          "offers": [
            {
              "@type": "Offer",
              "name": "Premium Ticket",
              "url": `${seoConfig.siteUrl}/tickets`,
              "price": "400",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-12-01T00:00:00+05:30",
              "category": "Premium"
            },
            {
              "@type": "Offer",
              "name": "Standard Ticket",
              "url": `${seoConfig.siteUrl}/tickets`,
              "price": "300",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-12-01T00:00:00+05:30",
              "category": "Standard"
            }
          ],
          "audience": {
            "@type": "Audience",
            "audienceType": "Students, Professionals, Entrepreneurs"
          }
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": seoConfig.siteName,
          "url": seoConfig.siteUrl,
          "logo": `${seoConfig.siteUrl}/logo-white-tedxaiet.png`,
          "description": "TEDx AIET organizes inspiring talks and events at Alva's Institute of Engineering and Technology",
          "foundingDate": "2024",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shobhavana Campus, Mijar",
            "addressLocality": "Moodbidri",
            "addressRegion": "Karnataka",
            "postalCode": "574225",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": seoConfig.contact.email,
            "telephone": seoConfig.contact.phone
          },
          "sameAs": [
            `https://www.instagram.com/${seoConfig.social.instagram.replace('@', '')}`,
            `https://www.linkedin.com/${seoConfig.social.linkedin}`,
            `https://twitter.com/${seoConfig.social.twitter.replace('@', '')}`
          ]
        };

      case 'webpage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data?.title || seoConfig.defaultTitle,
          "description": data?.description || seoConfig.defaultDescription,
          "url": `${seoConfig.siteUrl}${data?.path || ''}`,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "name": seoConfig.siteName,
            "url": seoConfig.siteUrl
          },
          "about": {
            "@type": "Event",
            "name": seoConfig.event.name
          }
        };

      default:
        return data;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  );
}