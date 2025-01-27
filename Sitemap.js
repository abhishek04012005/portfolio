const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

(async () => {
  // Define the base URL of your site
  const BASE_URL = 'https://abhishekchoudhary.co.in/';

  // List of static routes
  const staticRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/wedding-website', changefreq: 'daily', priority: 0.9 },
    { url: '/wedding-anniversary-website', changefreq: 'daily', priority: 0.8 },
    { url: '/birthday-website', changefreq: 'daily', priority: 0.8 },
    { url: '/wedding-invitation', changefreq: 'daily', priority: 0.7 },
    { url: '/birthday-invitation', changefreq: 'daily', priority: 0.7 },
    { url: '/resume-writing', changefreq: 'daily', priority: 0.6 },
    { url: '/bio-data', changefreq: 'daily', priority: 0.6 },
    { url: '/product-promotion', changefreq: 'daily', priority: 0.7 },
    { url: '/business-website', changefreq: 'daily', priority: 0.7 },
    { url: '/personal-portfolio', changefreq: 'daily', priority: 0.7 },
  ];



  // Combine static and dynamic routes
  const allRoutes = [...staticRoutes];

  // Create a sitemap stream
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  // Add routes to the sitemap
  allRoutes.forEach((route) => {
    sitemap.write(route); // Write each URL
  });

  // Close the sitemap stream
  sitemap.end();

  // Convert the stream to a promise
  const sitemapXML = await streamToPromise(sitemap);

  // Write the XML to a file
  fs.writeFileSync('./public/sitemap.xml', sitemapXML.toString());
  console.log('Sitemap successfully generated!');
})();
