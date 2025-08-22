// Uso de arrays

const notas:number[] = [9, 7, 6, 8, 9, 8];

function calcular_promedio(notas:number[]) : number {
    let suma= 0;

    for (let n of notas) {
        suma += n;
    }

    // notas.forEach(nota => {
    //     suma += nota
    // });

    return suma/notas.length;
}

console.log(calcular_promedio(notas));
