const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((element) => ids.some((string) => string === element.id));
}

module.exports = getSpeciesByIds;
