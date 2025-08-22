// Funciones tipicas

function escribir_texto(texto:string, cantidad:number) : string[] {
    const resultado:string[] = [];

    for(let i=0; i<cantidad; i++) {
        resultado.push(texto)
    };


    return resultado;
}

console.log(escribir_texto("Andor", 4));
