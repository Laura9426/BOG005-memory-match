//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import pokemon from '../data/pokemon/pokemon.js';
import {Card} from './Card.js';

let texto = '';

let azar = [];

pokemon.items.forEach( (item, i)=> {  //guardamos las imagenes en un array 
  azar [i] = item.image;              //para podederlas duplicar y organizar
})

azar = azar.concat(azar);  //duplicamos las imagenes


for(let i= azar.length-1; i>0; i--){    //algoritmo fisher

 let j = Math.floor(Math.random() * (i + 1));
 
 [azar[i], azar[j]] = [azar[j], azar[i]];

}

for(let k = 0; k < azar.length; k++ ){  //recorro el array para publicarlas en DOM

    texto = texto + Card(azar[k], k);
  }
  

  document.getElementById("contenedor-cartas").innerHTML = texto;


  


const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.id = 'App1'; 
  el.textContent = 'Hola mundo!';
  
  

  return el;
};


export default App;
