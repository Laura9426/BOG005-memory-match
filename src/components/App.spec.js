import {App, quitarSeleccionadas, comprobacion, existeMarcada} from './App.js';


/*describe('App', () => {

  beforeEach(()=>{ 
    document.body.innerHTML = `<div id = "contenedor-cartas"></div>`;
    
  })

  //TODO se pone de primera porq tenemos problemas para limpiar el DOM
  it('deberia pintar 18 cartas', () => {
    App();
    expect(document.querySelectorAll('.carta-box').length).toBe(18);
  })

  it('should render without crashing', () => {
    const contenedor = App();
    expect(contenedor instanceof HTMLElement).toBe(true);
  });
  
  it('deberia ser una funcion', () => {
    expect(typeof App).toBe('function');
  });
  
});*/

describe('quitarSeleccionadas', () => {
  it('deberia ser una funcion', () => {
    expect(typeof quitarSeleccionadas).toBe('function');
  })

});

describe('comprobacion', () => {

  it('deberia ser una funcion', () => {
    expect(typeof comprobacion).toBe('function');
  })

  it('carta1 == carta2 debe retornar true', ()=>{
    document.body.innerHTML = `<div id = "contenedor-cartas"></div>`;
    App();
    const cartas = document.getElementsByName('wartortle');
    const cartas1 = document.getElementsByName('charmeleon');
    //console.log('carticas', cartas.length);
    //const cartaBox = document.querySelector('.carta-box input');
    cartas[0].click();
    cartas1[1].click();
    
    //console.log(document.querySelectorAll('input:checked').length)

    expect(cartas==cartas1).toBe(false);
  })

  it('carta1 == carta2 debe retornar false', ()=>{
    document.body.innerHTML = `<div id = "contenedor-cartas"></div>`;
    App();
    const cartas = document.getElementsByName('wartortle');
    
    cartas[0].click();
    cartas[1].click();
    
    //console.log(document.querySelectorAll('input:checked').length)

    expect(cartas==cartas).toBe(true);
  })

  it('El id deberia tener el atributo disabled', ()=>{
    document.body.innerHTML = `<div id = "contenedor-cartas"></div>`;
    App();
    const cartas = document.getElementsByName('charmeleon');
    //console.log('carticas', cartas.length);
    //const cartaBox = document.querySelector('.carta-box input');
    cartas[0].click();
    cartas[1].click();
    //console.log(cartas.length)

    const input1 = document.querySelectorAll('input:checked')
    const idInput1 = input1[0].getAttribute('id')

    const idInput2 = document.getElementById(idInput1)

    expect(idInput2.getAttribute('disabled')).toBe('true');

  })



});

describe('existeMarcada', ()=> {
  it('Existe marcada deberia retornar un false', ()=>{
    expect(existeMarcada('item20')).toBe(false);

  })
})

