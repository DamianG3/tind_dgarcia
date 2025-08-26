// Consumir API
const urlQuotes = "https://dummyjson.com/quotes";

interface Frase{
    id:number;
    frase:string;
    autor:string;
}

async function obtener_frases() : Promise<any> {
    const respuesta = await fetch(urlQuotes);
    if(!respuesta.ok) {
        throw new Error("ERROR EN LA PETICION DE DATOS");
    }
    
    const datos:any = await respuesta.json();

    if (Array.isArray( (datos as any)["quotes"] )) {
        return datos;
    }

    throw new Error("API TIENE UN FORMATO INCORRECTO");


    // return datos;
}


obtener_frases().then(frases => console.log((frases as any)["quotes"]))
// obtener_frases().then(frases => console.log(typeof frases))