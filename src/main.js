import {App} from './components/App.js';

//document.getElementById("felicidades").style.display = "none";

document.getElementById('root').appendChild(App());

const botonrei = document.createElement("button");
botonrei.textContent = 'Reiniciar';
botonrei.id = 'reiniciar'
document.getElementById('root').appendChild(botonrei);

const boton = document.querySelectorAll ('button');


boton[2].addEventListener('click',  function (){

    location.reload()
})