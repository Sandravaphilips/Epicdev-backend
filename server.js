const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const router = require('./router/router');
const { validateBody } = require('./helpers/middleware');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api', validateBody, router);

server.get('/', (req, res) => {
  res.send('Hello from Epicdev');
});

server.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);