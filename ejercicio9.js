/**
 * 
 * dados dos array, devolver array con solo los elementos comunes entre ambos
 * 
 * 
 * ejemplos:
 * elementos comunes([4,5,6,7], [7,8,9,7,5]) // devuelve [5,7]
 
Como hacerlo:
 - Funcion que recibe dos arrays
 - Filtrar array y evaluando una condicion
 - Devolver array nuevo
 
 */


function elementosComunes(array1, array2) {

    const filtrado = array1.filter(elemento => {
        return array2.includes(elemento)
    });

    return filtrado;
}



console.log(elementosComunes([4, 5, 6, 7], [7, 8, 9, 7, 5]));
console.log(elementosComunes(["victor", "paco", "pepe"], ["juan", "manue", "jesus", "victor"]));
