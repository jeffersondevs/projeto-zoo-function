const data = require('../data/zoo_data');

const pegarIdAnimal = (id) => data.employees
  .find((element) => element.id === id)
  .responsibleFor.map((resp) => resp)[0];

const pegarAntigo = (acc, animal) => {
  if (acc.age > animal.age) return acc;
  return animal;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const IdAnimal = pegarIdAnimal(id);
  const objeto = data.species.find((element) => element.id === IdAnimal).residents.reduce(pegarAntigo);
  return Object.keys(objeto).map((element) => objeto[element]);
}

module.exports = getOldestFromFirstSpecies;
