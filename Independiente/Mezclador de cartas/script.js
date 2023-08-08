const inputElement = document.getElementById("numCartas");
inputElement.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    mezclarCartas();
  }
});

function mezclarCartas() {
    const numCartas = parseInt(document.getElementById("numCartas").value);
    if (numCartas < 1) {
        alert("Ingresa un número válido de cartas.");
        return;
    }

    const resultado = [];

    for (let i = 0; i < numCartas; i++) {
        // Genera un número aleatorio entre 1 y el número restante de cartas
        const cartaAleatoria = Math.floor(Math.random() * (numCartas - i)) + 1;
        resultado.push(cartaAleatoria);
    }

    mostrarResultado(resultado);
    }

// El código para la función mostrarResultado se mantiene igual
  

function mostrarResultado(resultado) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Resultado: " + resultado.join(", ");

    // const output = [];
    // for (let i = 0; i < resultado.length - 1; i++) {
    // output.push(resultado.length - i);
    // }
    // resultadoDiv.innerHTML += "<br>Output: " + output.join(", ");
}

