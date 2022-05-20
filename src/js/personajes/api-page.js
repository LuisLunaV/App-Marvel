import { personajesApi, buscarNuevoPersonaje, crearColeccionComics } from "../index.js";

const contenedor = document.querySelector('.contenedor-de-personaje'),
      buscarTxt  = document.querySelector('#search'),
      notFound = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';


const crearTarjetaDePersonaje =({ thumbnail,name,description,urls })=>{


    const html = `
    <div class="card-personaje">
    <div class="Informacion-de-personaje">
    <h2 class="fuente-maker color-rojo">${name}</h2>
     <p class="fuente-patrick color-blanco">${description}</p>
     <div class='informacio-extra'>
     <a href='${urls[1].url}' target="_blank">Detalles</a>
     <a href='${urls[2].url}' target="_blank">Mas comics</a>
     </div>
    </div>
    <img src="${ thumbnail.path }.${thumbnail.extension}" class="tamaño-30" alt="img-comic">
  </div>
    `;

    contenedor.innerHTML += html;
};




const init= async()=>{

  //Se ejecuta la busqueda del personaje que esta por default.
    const data = await personajesApi( );
    //Filtramos por los arreglos que contengan las portadas del comic y que no sean 'Not found'.
    data.filter( info =>(info.thumbnail.path !== notFound)? info : '' ) //&& info.description.length > 0
    // Reducimos el arreglo a solo nueve elementos que se mostraran en el DOM.
    .slice(0,1).forEach( crearTarjetaDePersonaje );

    buscarNuevoPersonaje();
    crearColeccionComics( data[0].id );

};


export{

  init,
  buscarTxt,
  contenedor,
  notFound,
  crearTarjetaDePersonaje


} 

