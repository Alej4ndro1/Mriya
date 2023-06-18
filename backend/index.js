const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});

app.get('/api', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.json({
    message: "Response from backend express.js"
  })
});