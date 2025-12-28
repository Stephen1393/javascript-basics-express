const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply } = require('./lib/numbers');

const app = express();

app.use(express.json());

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

app.get('/numbers/add/:number1/and/:number2', (req, res) => {
  const { number1, number2 } = req.params;

  const n1 = Number(number1);
  const n2 = Number(number2);

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

  const result = add(n1, n2);
  return res.status(200).json({ result });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  return Number.isNaN(a) || Number.isNaN(b)
    ? res.status(400).json({ error: 'Parameters must be valid numbers.' })
    : res.status(200).json({ result: subtract(b, a) });
});

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;

  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  const num1 = Number(a);
  const num2 = Number(b);

  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).json({ result: multiply(num1, num2) });
});
module.exports = app;
