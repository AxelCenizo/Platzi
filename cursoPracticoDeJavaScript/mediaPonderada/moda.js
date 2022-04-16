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
        calcularModa();
        inputNota.value = "";
    }
}

function calcularModa() {
    let objeto = {};
    for (let valor of listaDeNotas) {
        if (objeto[valor]) {
            objeto[valor] += 1;
        } else {
            objeto[valor] = 1;
        }
    }
    const listaDeFrecuencias = Object.entries(objeto).sort((a, b) => a[1] - b[1]);
    console.log(listaDeFrecuencias);
    const frecuenciaMayor = listaDeFrecuencias[listaDeFrecuencias.length - 1][1];
    let modaConFrecuencias = listaDeFrecuencias.filter(elemento => elemento[1] == frecuenciaMayor);
    console.log(modaConFrecuencias);
    const modaFinal = modaConFrecuencias.map(elemento => elemento[0]);
    resultado.innerHTML = modaFinal.sort((a, b) => a - b);
    if (document.getElementsByTagName("main")[0].style.display == "none") { 
        document.getElementsByTagName("main")[0].style.display = "initial"
    }
}


function sumatoriaArray(listaDeNumeros) {
    return listaDeNumeros.reduce((valorAnterior = 0, valorActual) => valorAnterior + valorActual, 0);
}
