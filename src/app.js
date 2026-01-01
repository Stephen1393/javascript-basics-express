const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('./lib/arrays');

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

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

app.post('/numbers/divide', (req, res) => {
  const { a, b } = req.body;
  const num1 = Number(a);
  const num2 = Number(b);

  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    return res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }

  if (b === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  return res.status(200).json({ result: divide(num1, num2) });
});

app.post('/numbers/remainder', (req, res) => {
  const { a, b } = req.body;
  const num1 = Number(a);
  const num2 = Number(b);

  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  }

  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

  if (b === 0) {
    return res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  return res.status(200).json({ result: remainder(num1, num2) });
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const idx = Number(index);
  const { array } = req.body;
  const result = getNthElement(idx, array);
  res.status(200).json({ result });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;
  const result = arrayToCSVString(array);
  res.status(200).json({ result });
});

app.post('/arrays/append', (req, res) => {
  const { array, value } = req.body;
  res.status(200).json({ result: addToArray(value, array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;
  const index = req.query === undefined ? 0 : Number(req.query.index);

  removeNthElement(index, array);

  res.status(200).json({ result: array });
});

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  res.status(200).json({ result: truthiness(value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const { number } = req.params;
  const num1 = Number(number);
  if (Number.isNaN(num1)) {
    return res.status(400).json({ error: 'Parameter must be a number.' });
  }
  return res.status(200).json({ result: isOdd(num1) });
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const { string } = req.params;
  const { char } = req.params;
  if (char.length > 1) {
    return res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }

  return res.status(200).json({ result: startsWith(char, string) });
});
module.exports = app;
