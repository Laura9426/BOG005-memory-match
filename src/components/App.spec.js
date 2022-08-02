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

