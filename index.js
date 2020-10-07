const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3650;

app.use(express.static('public'));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App is listening on port ${PORT}`);
});