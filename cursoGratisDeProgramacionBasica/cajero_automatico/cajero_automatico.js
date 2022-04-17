class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = v + ".jpg"; 
        this.imagen.height = 200;
    }
}

var div, dinero, papeles, saldo = 0;
var entregado = [];
var caja = [];
var mostrarEstado = false;

caja.push(new Billete(1000, Math.ceil(Math.random() * 10)));
caja.push(new Billete(500, Math.ceil(Math.random() * 10)));
caja.push(new Billete(200, Math.ceil(Math.random() * 10)));
caja.push(new Billete(100, Math.ceil(Math.random() * 10)));
caja.push(new Billete(50, Math.ceil(Math.random() * 10)));
caja.push(new Billete(20, Math.ceil(Math.random() * 10)));
// caja.push(new Billete(10, Math.ceil(Math.random() * 10)));

for(var copy of caja) {
    entregado.push(new Billete(copy.valor, 0));
    entregado.ultima = 0;
}

document.getElementById("input_boton").addEventListener("click", entregarDinero);
document.getElementById("input_estado").addEventListener("click", mostrarOcultarEstado);

function mostrarOcultarEstado() {
    mostrarEstado = !mostrarEstado;
    estadoBilletes();
}

function calcularSaldo() {
    saldo = 0;
    for(var s of caja) {
        saldo += s.valor * s.cantidad; 
    }   
    document.getElementById("saldo").innerHTML = saldo;
}

// for(var cambiarCantidad of caja) {
//     cambiarCantidad.cantidad = 5;
// }

calcularSaldo();
var saldoAnterior = saldo;

function estadoBilletes() {
    if(mostrarEstado) {
        var sinBilletes = 0;
        document.getElementById("estado_billetes").innerHTML = "<br>El cajero dispone de los siguientes billetes:<br><br>";
        for(var e of caja) {
            if(e.cantidad > 0) {
                sinBilletes += 1;
                document.getElementById("estado_billetes").innerHTML += e.cantidad + " billetes de " + e.valor + "<br>";
                // document.getElementById("estado_billetes").innerHTML += e.cantidad + " billetes de " + "<img src=\"" + e.imagen.src + "\" height=\"" + e.imagen.height + "\">" + "<br>";
            }
            console.log(e.cantidad, sinBilletes);
        }
        console.log(sinBilletes);
        if(sinBilletes == 0) {
            document.getElementById("estado_billetes").innerHTML = "<br><b id=\"error\">El cajero está vacío, lamentamos los inconvenientes.</b><br>";
        }
        document.getElementById("estado_billetes").innerHTML += "<br><hr>";
    }
    else {
        document.getElementById("estado_billetes").innerHTML = "";
    }
}

function entregarDinero() {
    var iteracion = 0;
    document.getElementById("resultado").innerHTML = "";
    dinero = parseInt(document.getElementById("input_numero").value);
    if(dinero > 0 && (dinero % 10 == 0)) {
        for(var b of caja) {
            // entregado[iteracion].ultima = 0;
            div = Math.floor(dinero / b.valor);
            if(div > b.cantidad) {
                papeles = b.cantidad;
            }
            else {
                papeles = div;
            }
            entregado[iteracion].ultima = papeles;
            if(papeles > 0) {
                entregado[iteracion].cantidad += papeles;
                dinero -= b.valor * papeles;
            } 
            iteracion++;
        }
        if(dinero > 0) {
            document.getElementById("resultado").innerHTML += "<br>Lo siento, no tengo los billetes necesarios para entregar la cantidad solicitiada";
            for(var entr of entregado) {
              entr.cantidad -= entr.ultima;
            }            
        }
        else {
            iteracion = 0;
            for(var entr of entregado) {
                if(entr.cantidad > 0) {
                    // document.getElementById("resultado").innerHTML += "<br>" + entr.cantidad + " billetes de $" + entr.valor;  
                    for(var i = 0; i < entr.cantidad; i++)
                    document.getElementById("resultado").innerHTML += "<img src=\"" + entr.imagen.src + "\" height=\"" + entr.imagen.height + "\">";
                    if(caja[iteracion].cantidad > 0){
                        caja[iteracion].cantidad -= entr.ultima;
                    }
                }
                iteracion++;
            }    
        }
        calcularSaldo();
        estadoBilletes();
        document.getElementById("resultado").innerHTML += "<br><br>Dinero total extraido: $ <b style=\"color: rgb(85, 255, 85)\">" + (saldoAnterior - saldo) + "</b><br><br>";
    }
    else {
        document.getElementById("resultado").innerHTML = "<br>Por favor, ingrese una cantidad positiva múltiplo de 10."
    }
    console.log(entregado);
    console.log(caja);
}

// function entregarDinero() {
//     var saldoAnterior = saldo;
//     console.clear();
//     document.getElementById("resultado").innerHTML = "";
//     dinero = parseInt(document.getElementById("input_numero").value);
//     if(dinero > 0 && dinero % 10 == 0) {
//         for(var b of caja) {
//             div = Math.floor(dinero / b.valor);
//             if(div > b.cantidad) {
//                 papeles = b.cantidad;
//             }
//             else {
//                 papeles = div;
//             }
//             if(papeles > 0) {
//                 document.getElementById("resultado").innerHTML += "<br>" + papeles + " billetes de " + b.valor;
//                 b.cantidad -= papeles;
//                 estadoBilletes();
//                 saldo -= (b.valor * papeles);
//                 document.getElementById("saldo").innerHTML = saldo;
//                 dinero = dinero - (b.valor * papeles);
//             }
//         }
//     }
//     else {
//         document.getElementById("resultado").innerHTML += "<br>Por favor, ingrese una cantidad múltiplo de 10."
//     }
//     if(saldo == saldoAnterior) {
//         document.getElementById("resultado").innerHTML += "<br>Lo siento, soy un cajero pobre y no dispongo de los billetes necesarios para extraer la cantidad que solicitaste :(<br>";
//     }
// }