const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find(({ animais }) => animais.name === animal && animais.residents
    .every((idade) => idade.age >= age));
}

module.exports = getAnimalsOlderThan;
