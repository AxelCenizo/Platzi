// Cuadrado

const perimetroCuadrado = ladoCuadrado => ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado => ladoCuadrado ** 2;

// console.group("Cuadrado");
// console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");
// console.log("El perímetro del cuadrado mide " + perimetroCuadrado + "cm");
// console.log("El área del cuadrado mide " + areaCuadrado + "cm");
// console.groupEnd();

// Triangulo

const perimetroTriangulo = (ladoTriangulo1, ladoTriangulo2, baseTriangulo) => ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

const areaTriangulo = (baseTriangulo, alturaTriangulo) => (baseTriangulo * alturaTriangulo) / 2;

// console.group("Triangulo");
// console.log(
    // "Los lados del triángulo miden lo siguiente: \n" +
    // "Lado 1 = " + ladoTriangulo1 + "cm\n" +
    // "Lado 2 = " + ladoTriangulo2 + "cm\n" +
    // "Base = " + baseTriangulo + "cm\n"
    // );
// console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");
// console.log("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");
// console.log("El area del triángulo mide: " + areaTriangulo + "cm");
// console.groupEnd();

// Circulo 

const diametroCirculo = radioCiruclo => radioCiruclo * 2;

const PI = Math.PI;

const perimetroCirculo = radio => diametroCirculo(radio) * PI;

const areaCirculo = radioCiruclo => radioCiruclo ** 2 * PI;

// console.group("Círculo");
// console.log("El perímetro del círuclo mide: " + perimetroCirculo + "cm");
// console.log("El radio del círculo mide; " + radioCiruclo + "cm");
// console.log("El diámetro del círculo mide: " + diametroCirculo + "cm");
// console.log("PI es: " + PI);
// console.log("El área del círuclo mide, " + areaCirculo + "cm");
// console.groupEnd();

function calcularCuadrado() {
    const input = document.getElementById("input");
    const valor = input.value;
    alert(perimetroCuadrado(valor) + "\n" + areaCuadrado(valor));
}

function calcularAlturaTrianguloIsosceles() {
    const valorA = document.getElementById("inputA").value;
    const valorB = document.getElementById("inputB").value;
    const valorC = document.getElementById("inputC").value;
    let ladosIguales;
    let base;
    switch (valorA) {
        case valorB: 
            ladosIguales = valorA;
            base = valorC;
            break;
        case valorC:
            ladosIguales = valorA;
            base = valorB;
            break;
        default: 
            ladosIguales = valorB;
            base = valorA;
    }
    const alturaTrianguloIsosceles = Math.sqrt(ladosIguales**2 - base**2 / 4);
    console.log(valorA, valorB, valorC, ladosIguales, base, ladosIguales**2 - base**2 / 4);
    if (alturaTrianguloIsosceles > 0) {
        alert(alturaTrianguloIsosceles);
    } else {
        alert("El triángulo ingresado no es un triángulo válido.")
    }
}

function verificarEnter(evento) {
    console.log(evento)
    // evento == 13 ? alert("Has presionado Enter") : alert("Has presionado otra tecla");
}