
/**
 * @jest-environment jsdom
 */
import App from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    // Dado - que necesito para ejecutar mi prueba
    document.body.innerHTML = `<div id = "contenedor-cartas"></div>`

    // Cuando - ejecutar el codigo necesario para la prueba
    const el = App();
    console.log(el);

    // Entonces = resultados esperados

    expect(el instanceof HTMLElement).toBe(true);
  });
});






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

/*import pokemon from '../data/pokemon/pokemon.js';

let comparar = [];

let azar = [];

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


const App = () => {

  const contenedor = document.getElementById("contenedor-cartas")
  

  for (let k = 0; k < azar.length; k++) {  //recorro el array para publicarlas en DOM 

    const cartabox = document.createElement("div");
    cartabox.classList.add('carta-box');
    cartabox.id = 'id' + k;
    contenedor.appendChild(cartabox)

    const cartabox1 = document.getElementById('id' + k)
    

    const input1 = document.createElement("input");
    input1.type = 'checkbox';
    input1.id = 'item' + k;
    cartabox1.appendChild(input1);

    const label1 = document.createElement("label");
    label1.setAttribute('for', 'item' + k)
    label1.id = 'idlabel' + k;
    cartabox1.appendChild(label1);

    
    const label2 = document.getElementById('idlabel' + k)

    const carta = document.createElement("div");
    carta.classList.add('carta');
    carta.id = 'idcarta' + k;
    label2.appendChild(carta);

    const carta1 = document.getElementById('idcarta' + k)

    const cara = document.createElement("div");
    cara.classList.add('cara');
    cara.id = 'idcara' + k;
    carta1.appendChild(cara);

    const cara1 = document.getElementById('idcara' + k)
    
    const imagen1 = document.createElement("img");
    imagen1.setAttribute('src', 'imagenes/carta-front.png', )
    imagen1.setAttribute('width', '200')
    imagen1.setAttribute('height', '250px')
    cara1.appendChild(imagen1);

    

    const caradetras = document.createElement("div");
    caradetras.classList.add('caradetras');
    caradetras.id = 'idcaradetras' + k;
    carta1.appendChild(caradetras);

    const caradetras1 = document.getElementById('idcaradetras' + k)

    const imagen2 = document.createElement("img");
    imagen2.setAttribute('src', azar[k] )
    imagen2.setAttribute('width', '200')
    imagen2.setAttribute('height', '250px')
    caradetras1.appendChild(imagen2);
    
    

      cartabox.addEventListener("click", function(){

        alert('hola');

      })


   const texto = `<div class="carta-box">

  <input type="checkbox" id= item${k} >
  <label for= item${k}>

    <div class="carta">
      <div class="cara">
        <img src="imagenes/carta-front.png" width="200" height="250px">
      </div>
      <div class="cara detras">
        <img src= ${azar[k]} width="200" height="250px">
      </div>
    </div>
  </label>
</div>`


const div1 = document.createElement('div')

div1.innerHTML = div1.innerHTML + texto;

return div1;

    contenedor.innerHTML = contenedor.innerHTML + texto;


    const carta = document.getElementById(`item${k}`);
    carta.addEventListener("click", function () {

      alert('hola');
      
       
      
      if (document.getElementById(carta).checked) {

        alert("la carta esta checked");

        var checkboxes = document.querySelectorAll('input');
        for (x in checkboxes) {

          let zz = 'item' + x;
          var xxxxxx = document.getElementById(zz);
          xxxxxx.addEventListener('change', function () {
            if (this.checked) {
              alert(zz + ' esta seleccionado');
            }
          });
        }
      }
    })
 }


  return texto;



  }

  const contene= document.getElementById('contenedor')

  contene.appendChild(prueba())

};




function prueba(carta){

console.log(carta);

}
export default App;
*/