/*
Enunciado: Dado un array de alumnos (nombre y nota) mostrar cuantos alumnos estan suspensos y cuantos estan aprobados


*/
;

function suspensos(alumnos) {
    let aprobados = 0, suspensos = 0;

    for (let alumno of alumnos) {
        if (alumno[1] >= 5) {
            aprobados++;
        } else {
            suspensos++;
        }
    }

    return {
        "aprobados": aprobados,
        "suspensos": suspensos
    }
}

console.log(suspensos([
    ["Baylis", 20],
    ["victor", 10],
    ["maria", 10],
    ["paola", 9],
    ["Marta", 3]
]))