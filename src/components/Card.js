export function Card (item, i){

    
     return(

      ` 
    <div class="carta-box">

    <input type="checkbox" id= ${i}>
    <label for= ${i}>

      <div class="carta">
        <div class="cara">
          <img src="imagenes/carta-front.png" width="200" height="250px">
        </div>
        <div class="cara detras">
          <img src= ${item} width="200" height="250px">
        </div>
      </div>
    </label>
  </div>
  `

     ) 


} 