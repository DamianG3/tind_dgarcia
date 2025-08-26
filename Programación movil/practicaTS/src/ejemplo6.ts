// Ejemplo de CRUD

interface Estudiante{
    id:number;
    nombre:string;
    becado:boolean;
}


// Creamos un arreglo vacio
let estudiantes:Estudiante[] = [];


// Funcion para Create Estudiantes
function crear_estudiante(alumno:Estudiante):void {
    estudiantes.push(alumno)
    console.log(`Estudiante ${alumno.nombre} creado`);
    
}


// Funcion para Read Estudiantes
function leer_estudiantes() {
    console.log("Listado de estudiantes");
    
    estudiantes.forEach(e => 
        console.log(`${e.id}. ${e.nombre}, ${(e.becado ? 'becado' : 'no becado')}`)
    )
}


// Funcion para Update Estudiantes
function actualizar_estudiante(estudiante:Estudiante):void {
    const estudianteIndex = estudiantes.findIndex(e => e.id === estudiante.id)

    if (estudianteIndex === -1) {
        console.log("Estudiante no encontrado");
    } else {
        console.log("Estudiante actualizado");
        estudiantes[estudianteIndex] = estudiante
    }

}


// Funcion para Delete Estudiantes
function eliminar_estudiante(id:number):void {
    const estudianteIndex = estudiantes.findIndex(e => e.id === id)

    delete estudiantes[estudianteIndex];

};



// Implementar
crear_estudiante({id:1, nombre:"Luigi", becado:true});
crear_estudiante({id:2, nombre:"Mario", becado:false});

leer_estudiantes();

actualizar_estudiante({id:3, nombre:"Nuevo Luigi", becado:false});
actualizar_estudiante({id:1, nombre:"Nuevo Luigi", becado:false});

leer_estudiantes();

eliminar_estudiante(2)

leer_estudiantes();