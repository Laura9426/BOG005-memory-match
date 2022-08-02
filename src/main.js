import App from './components/App.js';

document.getElementById('root').appendChild(App());

const botonrei = document.createElement("button");
botonrei.textContent = 'Reiniciar';
botonrei.id = 'reiniciar'
document.getElementById('root').appendChild(botonrei);


/*function prueba(carta){

    console.log(carta)
    
    }*/




    /*if (document.getElementById(carta).checked) {

        let contador = 0;

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
    }*/






/*const prueba = () => (carta){

    let ficha = carta.split("item");
  
    alert(comparar[ficha[1]]);
  
  }*/
