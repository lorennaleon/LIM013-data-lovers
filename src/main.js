import {ordenar} from './data.js';
import data from './data/pokemon/pokemon.js';
//jalando data
function pokemonDetalle(pokemonsResultado) {
  const imagenes = pokemonsResultado.map((pokemon) => {
    let img = pokemon.img;
    return img;
  })
  const names = pokemonsResultado.map((pokemon) => {
    let informacion = pokemon.name;
    return informacion;
  });
  const generation = pokemonsResultado.map((pokemon ) => {
    let informacion = pokemon.generation.name;
    return informacion;
  });
  const stats = pokemonsResultado.map((pokemon ) => {
    let informacion = pokemon.stats['max-cp'];
    return informacion;
  });
  const eggs = pokemonsResultado.map((pokemon) => {
    let informacion = pokemon.egg;
    return informacion;
  });
  const types = pokemonsResultado.map((pokemon) => {
    let informacion = pokemon.type;
    return informacion;
  });


  for (let j = 0; j < pokemonsResultado.length; j++) {
    let pokemon = document.createElement("div");
    pokemon.innerHTML = `
        
         <div class='front'>
            <img src='${imagenes[j]}'/>
            <h3>${names[j]}</h3> 
            <h3>REGIÓN: ${generation[j]}</h3> 
         </div>
         <div class='back'> 
           <h3>MAX-CP: ${stats[j]}</h3>  
           <h3>HUEVOS: ${eggs[j]}</h3>  
           <h3>TIPOS: ${types[j]}</h3>
         </div>
         `

    document.getElementById('pantalla1').appendChild(pokemon);
  }
}
pokemonDetalle(data.pokemon);
//console.table(data.pokemon);
//busqueda
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const filtrar = (pokemon) => {
  resultado.innerHTML = '';
  const texto = formulario.value.toLowerCase();
const busqueda = pokemon.filter(function (item) {
    if (item.name.includes(texto)) {
      return true;
    } else
      return false;
  });
  console.log(texto);
  console.log(busqueda);
  document.getElementById('pantalla1').innerHTML = "";
  pokemonDetalle(busqueda);
  if (busqueda.length === 0) {
    resultado.innerHTML += `
         <p>Pokemon no  encontrado...</p>
          `
  }
}
boton.addEventListener('click', () => {
  filtrar(data.pokemon);
});
// filtrar generacion johto
const johto = document.querySelector('#johto');
const filtrado = (pokemon) => {
  resultado.innerHTML = '';
  const filter = pokemon.filter((item) => {
    if (item.generation.name === 'johto') {
      return true
    } else
      return false;
  });
  document.getElementById('pantalla1').innerHTML = "";
  pokemonDetalle(filter);
}
johto.addEventListener('click', () => {
  filtrado(data.pokemon);
});
//FILTRAR GENERACION KANTO
const kanto = document.querySelector('#kanto');
const filtrando = (pokemon) => {
  resultado.innerHTML = '';
  const filterK = pokemon.filter((item) => {
    if (item.generation.name === 'kanto') {
      return true
    } else
      return false;
  })
  console.log(filterK);
  document.getElementById('pantalla1').innerHTML = "";
  pokemonDetalle(filterK);
}
kanto.addEventListener('click', () => {
  filtrando(data.pokemon);
});
   //filtrar tipo
const filtertype = document.querySelector('#tipos');
filtertype.addEventListener('click', function (e) {
  // console.log(filtertype);
  console.log(e.target.id);
  const tipos = e.target.id;
  const filterT = data.pokemon.filter((item) => {
    if (item.type.includes(tipos)) {
      return true
    } else
      return false;
  })
  document.getElementById('pantalla1').innerHTML = "";
  pokemonDetalle(filterT);
});
//click a ordenar az
document.getElementById('az').addEventListener('click', function () {
  //ordenar data
  let ordenAz = ordenar.az(data.pokemon);
  //mostrar en pantalla
  document.getElementById('pantalla1').innerHTML = "";
  //ordenado
  pokemonDetalle(ordenAz);
});

//click a ordenar za
document.getElementById('za').addEventListener('click', function () {
  //ordenar data
  let ordenZa = ordenar.za(data.pokemon);
  //mostrar en pantalla
  document.getElementById('pantalla1').innerHTML = "";
  //ordenado
  pokemonDetalle(ordenZa);
});

