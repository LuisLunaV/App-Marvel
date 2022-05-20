const keyPublica = '4f2e2b76a3c3745426fdc1204e9b9edc',
      hash       = '895d6f355ed099c0a194332834e680e8'; // ts + keyprivada + keypubloca
const urlComics = 'https://gateway.marvel.com:443/v1/public/characters';

const buscarComics = async( id )=>{

try {
    const url = await fetch(`${urlComics}/${id}/comics?ts=1000&apikey=${keyPublica}&hash=${hash}`)
    if( url.ok ){
        
        const resp = await url.json();
        
        const { data } = await resp;
        const {results} = await data; 
        return results;
        
    }
    else throw 'Fallo la conexion a comics';
        
} catch (error) {

    throw error;

}
};

export{

    buscarComics

}