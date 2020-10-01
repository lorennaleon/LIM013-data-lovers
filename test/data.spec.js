import { ordenar } from '../src/data.js';


describe('ordenar', () => {
  it('ordenar de A a Z', () => {
    const data=[{name:"pikachu"},{name:"bulbasur"},{name:"charmander"}];
    const resultado=[{name:"bulbasur"},{name:"charmander"},{name:"pikachu"}];
    expect(ordenar.az(data)).toBe(resultado);
  });
  it('ordenar de Z a A', () => {
    const data=[{name:"pikachu"},{name:"bulbasur"},{name:"charmander"}];
    const resultado=[{name:"pikachu"},{name:"charmander"},{name:"bulbasur"}];
    expect(ordenar.za(data)).toBe(resultado);
  });

});
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
