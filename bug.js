const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Uncommon Error: Unexpected token } in JSON at position 123
//This error occurs when the server tries to parse a JSON response that is malformed or contains unexpected characters like an extra closing brace.  Often this happens in the body of a POST request.