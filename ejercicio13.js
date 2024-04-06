/*

 Enunciado Ejercicio 14:

 Dado un array, dividirlo en tantos sub-arrays como sea necesario basandonos en un numero que indique su tamaño.

 Dividirlo en arrays de X elementos.


 ejemplos:
 divideArray([7,8,9,10, 5], 2)
 
  Devuelve 
  [[7,8], [9,10], [5]]

  Como hacerlo:
  -Crear una funcion que reciba los dos parametros
  -Crear un array
  -Recorrer array e ir añadiendo sub arrays

*/


function divideArray(array_principal, numero_elementos) {

    let arreglos = [];

    for (let elemento of array_principal) {

        let ultimo = arreglos[arreglos.length - 1];

        if (!ultimo || ultimo.length === numero_elementos) {
            arreglos.push([elemento]);
        } else {
            ultimo.push(elemento);
        }
    }
    return arreglos;
}

console.log(divideArray([7, 8, 9, 10, 5], 2));