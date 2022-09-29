const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids.length) return [];
  return ids.reduce((animal, idEspecie) => animal
   .concat(data.species.filter(({ id: idAnimal }) => idAnimal === idEspecie)), []);
}

module.exports = getSpeciesByIds;
