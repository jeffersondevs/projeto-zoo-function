const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find(({ name }) => name === animal).residents
    .every(({ age: ageAnimal }) => ageAnimal >= age);
}

module.exports = getAnimalsOlderThan;
