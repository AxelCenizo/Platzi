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
const inputImportancia = document.getElementById("inputImportancia");
const resultado = document.getElementById("resultadoFinal");
const tablaDeElementos = document.getElementById("tablaDeElementos");
const botonAgregar = document.getElementById("buttonAgregar").addEventListener("click", agregarElemento);
// const botonCalcular = document.getElementById("buttonCalcular").addEventListener("click", calcularMedia);

let estilosResultado = resultado.style;
estilosResultado.display = "none";


class nota {
    constructor(valor, peso) {
        this.valor = valor;
        this.peso = peso;
        this.valorArreglado = valor * peso;
    }
}

function agregarElemento() {
    const valorObtenido = Number(inputNota.value);
    const pesoObtenido = Number(inputImportancia.value);
    if (valorObtenido == "" || pesoObtenido == "") {
        alert("Por favor asegúrese de que los campos del formulario no esten vacíos")
    } else {
        listaDeNotas.push(new nota(valorObtenido, pesoObtenido));
        indiceTabla++;
        const elementoMediaHTML = "<p><span>" + indiceTabla + ".</span><span>Nota: " + valorObtenido + "</span><span>Peso: " + pesoObtenido + "</span></p>"
        tablaDeElementos.innerHTML += elementoMediaHTML;
        calcularMedia();
    }
}

function calcularMedia() {
    const xw = listaDeNotas.map(notaArreglada => notaArreglada.valorArreglado);
    const w = listaDeNotas.map(imporancia => imporancia.peso);
    // let sumatoriaXW = 0;
    // let sumatoriaW = 0;
    // xw.forEach(unValorArreglado => sumatoriaXW += unValorArreglado);
    // w.forEach(unPeso => sumatoriaW += unPeso);
    const mediaPonderada = sumatoriaArray(xw) / sumatoriaArray(w);
    resultado.innerHTML = Math.round(mediaPonderada * 10000) / 10000;
    if (estilosResultado.display == "none") { 
        estilosResultado.display = "inline-block"
    }
}

function sumatoriaArray(listaDeNumeros) {
    return listaDeNumeros.reduce((valorAnterior = 0, valorActual) => valorAnterior + valorActual, 0);
}