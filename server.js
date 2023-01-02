// Author: Mohammed Mahmuud M.
// Date(dd-mm-yy): 02-01-2022
// Description: A simple server that returns a dictionary definition using dictionaryapi.

// Api key is to be in .env file. The format goes as follows: API_KEY=your_api_key_here
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes(to satisfy CORS policy)

app.get('/api', (req, res) => {
  // Selected word from the query string
  const selectedText = req.query.selectedText;

  // API key request
  const apiKey = process.env.API_KEY;
  const url = "https://dictionaryapi.com/api/v3/references/collegiate/json/" + selectedText + "?key="+ apiKey;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Send the data back to the extension
      res.send(data);
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});