const getNthElement = (index, array) => {
  return array[index];
};

const arrayToCSVString = array => {
  return array.toString(',');
};

const csvStringToArray = string => {
 return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return [...array,element];
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.join(',').toUpperCase().split(',');
};

const reverseWordsInArray = strings => {
  return strings.map(function (word) { return word.split('').reverse().join(''); });

  };


const onlyEven = numbers => {
  return numbers.filter(function (num){
    return num % 2 === 0
  }
)};

const removeNthElement2 = (index, array) => {
  return array.toSpliced(index, 1);
};

const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return strings.filter (function(letter){
    return vowels.includes(letter[0]);
  }
)};

const removeSpaces = string => {
  return string.split(' ').join("");
};

const sumNumbers = numbers => {
  return numbers.reduce (function(sum, num) {
    return sum + num;
  }
    
  )};

const sortByLastLetter = strings => {
  return [...strings].sort(function (a, b) {
    const lastA = String(a).slice(-1);
    const lastB = String(b).slice(-1);
    return lastA.localeCompare(lastB);
  });
}

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
