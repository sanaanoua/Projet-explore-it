const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/map',
    createProxyMiddleware({
      target: 'http://localhost:3000/map',
      changeOrigin: true,
    })
  );
};