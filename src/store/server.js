const express = require('express');
const bodyParser = require('body-parser');

// In-memory state storage
let state = {}; // This will store the state in memory

const app = express();
app.use(bodyParser.json());

/**
 * API endpoint to save the state.
 * Expects a JSON object in the request body.
 * @name POST /api/saveState
 * @function
 * @param {Object} req - The request object containing the state to be saved.
 * @param {Object} res - The response object used to send a success status.
 * @returns {Object} A JSON object with the status of the operation.
 */
app.post('/api/saveState', (req, res) => {
  state = req.body;
  res.send({ status: 'success' });
});

/**
 * API endpoint to load the state.
 * Returns the current state stored in memory.
 * @name GET /api/loadState
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object used to send the current state.
 * @returns {Object} The current state stored in memory.
 */
app.get('/api/loadState', (req, res) => {
  res.send(state);
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
