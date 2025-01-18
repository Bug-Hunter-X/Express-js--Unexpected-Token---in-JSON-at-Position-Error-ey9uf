const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Important: parse JSON

app.post('/data', (req, res) => {
  try {
    // Parse JSON. If it fails, it will throw an error
    const data = req.body; 
    console.log('Received data:', data);
    res.status(200).json({ message: 'Data received successfully' });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).json({ error: 'Invalid JSON data' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});