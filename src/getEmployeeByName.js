const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

module.exports = getEmployeeByName;
