const data = require('../data/zoo_data');

function countAnimals({ specie, sex } = { specie: 'all', sex: 'all' }) {
  // seu código aqui
  return data.species.reduce((total, valorAtualEspecie) => {
    if (specie === 'all') {
      const animal = { ...total };
      animal[valorAtualEspecie.name] = valorAtualEspecie.residents.length;
      return animal;
    }
    if (valorAtualEspecie.name === specie) {
      if (sex) {
        return valorAtualEspecie.residents
          .filter(({ sex: sexoAnimal }) => sexoAnimal === sex).length;
      }
      return valorAtualEspecie.residents.length;
    }
    return total;
  }, {});
}

module.exports = countAnimals;
