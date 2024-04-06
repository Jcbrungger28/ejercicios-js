/*
Enunciado del ejercicio 35:

Dado un array, crear otro con el primer y el ultimo elemento del original.


Ejemplos:

primeroYultimo([100, 200, 300, 780]) devuelve [100, 780]

Como hacerlo:

- Funcion con parametro array
- Array push del primer y ultimo elemento
- Devolver resultado

*/

function primeroYultimo(elementos) {
    let nuevos_elementos = [];

    nuevos_elementos.push(elementos[0], elementos[elementos.length - 1]);


    return nuevos_elementos;
}


console.log(primeroYultimo([100, 200, 300, 780]))