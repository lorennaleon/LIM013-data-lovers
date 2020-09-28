import { sort, anotherExample } from '../src/data.js';


describe('ordenar', () => {
  it('ordenar las letras', () => {
    expect(sort(a,c,b)).toBe(a,b,c);
  });

  it('ordenar los numeros', () => {
    expect(sort(1,3,2)).toBe(1,2,3);
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
