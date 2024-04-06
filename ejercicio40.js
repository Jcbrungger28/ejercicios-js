/*
Enunciado ejercico 40:
Dado un array de numeros, devolver el valor mas bajo y el mas alto.


ejemplos:
altoBajo([1,2,3,4,5]);

devuelve: 
{
    bajo: 1,
    alto: 5
}

Como hacerlo:
- ordenar el array original
- Seleccionar el primer elemento y el ultimo

*/


function altoBajo(numero) {
    let ordenados = numero.sort((a, b) => a - b);


    return {
        bajo: ordenados[0],
        alto: ordenados[ordenados.length - 1]
    }
}


console.log(altoBajo([88, 100, 1, 2, 3, 34, 20, 12, 600, 900, 200]));
