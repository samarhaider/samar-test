const express = require('express')
const app = express();

const api = require('./api');
const port = process.env.PORT || 3300;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({"hello": "world"});
});

app.use(api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;