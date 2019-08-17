const title = 'Heidi Hölting';
const pageTitle = page => `${title} - ${page}`;

const pageTitles = {
  home: title,
  gallery: pageTitle('Gallery'),
  about: pageTitle('About'),
  contact: pageTitle('Contact')
};

const pageDescriptions = {
  home:
    'Heidi Hoelting is a highly experienced professional fashion and fit model based in New York City. She works for international clients including Tommy Hilfiger, Roberto Cavalli, Gap Inc., Calvin Klein, Vineyard Vines, Jessica Simpson Swimwear, Club Monaco, Sofía Vergara, Juicy Couture and many more.',
  gallery: 'Gallery page for Heidi Hoelting, a professional fashion and fit model based in New York City.',
  about: 'About page for Heidi Hoelting, a professional fashion and fit model based in New York City.',
  contact: 'Contact page for Heidi Hoelting, a professional fashion and fit model based in New York City.'
};

export { pageTitles, pageDescriptions };
