/*
Enunciado Ejercicio 42:
Dados dos numeros, sacar un numero aleatorio entre ellos.


Ejemplos: 
aleatorio(1, 100);

Devuelve
46

*/


function aleatorio(minimo, maximo) {
    return Math.round(Math.random() * (maximo - minimo) + minimo);
}


console.log(aleatorio(1, 5)); 