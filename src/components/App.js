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

let comparar = [];
let texto = "";
let azar = [];
//let contador = 0;



pokemon.items.forEach((item, i) => {  //guardamos las imagenes en un array 
  azar[i] = item.image;              //para podederlas duplicar y organizar

})

azar = azar.concat(azar);  //duplicamos las imagenes


for (let i = azar.length - 1; i > 0; i--) {    //algoritmo fisher

  let j = Math.floor(Math.random() * (i + 1));

  [azar[i], azar[j]] = [azar[j], azar[i]];

}


for (let c = 0; c < azar.length; c++) {

  comparar[c] = 0;

}


const contenedor = document.getElementById("contenedor-cartas")

const App = () => {

  for (let k = 0; k < azar.length; k++) {  //recorro el array para publicarlas en DOM


    texto += `<div class="carta-box">

  <input type="checkbox" id= "item${k}" name = "${azar[k]}" >
  <label for= "item${k}">

    <div class="carta">
      <div class="frente">
        <img src="imagenes/bombillo.png" width="200" height="250px">
      </div>
      <div class="cara detras">
        <img src= "${azar[k]}" width="200" height="250px">
      </div>
    </div>
  </label>
</div>`

  }


  contenedor.innerHTML = texto;
  prueba()
  return contenedor;
};


function flipCards(id1, id2) {

  const cartaIgual1 = document.getElementById(id1)
  cartaIgual1.checked = false

  const cartaIgual2 = document.getElementById(id2)
  cartaIgual2.checked = false
}

function prueba() {

  const checkboxes = document.querySelectorAll('.carta-box input');


  checkboxes.forEach((item) => item.addEventListener('click', function () {

    let matches = document.querySelectorAll('input:checked');

    if (matches.length % 2 === 0) {

      let carta1 = (matches[0].getAttribute('name'));
      let carta2 = (matches[1].getAttribute('name'));

      let id1 = (matches[0].getAttribute('id'));
      let id2 = (matches[1].getAttribute('id'));


      if (carta1 == carta2) {

        const cartaIgual1 = document.getElementById(id1)
        cartaIgual1.setAttribute('disabled', 'true')

        const cartaIgual2 = document.getElementById(id2)
        cartaIgual2.setAttribute('disabled', 'true')

        //matches = 0;
      }
      else {
        setTimeout(() => flipCards(id1, id2), 2000);
      }
    }
  }))
}





export default App;
