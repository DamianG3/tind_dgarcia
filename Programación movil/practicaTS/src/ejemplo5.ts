// Funciones con interfaces

interface Estudiante{
    id:number;
    nombre:string;
    becado:boolean;
}

// Crear el arreglo de estudiante
const estudiantes:Estudiante[] = [
    {id:1, nombre:"Fernando", becado:false},
    {id:2, nombre:"Alexis", becado:true},
    {id:3, nombre:"Maria", becado:true},
]

// Crea la funcion para buscar a estudiantes becados

function buscar_becados(lista : Estudiante[]) :Estudiante[] {
    return lista.filter(estudiante => estudiante.becado)
}

// Mostrar
console.log("Estudiantes con beca:");
console.log(buscar_becados(estudiantes));

