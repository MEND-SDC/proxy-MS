const express = require('express');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
// serve up static file
// app.use('/*', express.static('public'));



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


const related = {
  target: 'http://13.57.184.81',
  changeOrigin: true,
  pathRewrite: {
    '/api/related/': '/related/'
  }
};

const relatedproxy = proxy(related);
app.use('/api/related/:houseID', relatedproxy);

// const reservations = {
//     target: 'http://3.135.103.1',
//     changeOrigin: true,
//     onProxyRes: function (proxyRes) {
//         proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//       }
//   };
//   const reservation = proxy(reservations);
//   app.use('/', reservation);

//   const suggestions = {
//     target: 'http://localhost:3001',
//     changeOrigin: true,
//     onProxyRes: function (proxyRes) {
//         proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//       }
//   };
//   const suggestion = proxy(suggestions);
//   app.use('/', suggestion);

//   const photogalleries = {
//     target: 'http://localhost:3004',
//     changeOrigin: true,
//     onProxyRes: function (proxyRes) {
//         proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//       }
//   };
//   const photogallery = proxy(photogalleries);
//   app.use('/', photogallery);

