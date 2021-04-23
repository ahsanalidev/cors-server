const corsProxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 8080;

corsProxy.createServer({
    originWhitelist: ['http://localhost:3000','http://localhost:50906','http://localhost:53281',
'https://coinhomes.netlify.app','http://localhost:59579','http://localhost:50000','http://localhost:65446','http://localhost:58058','http://localhost:51518','http://localhost:54844','http://localhost:60003','http://localhost:62571','http://localhost:49976', 'http://localhost:49976','http://localhost:57286','http://localhost:58002','http://localhost:49608','http://localhost:58417','http://coinhomes.io'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
