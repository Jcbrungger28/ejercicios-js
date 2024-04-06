/*
Enunciado: Dado un objeto, comprobar si existe una propiedad en concreto.


Ejemplos:
existePropiedad(miObjeto, "nombre")

Devuelve: true

*/

function existePropiedad(objeto, propiedad) {
    if (typeof objeto === "object" && typeof propiedad === "string" && objeto.hasOwnProperty(propiedad)) {
        return true;
    };

    return false;
}


let usuario = {
    nombre: "Baylis",
    apellido: "Brungger",
    web: "BaylisBrungger.es"
}

console.log(existePropiedad(usuario, "web"));