const { generateSitemap } = require('./generate-sitemap.js');
const { copyRobots } = require('./copy-robots.js');

generateSitemap('https://heidihoelting.com', './out/');
copyRobots();
