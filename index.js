const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Homepage route
app.get('/', (req, res) => {
  res.send('Hello from Heroku!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
