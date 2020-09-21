import data from './data/pokemon/pokemon.js';
constArrayPokemons=Object.values(pokemon.data);
//filtrar tipos

//ordenar de A-Z

const ordenarAz=newArrayPokemons.sort((pokemonA,pokemonB)=>{
    if(pokemonA.name < pokemonB.name){
        return 1;
    }
    if(pokemonA.name > pokemonB.name){
        return -1;
    }
    return 0;
})
console.log(ordenarAz);
//ORDENAR DE Z-A

const ordenarZa=newArrayPokemonsReverse.sort((pokemonA,pokemonB)=>{
    if(pokemonA.name > pokemonB.name){
        return 1;
    }
    if(pokemonA.name < pokemonB.name){
        return -1;
    }
    return 0;
})
console.log(ordenarZa);

 export default data;