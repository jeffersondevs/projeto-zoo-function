const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para argumento count retorna um numero inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Para argumento names deve retornar um array de nomes que possui o nome que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
