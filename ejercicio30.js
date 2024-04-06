/*
Enunciado Ejercicio 30:
Dado un array de numeros, devolver e array sin elementos duplicados si hay un string eliminarlo del array.

Ejemplos:
eliminarDuplicados([1,2,1,1,1,3,4]); //Devuelve: [1,2,3,4]


Como hacerlo 
- Crear una funcion con parametro array
- Recorrer el array y eliminar strings
- Usar objeto para eliminar duplicados


*/


function eliminarDuplicados(elementos) {
    elementos = elementos.filter(elemento => {
        return typeof elemento === "number";
    });

    let sin_duplicados = new Set(elementos);


    return Array.from(sin_duplicados)
}


console.log(eliminarDuplicados(["uno", "dos", 1, 2, 2, 3, 3, 1, 4, "Hola", 5]));