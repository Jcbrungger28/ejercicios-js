/*
Enunciado Ejercicio 19:
Dado un array de objetos de peliculas (titulo, director, vista) mostrar todas las peliculas indicando cual has visto y cual no.


Ejemplos: 
misPeliculas(peliculas);

Devuelve
Ya has visto: "El señor de los anillos de peter jackson"
Te falta por ver: "La liga de la justicia de Zack Snyder"


Como hacerlo: 
- Crear un array de objetos
- Crear un funcion para recorrer y mostrar

*/


function misPeliculas(peliculas) {
    for (p of peliculas) {

        let para_mostrar = `"${p.titulo} de ${p.director}"`;

        if (p.vista) {
            console.log("Ya has visto:", para_mostrar);
        } else {
            console.log("Te falta por ver:", para_mostrar);
        }
    }

    return peliculas;
}

const coleccion_de_peliculas = [
    {
        titulo: "Es señor de los anillos",
        director: "Peter Jackson",
        vista: true
    },
    {
        titulo: "La liga de la justicia",
        director: "Zack Snyder",
        vista: false
    },
    {
        titulo: "Los Vengadores: Endgame",
        director: "Joe Russo",
        vista: true
    },
    {
        titulo: "Batman vs Superman",
        director: "Zack Snyder",
        vista: false
    },
]


console.log(misPeliculas(coleccion_de_peliculas));


