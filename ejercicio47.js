/*
Enunciado Ejercicio 47:

Dado array de objetos, devolver cuales son las aficiones mas comunes entre los usuarios

ejemplos:
aficiones(usuario)

{ informatica: 6, cine: 7, futbol: 2, videojuegos: 1 }

*/

function aficiones(arrObj) {
    let mapeo = {};

    for (objeto of arrObj) {
        for (let aficion of objeto.aficiones) {

            if (!mapeo[aficion]) {
                mapeo[aficion] = 1;
            } else {
                mapeo[aficion]++;
            }
        }
    }
    return mapeo;
}

const usuarios = [

    { nombre: "baylis", aficiones: ["informatica", "cine", "videojuegos"] },
    { nombre: "victor", aficiones: ["cine", "futbol", "tenis"] },
    { nombre: "paco", aficiones: ["informatica", "cine", "surf"] },
    { nombre: "pepe", aficiones: ["informatica", "cine", "videojuegos", "futbol", "surf"] }

]

console.log(aficiones(usuarios));