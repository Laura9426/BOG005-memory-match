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
console.log(pokemon);

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.id = 'App1'; 
  el.textContent = 'Hola mundo!';
  this.img = pokemon.name.

  return el;
};

const img = document.createElement('img');

img.src = "../data/pokemon/pokemon.js"
img.alt = pokemon.id;

document.body.appendChild(img);

export default App;
