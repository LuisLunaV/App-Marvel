import { buscarComics } from "../index.js";
const contenedorDeComics = document.querySelector(".contenedor-de-comics");

const crearTarjetaDeComics = ({ thumbnail, title }) => {
  const html = `
    <div class="card" style="width: 18rem;">
    <img src="${thumbnail.path}.jpg" class="card-img-top img-comic" alt="img-comic">
    <div class="card-body">
      <h6 class="card-title">${title}</h6>
    </div>
  </div>
    `;

  contenedorDeComics.innerHTML += html;
};

const crearColeccionComics = async (id) => {
  //Buscamos los comics relacionados con el id del personaje en la API Marvel.
  const data = await buscarComics(id);
  //Filtramos por los arreglos que contengan las portadas del comic y que no sean 'Not found'.
  data.filter((info) => (info.images.length !== 0 ? info : ""))
    //Reducimos el arreglo a solo nueve elementos que se mostraran en el DOM.
    .slice(0, 20)
    .forEach(crearTarjetaDeComics);
};

export { crearColeccionComics, contenedorDeComics };
