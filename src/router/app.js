const express = require('express');
const bodyParser = require('body-parser');
const paypalRouter = require('./routes/paypal'); // PayPal routes

/**
 * Creates an Express application.
 * @type {import('express').Express}
 */
const app = express();

/**
 * Middleware to parse incoming JSON requests.
 * @type {import('body-parser').OptionsJson}
 */
app.use(bodyParser.json());

/**
 * Mounts the PayPal routes under the '/api/paypal' path.
 * @type {import('express').Router}
 */
app.use('/api/paypal', paypalRouter);

/**
 * The port on which the server will listen.
 * @type {number}
 */
const PORT = process.env.PORT || 3000;

/**
 * Starts the server and listens on the specified port.
 * @param {number} PORT - The port number.
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
