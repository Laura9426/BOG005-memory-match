import App from './components/App.js';


document.getElementById('root').appendChild(App());

const botonrei = document.createElement("button");
botonrei.textContent = 'Reiniciar';
botonrei.id = 'reiniciar'
document.getElementById('root').appendChild(botonrei);

const boton = document.querySelectorAll ('button');


boton[1].addEventListener('click',  function (){

    window.location.reload()
})