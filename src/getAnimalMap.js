const data = require('../data/zoo_data');

function animalNames(animais) {
  return animais.map(({ name }) => name);
}

function filterSex(sex, animal, residents) {
  return residents.filter((name, index) =>
    name === animal.residents[index].name && animal.residents[index].sex === sex);
}

function switchOptions(animal, options = []) {
  const informacao = {};
  if (options.includeNames) {
    informacao[animal.name] = animalNames(animal.residents);
  } else {
    return animal.name;
  }
  if (options.sex && options.includeNames) {
    informacao[animal.name] = filterSex(options.sex, animal, informacao[animal.name]);
  }
  if (options.sorted) {
    informacao[animal.name].sort();
  }
  return informacao;
}

function getAnimalMap(options) {
  // seu código aqui
  const localizacao = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  data.species.forEach((animal) => {
    if (options) {
      localizacao[animal.location].push(switchOptions(animal, options));
      return;
    }
    localizacao[animal.location].push(animal.name);
  });
  return localizacao;
}


module.exports = getAnimalMap;
