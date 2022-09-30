const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return {
    child: entrants.filter(({ age }) => age < 18).length,
    adult: entrants.filter(({ age }) => age >= 18 && age < 50).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  let soma = 0;
  const listaEntrada = countEntrants(entrants);
  soma += (listaEntrada.child * data.prices.child)
  + (listaEntrada.adult * data.prices.adult)
  + (listaEntrada.senior * data.prices.senior);
  return soma;
}

module.exports = { calculateEntry, countEntrants };
