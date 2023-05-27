function procesarrespuestas() {
let total = 5
let puntos = 0;

let myform = document.forms["Formulario"];
let respuestascorrectas = ["(C)", "(B)" , "(A)", "(C)", "(D)"];

for (let i = 1; i <= total; i++) {
if (myform[ "R" + i].value == null ||
    myform["R" + i].value == '') {
    alert ("Te hacen falta preguntas");
    return false;

    } else {

        if (myform [ "R"+ i].value === respuestascorrectas[i-1])
        puntos ++;
    }


    }

    let resultado = document.getElementById ("Formulario");
    resultado.innerHTML = 'resultado' +puntos+ 'Puntos de' +total+ 'Posibles';
    return false;


}

