import pokemon from '../data/pokemon/pokemon.js';

let texto = "";
let azar = [];
let exitosas = [];
let numeroInput = 0;

pokemon.items.forEach((item, i) => {  //guardamos las imagenes en un array 
  azar[i] = item.image;              //para podederlas duplicar y organizar
})

azar = azar.concat(azar);  //duplicamos las imagenes

for (let i = azar.length - 1; i > 0; i--) {    //algoritmo fisher

  let j = Math.floor(Math.random() * (i + 1));

  [azar[i], azar[j]] = [azar[j], azar[i]];

}


const App = () => {

  const contenedor = document.getElementById("contenedor-cartas")

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
  comprobacion()
  return contenedor;
};


function flipCards(id1, id2) {

  const cartaIgual1 = document.getElementById(id1)
  cartaIgual1.checked = false

  const cartaIgual2 = document.getElementById(id2)
  cartaIgual2.checked = false
}

export function quitarSeleccionadas(matches) {

  let matches2_1 = [];

  for (let q = 0; q < matches.length; q++) {

    if (!existeMarcada(matches[q].getAttribute('id'))) {
      matches2_1[matches2_1.length] = matches[q];
    }

  }

  return matches2_1;
}

function existeMarcada(idItem) {

  for (let j = 0; j < exitosas.length; j++) {

    if (exitosas[j] == idItem) {

      return true;
    }
  }
  return false;
}

export function comprobacion() {

  const checkboxes = document.querySelectorAll('.carta-box input');

  checkboxes.forEach((item) => item.addEventListener('click', function () {

    let matches = document.querySelectorAll('input:checked');

    let matches2 = quitarSeleccionadas(matches);

    matches = matches2;

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

        exitosas[exitosas.length] = id1;
        exitosas[exitosas.length] = id2;

        numeroInput = checkboxes.length

        if (numeroInput == exitosas.length) {
          setTimeout(() => ganador(), 1000);
        }

      }
      else {
        setTimeout(() => flipCards(id1, id2), 700);
      }
    }
  }))
}

function ganador() {

  document.getElementById("felicidades").style.display = "block"
}



export default App;

