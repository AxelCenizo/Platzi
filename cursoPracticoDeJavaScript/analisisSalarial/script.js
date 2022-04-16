function calcularPromedio(arrayAPromediar) {
    const sumatoriaParaPromediar = arrayAPromediar.reduce((valorAcumulado, valorActual) => valorAcumulado + valorActual, 0);
    return sumatoriaParaPromediar / arrayAPromediar.length;
}

function esPar(numeroAVerificiar) {
    return numeroAVerificiar % 2 == 0;
}

function calcularMediana(arraryAMediar) {
    const arraryAMediarOrdenado = arraryAMediar.sort((a, b) => a - b);
    const inidiceDelElementoDeLaMitad = Math.floor(arraryAMediarOrdenado.length / 2);
    if (esPar(arraryAMediarOrdenado.length)) {
        const mediana1 = arraryAMediarOrdenado[inidiceDelElementoDeLaMitad - 1];
        const mediana2 = arraryAMediarOrdenado[inidiceDelElementoDeLaMitad];
        return calcularPromedio([mediana1, mediana2]);
    } else {
        const mediana = arraryAMediarOrdenado[inidiceDelElementoDeLaMitad];
        return mediana;
    }
}

function salariosEnUnArray(arrayAExtraerValores) {
    let arrayDeSalarios = [];
    arrayAExtraerValores.forEach(elemento => {
        arrayDeSalarios.push(elemento.salary)
    });
    return arrayDeSalarios;
}

function salariosTop10Porciento(arrayEntero) {
    const elUltimo10PorcientoDelArray = arrayEntero.slice(Math.floor(arrayEntero.length * 0.9), arrayEntero.length);
    return elUltimo10PorcientoDelArray;
}
