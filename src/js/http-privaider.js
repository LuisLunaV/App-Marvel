const keyPublica = '4f2e2b76a3c3745426fdc1204e9b9edc',
      hash       = '895d6f355ed099c0a194332834e680e8'; // ts + keyprivada + keypubloca
//info personaje: https://gateway.marvel.com/v1/public/characters/1009629?ts=1000&apikey=4f2e2b76a3c3745426fdc1204e9b9edc&hash=895d6f355ed099c0a194332834e680e8
const urlprincipal = `https://gateway.marvel.com:443/v1/public/characters?name=Spider-Man (Peter Parker)&ts=1000&apikey=${keyPublica}&hash=${hash}`;
const urlBuscar = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=';

const personajesApi = async ( )=>{

    try {
        const resp = await fetch( urlprincipal );

        if( resp.ok ){
        
            const { data }  = await resp.json();
            
            const { results }= await data;
console.log(results)
            return results;
        
        }
        
        else throw 'Fallo la conexion a personajes';
    
    } catch (error) {
    
        throw error;
    }
};



const buscarPersonaje = async( id )=>{

    try {
        const resp = await fetch(`${urlBuscar}${id}&ts=1000&apikey=${keyPublica}&hash=${hash}`);

        if( resp.ok ){
        
            const { data }  = await resp.json();

            const { results }= await data;
            console.log(results)
            
            return results;
        
        }
        
        else throw 'Fallo la conexion buscar personaje';
    
    } catch (error) {
    
        throw error;
    }

}

export{
    personajesApi,
    buscarPersonaje
}