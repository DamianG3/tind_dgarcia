// Interfaces
// Estructurar un objeto


interface ArreglosFlorales {
    id:number;
    descripcion:string;
    precio:number;
};


const inventario:ArreglosFlorales[] = [
    {id: 1, descripcion: "Perfecto para el dia de las madres", precio: 500},
    {id: 2, descripcion: "Feliz cumpleaños", precio: 100},
    {id: 3, descripcion: "Que te mejores!", precio: 250},
];

// Metodo para calcular el total de los precios
function calcular_total(Arreglos:ArreglosFlorales[]) : number {
    return Arreglos.reduce((total, f) => total + f.precio,0);

}

console.log(calcular_total(inventario));
