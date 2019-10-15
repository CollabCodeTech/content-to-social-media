const restify = require('restify');

const PORT = 5000;
const app = restify.createServer();

app.get('/', (req, res) => res.send({ hello: 'World' }));

app.listen(PORT, function() {
  console.log(`Listening on http://localhost:${PORT}`);
  console.log('To off server: ctrl + c');
});
