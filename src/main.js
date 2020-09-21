import data from './data/pokemon/pokemon.js';

//click kanto
document.getElementById('kanto').addEventListener('click',function(){
    //ocutar pantalla 1
    document.getElementById('pantalla1').style.display='none';
    //mostrar pantalla 2
    document.getElementById('pantallaKanto').style.display = 'block';
});
//click johto
document.getElementById('johto').addEventListener('click',function(){
    //ocutar pantalla 1
    document.getElementById('pantalla1').style.display='none';
    //mostrar pantalla 2
    document.getElementById('pantallaJohto').style.display = 'block';
});
//click al boton tipos
document.getElementById('tipos').addEventListener('click',function(){
    //ocutar pantalla 1
    document.getElementById('pantalla1').style.display='none';
    //mostrar pantalla 2
    document.getElementById('pantallaTipos').style.display = 'block';
});
//click botones de tipo de pokemon agua
document.getElementById('water').addEventListener('click',function(){  
document.getElementById('pantallaTipos').style.display='none';
document.getElementById('pantallaFinal').style.display = 'block';    
})
//click botones de tipo de pokemon normal
document.getElementById('normal').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon lucha
document.getElementById('fighting').addEventListener('click',function(){ 
console.log('asdasdasd'); 
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon fuego
document.getElementById('fire').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon planta
document.getElementById('grass').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon hielo
document.getElementById('ice').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon roca
document.getElementById('rock').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon veneno
document.getElementById('poison').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon tierra
document.getElementById('earth').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon electrico
document.getElementById('electric').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon psiquico
document.getElementById('psychic').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon bicho
document.getElementById('bug').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon volador
document.getElementById('flying').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon siniestro
document.getElementById('sinester').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon acero
document.getElementById('steel').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon hada
document.getElementById('fairy').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon fantasma
document.getElementById('ghost').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click botones de tipo de pokemon dragon
document.getElementById('dragon').addEventListener('click',function(){  
    document.getElementById('pantallaTipos').style.display='none';
    document.getElementById('pantallaFinal').style.display = 'block';    
    })
//click al menu CP
document.getElementById('cp').addEventListener('click',function(){
    document.getElementById('pantalla1').style.display='none';
    document.getElementById('pantallaCp').style.display = 'block';
});
//click de a - z
document.getElementById('az').addEventListener('click',function(){
    alert("hola");
});
//click de z - a
document.getElementById('za').addEventListener('click',function(){
    alert("hola");
});
//click de mayor a menor cp
document.getElementById('mame').addEventListener('click',function(){
    alert("hola");
});
//click de menos a mayor cp
document.getElementById('mema').addEventListener('click',function(){
    alert("hola");
});
 //jalando data
 function pokemonDetalle(pokemonsResultado) {
    const imagenes = pokemonsResultado.map((pokemon,i)=>{
        let img = pokemon.img;
        return img;
    })
    const names = pokemonsResultado.map((pokemon, i) => {
        let informacion = pokemon.name ;
       return informacion  ;
    });

    
    for (let j=0 ; j<250 ; j++){
        let pokemon =document.createElement("div");
        pokemon.classList.add("cardPokemon"); 
        pokemon.innerHTML = "<img src='" + imagenes[j] +"'/><h3>"+ names[j] +"</h3>";
        document.getElementById('pantallaCp').appendChild(pokemon);
        
    }
    
}
 
// pokemonDetalle(data.pokemon);
// console.table(data.pokemon);

//filtrar tipos
function filterType(event){
    console.log(event.target.id)
    let current_id = event.srcElement.id;

    const type = data.pokemon.filter((character)=>{
        // if(this.id  == 'fighting'){
            console.log( character.type.includes(current_id));
            var comprobar = character.type.includes(current_id);
             if(comprobar  == true){
                console.log(character.name);
                let pokemon_img = character.img;
                let pokemon_name = character.name ;
                let pokemon_generation= character.generation.name;
                let pokemon_egg= character.egg;
                let pokemon_type= character.type;
                let pokemon_print =document.createElement("div");
                pokemon_print.setAttribute('class', 'box_type');
                // pokemon_print.innerHTML += "<div class='front'><img src='" + pokemon_img +"'/><h3>"+ pokemon_name +"</h3></div><div class='back'><h3>"+ "REGIÓN:"+''+ pokemon_generation +"</h3><h3>"+"TIPO:"+''+ pokemon_type +"</h3><h3>"+"HUEVOS:"+''+ pokemon_egg +"</h3></div>";
                pokemon_print.innerHTML = `
                <div class='front'>
                    <img src='${pokemon_img}'/>
                    <h3>"${pokemon_name}"</h3>
                </div>
                <div class='back'>
                    <h3>"REGIÓN:${pokemon_generation}"</h3>
                    <h3>"TIPO:${pokemon_type}"</h3>
                    <h3>"HUEVOS:${pokemon_egg}"</h3>
                </div>;
                `
                document.getElementById('pantallaFinal_container').appendChild(pokemon_print);
             }
        // }
    })
}
// Arreglo de elementons coincidentes
let buttons = document.querySelectorAll('.filterType');
// asiganar evento a cada elemento del arreglo (a cada btn)
for(let i = 0; i < buttons.length; i++ ){
    // agregarobservador
    buttons[i].addEventListener('click', filterType) //2 parametros un evento y una funcion
}

