const withCSS = require('@zeit/next-css');

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/gallery': { page: '/gallery' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' }
    };
  }
};

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});
