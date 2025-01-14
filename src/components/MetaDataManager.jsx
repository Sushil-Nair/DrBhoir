import React, { useEffect } from 'react';

const MetadataManager = ({ 
  title = 'Dr. Bhoir Farm & Resort',
  description = 'Welcome to Dr. Bhoir Farm & Resort, your premier destination for a serene and luxurious getaway in the heart of the Kalyan - Badlapur region.',
  keywords = 'Best farm resort near Mumbai, Weekend getaway in Kalyan, Ambarnath and Badlapur region, Maharashtrian cuisine resort, Family-friendly resorts near Mumbai, Luxury accommodations in Kalyan, Nature resorts in Maharashtra',
  author = 'Dr. Santosh Bhoir',
  ogTitle = null,
  ogDescription = null,
  ogImage = null,
  twitterCard = 'summary_large_image',
  canonicalUrl = null,
  children
}) => {
  // Use OG title/description if not provided specifically
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Function to create or update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attributeType = property ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attributeType}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeType, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Function to update link tags
    const updateLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', href);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Update Open Graph meta tags
    updateMetaTag('og:title', finalOgTitle, true);
    updateMetaTag('og:description', finalOgDescription, true);
    updateMetaTag('og:type', 'website', true);
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
    }
    if (canonicalUrl) {
      updateMetaTag('og:url', canonicalUrl, true);
      updateLinkTag('canonical', canonicalUrl);
    }

    // Update Twitter Card meta tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', finalOgTitle);
    updateMetaTag('twitter:description', finalOgDescription);
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage);
    }

    // Cleanup function
    return () => {
      // Optional: Remove meta tags when component unmounts
      // Note: Usually not needed as they'll be updated by the next page
    };
  }, [
    title, 
    description, 
    keywords, 
    author, 
    finalOgTitle, 
    finalOgDescription, 
    ogImage, 
    twitterCard, 
    canonicalUrl
  ]);

  return <>{children}</>;
};

export default MetadataManager;