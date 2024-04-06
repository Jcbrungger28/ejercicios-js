/*
Enunciado Ejercicio 37:

Dado un array o un texto, devolver el elemento o palabras que mas aparecen.


Ejemplos:

elQueMasAparece("Victor robles victor");
elQueMasAparece([1,2,3,4,1]);


Devuelve:
victor
1

Como hacerlo:
- Mapear el elemento y en un json y hacer contador

*/

function elQueMasAparece(datos) {

    let mapeo = {},
        mas_frecuente = "",
        mayor_valor = 0;

    if (typeof datos === "string") {
        datos = datos.split(" ");
    }

    for (let elemento of datos) {
        if (mapeo[elemento]) {
            mapeo[elemento]++;
        } else {
            mapeo[elemento] = 1;
        }
    }


    for (let elemento in mapeo) {
        if (mapeo[elemento] > mayor_valor) {

            mayor_valor = mapeo[elemento];
            mas_frecuente = elemento;
        }
    }

    return {
        mayor_valor: mayor_valor,
        mas_frecuente: mas_frecuente
    };
}


console.log(elQueMasAparece(["hola", "hola", "hola", 1, 1, 1, 1, 1]));