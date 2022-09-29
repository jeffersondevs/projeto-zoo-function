const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  data.employees
    .forEach((colaborador) => colaborador.firstName === employeeName || colaborador.lastName === employeeName)
  return {};
}

module.exports = getEmployeeByName;
