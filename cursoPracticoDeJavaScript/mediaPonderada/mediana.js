// Media ponderada: (x1w1 + x2w2...) / (w1 + w2...)

// Se puede usar una media ponderada para calcular la nota final de un 
// curso escolar, en donde se asigna distinta importancia (peso) a los 
// distintos exámenes que se realicen. Por ejemplo, los dos primeros exámenes 
// tienen un peso o valor de 30% y 20% respectivamente, y el último del 50%; 
// las calificaciones respectivas son de 6.4, 9.2 y 8.1, entonces la nota 
// final debe ser: 7.81

let indiceTabla = 0;
let listaDeNotas = [];
const inputNota = document.getElementById("inputNota");
const resultado = document.getElementById("resultadoFinal");
const tablaDeElementos = document.getElementById("tablaDeElementos");
const mensajeDeError = document.getElementById("mensajeDeError");
const botonAgregar = document.getElementById("buttonAgregar").addEventListener("click", agregarElemento);
inputNota.addEventListener("keypress", agregarElementoConEnter);

document.getElementsByTagName("main")[0].style.display = "none"
window.addEventListener("DOMContentLoaded", agregarElementoConEnter)

function agregarElementoConEnter (evento) {
    if (evento.key == "Enter") {
        evento.preventDefault();
        agregarElemento();
    }
}

function agregarElemento() {
    const valorObtenido = Number(inputNota.value);
    if (!valorObtenido) {
        mensajeDeError.style.display = "block";
        inputNota.style.borderColor = "var(--rojo)";
    } else {
        mensajeDeError.style.display = "none";
        inputNota.style.borderColor = "var(--gris-azulado)";
        listaDeNotas.push(valorObtenido);
        indiceTabla++;
        const elementoMediaHTML = "<p><span>" + indiceTabla + ".</span><span>Valor: " + valorObtenido + "</span></p>"
        tablaDeElementos.innerHTML += elementoMediaHTML;
        calcularMedia();
        inputNota.value = "";
    }
}

function calcularMedia() {
    listaDeNotas.sort((a,b) => a - b);
    let mediana;
    if (listaDeNotas.length % 2 == 0) {
        const valor1 = listaDeNotas[listaDeNotas.length / 2];
        const valor2 = listaDeNotas[listaDeNotas.length / 2 - 1];
        mediana = (valor1 + valor2) / 2;
    } else {
        mediana = listaDeNotas[Math.trunc(listaDeNotas.length / 2)];        
    }
    resultado.innerHTML = mediana;
    if (document.getElementsByTagName("main")[0].style.display == "none") { 
        document.getElementsByTagName("main")[0].style.display = "initial"
    }
}

function sumatoriaArray(listaDeNumeros) {
    return listaDeNumeros.reduce((valorAnterior = 0, valorActual) => valorAnterior + valorActual, 0);
}