import { personajesApi } from "./http-privaider";
import { buscarPersonaje } from "./http-privaider";
import { buscarTxt, contenedor, crearTarjetaDePersonaje, notFound } from "./personajes/api-page";
import { buscarNuevoPersonaje } from "./personajes/buscar-personaje";
import { buscarComics } from "./comics/http-privaider-comic";
import { crearColeccionComics, contenedorDeComics } from "./comics/api-page-comics";
export{
    personajesApi,
    buscarPersonaje,
    buscarTxt,
    contenedor,
    crearTarjetaDePersonaje,
    buscarNuevoPersonaje,
    buscarComics,
    crearColeccionComics,
    contenedorDeComics,
    notFound
}