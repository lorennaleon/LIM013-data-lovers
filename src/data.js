export const ordenar = {
  az: function (pokemon) {
    return pokemon.sort((pokemonA, pokemonB) => {
      if (pokemonA.name > pokemonB.name) {
        return 1;
      }
      if (pokemonA.name < pokemonB.name) {
        return -1;
      }
      return 0;
    });
  },
  za: function (pokemon) {
    return pokemon.sort((pokemonA, pokemonB) => {
      if (pokemonA.name < pokemonB.name) {
        return 1;
      }
      if (pokemonA.name > pokemonB.name) {
        return -1;
      }
      return 0;
    });
  },
};
export const functionFilter = {
  tipos: function (pokemon, value) {
    const filterT = pokemon.filter((item) => {
      if (item.type.includes(value)) {
        return true
      } else
        return false;
    })
    return filterT;
  },
  generacion: function (pokemon, value) {
    const filterR = pokemon.filter((item) => {
      if (item.generation.name.includes(value)) {
        return true
      } else
        return false;
    })
    return filterR;
  }
}
