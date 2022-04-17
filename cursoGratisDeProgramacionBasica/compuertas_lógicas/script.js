var cuentaCliente = true;
var cuentaDestino = true;
var saldoCliente = 200;
var mismoBancoQueDestino = false;
var horaDeTransferencia = 9;
var dineroATransferir = 10;
var transferenciaExitosa = false;
var costo = 0;
var usarCondicionalComplejo = true;

// Condicionales simples

if(cuentaCliente && cuentaDestino && !usarCondicionalComplejo) {
    if((9 <= horaDeTransferencia && horaDeTransferencia <= 12) || (15 <= horaDeTransferencia && horaDeTransferencia <= 20)) {
        if(mismoBancoQueDestino) {
            if(saldoCliente >= dineroATransferir) {
                transferenciaExitosa = true;
            }            
        }    
        else {
            if(saldoCliente >= dineroATransferir + 100) {
                transferenciaExitosa = true;
                costo = 100;
            } 
        }
    }
}

// Condicional complejo

if(usarCondicionalComplejo && cuentaCliente && cuentaDestino && ((9 <= horaDeTransferencia && horaDeTransferencia <= 12) || (15 <= horaDeTransferencia && horaDeTransferencia <= 20)) && (mismoBancoQueDestino && saldoCliente >= dineroATransferir) || (!mismoBancoQueDestino && saldoCliente >= dineroATransferir + 100)) {
    transferenciaExitosa = true;
}

if(usarCondicionalComplejo && !mismoBancoQueDestino) {
    costo = 100;
}


if (transferenciaExitosa) {    
    document.body.innerHTML += "Transferencia exitosa" + "<br>";
    document.body.innerHTML += "Saldo pre-transferencia: $" + saldoCliente + "<br>";
    document.body.innerHTML += "Dinero transferido: $" + dineroATransferir + "<br>";
    document.body.innerHTML += "Costo de transferencia: $" + costo + "<br>";
    document.body.innerHTML += "Saldo post-transferencia: $" + (saldoCliente - dineroATransferir - costo) + "<br>";
}
else {
    document.body.innerHTML += "Transferencia fallida";
}