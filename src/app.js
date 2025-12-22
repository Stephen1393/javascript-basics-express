const express = require('express');
const { sayHello, uppercase, lowercase } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  const { string } = req.params;
  const result = sayHello(string);
  res.status(200).json({ result });
});

app.get('/strings/upper/:string', (req, res) => {
  const { string } = req.params;
  const result = uppercase(string);
  res.status(200).json({ result });
});

app.get('/strings/lower/:string', (req, res) => {
  const { string } = req.params;
  const result = lowercase(string);
  res.status(200).json({ result });
});

module.exports = app;
