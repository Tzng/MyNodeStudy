const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/test', (req, res) => {
  res.sendStatus(200);
});

// 避免以下操作
app.get('/test', (req, res) => {
  let n = req.query.n;
  for (let i = 0; i < n; i++) {

  }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
