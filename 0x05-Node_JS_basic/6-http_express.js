const express = require('express');

/**
 * Create an http server
 * @module
 */
const app = express();

const PORT = 1245;

/**
 * Send the response to the root
 * @name GET /
 * @function
 * @memberof module:4-http-express
 * @param {object} req
 * @param {object} res
 * @returns {undefined}
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * The HHTP server listening on port 1245
 * @type {object}
 * @memberof module:4-http-express
 */
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
