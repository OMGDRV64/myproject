const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Testing in app Heroku!');
});

app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
