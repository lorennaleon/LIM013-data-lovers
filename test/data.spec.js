import { ordenar } from '../src/data.js';


 describe('ordenar', () => {
    it('ordenar de A a Z', () => {
      const data=[{name:"pikachu"},{name:"bulbasur"},{name:"charmander"}];
      const resultado=[{name:"bulbasur"},{name:"charmander"},{name:"pikachu"}];
      expect(ordenar.az(data)).toEqual (resultado);
    });

    it('ordenar de Z a A', () => {
      const data=[{name:"pikachu"},{name:"bulbasur"},{name:"charmander"}];
      const resultado=[{name:"pikachu"},{name:"charmander"},{name:"bulbasur"}];
     expect(ordenar.za(data)).toEqual(resultado);
    });
  });

