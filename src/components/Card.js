export function Card (item){

    const el = document.createElement('div');
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
  `


} 