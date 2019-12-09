const fs = require('fs');

// Set lastmod
const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1; //months from 1-12
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();

const lastModified = `${year}-${month}-${day}`;

// Set the header
const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

// Wrap all pages in <urlset> tags
const xmlUrlWrapper = nodes => `${xmlHeader}
  ${nodes}
</urlset>`;

// Determine and return the nodes for every page
const xmlUrlNode = (domain, page, lastmod) => {
  const loc = page === 'index.html' ? `${domain}` : `${domain}/${page}`;

  return `<url>
  <loc>${loc}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>1.00</priority>
</url>`;
};

exports.generateSitemap = (domain, targetFolder) => {
  if (!domain) {
    throw new Error('No domain provided!');
  }
  if (!targetFolder) {
    throw new Error('No targetFolder provided!');
  }
  const fileName = 'sitemap.xml';
  const writeLocation = `${targetFolder.endsWith('/') ? targetFolder : `${targetFolder}/`}${fileName}`;

  var pages = [];
  fs.readdir('../out/', (err, files) => {
    if (err) throw err;
    files.forEach(function(file) {
      const fileExt = file.split('.').pop();
      if (fileExt === 'html') {
        pages.push(file);
      }
    });

    const sitemap = `${xmlUrlWrapper(pages.map(page => xmlUrlNode(domain, page, lastModified)).join(``))}`;

    fs.writeFile(`${writeLocation}`, sitemap, err => {
      if (err) throw err;
      // eslint-disable-next-line
      console.log(`sitemap.xml with ${pages.length} entries was written to ${targetFolder}${fileName}`);
    });
  });
};
