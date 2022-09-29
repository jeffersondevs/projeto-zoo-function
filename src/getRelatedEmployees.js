const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees
    .filter((elemento) => elemento.managers.includes(managerId))
    .map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
