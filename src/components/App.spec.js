import {App, quitarSeleccionadas, comprobacion, existeMarcada} from './App.js';


/*describe('App', () => {

  beforeEach(()=>{ 
    document.body.innerHTML = `<div id = "contenedor-cartas"></div>`;
    
  })

  //TODO se pone de primera porq tenemos problemas pra limpiar el DOM
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


  /*it('Deber quitar las seleccionadas', () => {
    let prueba = document.querySelectorAll('[name="https://www.serebii.net/pokemongo/pokemon/006.png"]:checked');
    expect(quitarSeleccionadas(prueba)).toBe()

  })*/
});

describe('comprobacion', () => {

  it('deberia ser una funcion', () => {
    expect(typeof comprobacion).toBe('function');
  })

  it('testear que los checkbox tengan un eventListener asociado a click', ()=>{
    document.body.innerHTML = `<div id = "contenedor-cartas"></div>`;
    App();
    const cartas = document.getElementsByName('wartortle');
    console.log('carticas', cartas.length);
    //const cartaBox = document.querySelector('.carta-box input');
    cartas[0].click();
    cartas[1].click();
    

    console.log(document.querySelectorAll('input:checked').length)
  })

});

describe('existeMarcada', ()=> {
  it('Existe marcada deberia retornar un false', ()=>{
    expect(existeMarcada('item20')).toBe(false);

  })
})

