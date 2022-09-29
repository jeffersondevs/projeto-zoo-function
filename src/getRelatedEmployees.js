const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data
    .filter((elemento) => elemento.managers.includes(managerId))
    .map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
