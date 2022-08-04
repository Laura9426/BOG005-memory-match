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

