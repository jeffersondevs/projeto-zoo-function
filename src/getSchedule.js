const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { species } = data;

function diaDisponivel(nomeAnimal) {
  return species.find((animal) => animal.name === nomeAnimal).availability; 
}

function horarioDisponivel() {
  const horario = Object.keys(data.hours);
  return horario.reduce((acc, dia) => {
    if (dia === 'Monday') {
      return acc;
    }
    acc[dia] = {
      officeHour: `Open from ${data.hours[dia].open}am until ${data.hours[dia].close}pm`,
      exhibition: species.filter((animal) => animal.availability.includes(dia)).map((animal) => animal.name)
    }
    return acc;
  }, { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } })
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (species.find(({ name }) => name === scheduleTarget)) {
    return diaDisponivel(scheduleTarget);
  }
  if (data.hours[scheduleTarget]) {
    const dias = horarioDisponivel();
    return { [scheduleTarget]: dias[scheduleTarget] }
  }
  return horarioDisponivel();
}

module.exports = getSchedule;
