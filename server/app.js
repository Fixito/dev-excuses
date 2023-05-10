const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');

// router
const excusesRouter = require('./routes/excuses.js');

// middleware
const notFound = require('./middleware/not-found.js');
const errorHandler = require('./middleware/error-handler.js');

app.set('trust proxy', 1);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 60
  })
);

// security librairies
app.use(helmet());
app.use(cors());
app.use(xss());

app.use(express.json());

const port = 5000;

app.use('/api/v1/excuses', excusesRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}...`);
});
