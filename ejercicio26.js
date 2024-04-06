/*
Enunciado Ejercicio 26:
Dado un numero, mostrar su serie de fibonacci.
La serie de fibonacci es un orden de numero donde cada numero es la suma de dos anteriores.



Ejemplos:
fib(10)[0]
fib(10)[1]

-
Serie completa: 0,1,1,2,3,5,8,13,21,34,55
Resultado de la serie fibonacci: 55


Como hacerlo: 
-Crear una funcion con parametros numero
-Crear variable con dos primeros numeros de la serie
-Bucle desde dos al numero
-Sumar los dos anteriores valores a numero actual.
- Devolver el resultado.

 */


function fibonacci(numero) {
    let serie = [0, 1];

    for (let i = 2; i <= numero; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    return [serie, serie[numero]]
}

console.log("Serie Completa:", fibonacci(10)[0]);
console.log("Resultado fibonacci:", fibonacci(10)[1]);
