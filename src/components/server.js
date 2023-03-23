const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Add a middleware to set the 'Access-Control-Allow-Origin' header to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/proxy', async (req, res) => {
  try {
    const response = await axios.get(req.query.url);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
