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
//console.log(pokemon);

let texto = '';

let azar = [];

pokemon.items.forEach( (item, i)=> {
  azar [i] = item.image;
})

azar = azar.concat(azar);


for(let i= azar.length-1; i>0; i--){

 let j = Math.floor(Math.random() * (i + 1));
 
 [azar[i], azar[j]] = [azar[j], azar[i]];

}


for(let k = 0; k < azar.length; k++ ){

  texto = texto + '<div class="carta-box"> '+

'<input type="checkbox" id="item' +  k  + ' "> ' +
' <label for="item' +  k  +  '"> ' +

  ' <div class="carta"> ' +
    ' <div class="cara"> ' +
      ' <img src="imagenes/carta-front.png" width="200" height="250px"> ' +
    ' </div> ' +
    ' <div class="cara detras"> ' +
      ' <img src=' + azar[k] + ' width="200" height="250px"> ' +
    ' </div> ' +
  ' </div> ' +
' </label> ' +
'</div>';

  }
  

  document.getElementById("contenedor-cartas").innerHTML = texto;





  
  
            
  //  document.getElementById("miguel").innerHTML = '<img src= '+item.image+' width="200" height="250px">';
 
/*document.getElementById("contenedor-cartas").innerHTML =   

'<div class="carta-box">

<input type="checkbox" id="item1">
<label for="item1">

  <div class="carta">
    <div class="cara">
      <img src="imagenes/carta-front.png" width="200" height="250px">
    </div>
    <div class="cara detras">
      <img src="https://www.serebii.net/pokemongo/pokemon/001.png" width="200" height="250px">
    </div>
  </div>
</label>
</div>';*/

  //console.log(item.image);


 

/*const el = document.createElement('div');
    el.innerHTML = ` 
    <div class="carta-box">

    <input type="checkbox" id="item1">
    <label for="item1">

      <div class="carta">
        <div class="cara">
          <img src="imagenes/carta-front.png" width="200" height="250px">
        </div>
        <div class="cara detras">
          <img src="https://www.serebii.net/pokemongo/pokemon/001.png" width="200" height="250px">
        </div>
      </div>
    </label>
  </div>
  `*/





const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.id = 'App1'; 
  el.textContent = 'Hola mundo!';
  
  

  return el;
};


export default App;
