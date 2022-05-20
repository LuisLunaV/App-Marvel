import { buscarPersonaje, buscarTxt, contenedor,notFound, crearTarjetaDePersonaje, crearColeccionComics, contenedorDeComics } from "../index.js";

const btnBuscar = document.querySelector("#button-addon2");

const buscarNuevoPersonaje = async () => {
  btnBuscar.addEventListener("click", async () => {

    if (buscarTxt.value !== "") {
      //Limpiamos el contenedor donde se encuantra la tarjeta del personaje.
      while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
      }
      //Limpiamos el contenedor donde se encuantran las tarjetas de los comics.
      while (contenedorDeComics.firstChild) {
        contenedorDeComics.removeChild(contenedorDeComics.firstChild);
      }

      //Buscamos el nomnbre del personaje en la API Marvel.
      let nuevoPersonaje = await buscarPersonaje(buscarTxt.value);
      //Creamos la tarjeta del personaje que agregamos en el buscador.
      filtrarPersonaje(nuevoPersonaje);
      //Creamos las tarjetas de los comicts del personaje que agregamos en el buscador.
      crearColeccionComics(nuevoPersonaje[0].id);
      buscarTxt.value = "";
    }
  });
};

const filtrarPersonaje = (personaje) => {
   
  return personaje
    .filter((info) => (info.thumbnail.path !== notFound ? info : ""))
    .slice(0, 1)
    .forEach(crearTarjetaDePersonaje);

  buscarTxt.value = "";
};

export { buscarNuevoPersonaje };
