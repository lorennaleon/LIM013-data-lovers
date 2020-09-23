export const ordenar ={
  az:function(pokemon){
  return pokemon.sort((pokemonA,pokemonB)=>{
      if(pokemonA.name > pokemonB.name){
          return 1;
      }
      if(pokemonA.name < pokemonB.name){
          return -1;
      }
      return 0;
   });
  },
  za:function(pokemon){
  return pokemon.sort((pokemonA,pokemonB)=>{
      if(pokemonA.name < pokemonB.name){
          return 1;
      }
      if(pokemonA.name > pokemonB.name){
          return -1;
      }
      return 0;
   });
  },
};

export const filtrarGeneracion={
  kanto:function(pokemon , generation){
   const pkanto= pokemones.filter((pokemon) => {
     if(generation === "kanto"){
      return pkanto;
      } 
    });
  },
};