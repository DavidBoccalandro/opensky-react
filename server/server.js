const jsonServer = require('json-server');
const server = jsonServer.create();
// const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
// server.use(middlewares)

server.get('/login', (req, res) => {
  res.json('200');
});

server.use(jsonServer.bodyParser);
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now();
//   }
//   // Continue to JSON Server router
//   next();
// });

server.listen(3000, () => {
  console.log('JSON Server is running');
});
