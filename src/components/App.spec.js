import App from './App.js';

describe('App', () => {
  it('should render without crashing', () => {
    document.body.innerHTML = `<div id = "contenedor-cartas"></div>`
    const contenedor = App();
    expect(contenedor instanceof HTMLElement).toBe(true);
  });

  it('deberia ser una funcion', () => {
    expect(typeof App).toBe('function');
  });
});

/*describe('quitarSeleccionadas', () => {
  it('Deber quitar las seleccionadas', () => {
    let prueba = document.querySelectorAll('[name="https://www.serebii.net/pokemongo/pokemon/006.png"]:checked');
    expect(quitarSeleccionadas(prueba[0],prueba[1])).toBe()

  })


})*/
