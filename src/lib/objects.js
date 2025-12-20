const createPerson = (name, age) => {
 return {name, age}
};

createPerson("Stephen", 32);

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object == null) {
    return false;
  }
  if (property in object) {
    return true;
  }
  else {
    return false;
  }
};

const isOver65 = person => {
  if (!person || typeof person.age != "number") {
    return false;
  }
  if (person.age > 65) {
    return true
  } else {
      return false
    }
  };



const getAges = people => {
  return people.map(function (p) {
    return p.age;
  })
};

const findByName = (name, people) => {
return people.find(function (n) {
  return n.name === name;
});
};

const findHondas = cars => {
   return cars.filter(function (H) {
return H.manufacturer === 'Honda';
   });
  }



const averageAge = people => {
    var total = people.reduce(function(sum, add) {
    return sum + add.age;
  }, 0);
  return total / people.length
  }

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
