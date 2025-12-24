const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

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

app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const { length } = req.query;

  let result;

  if (length === undefined) {
    result = firstCharacter(string);
  } else {
    const text = string.slice(0, length);
    result = firstCharacters(text);
  }
  res.status(200).json({ result });
});

module.exports = app;
