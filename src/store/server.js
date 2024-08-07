const express = require('express');
const bodyParser = require('body-parser');

let state = {}; // This will store the state in memory

const app = express();
app.use(bodyParser.json());

app.post('/api/saveState', (req, res) => {
  state = req.body;
  res.send({ status: 'success' });
});

app.get('/api/loadState', (req, res) => {
  res.send(state);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
