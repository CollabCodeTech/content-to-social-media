const restify = require('restify');

const PORT = 5000;
const app = restify.createServer();

app.get('/', (req, res) => res.send({ hello: 'World' }));

app.listen(PORT);
