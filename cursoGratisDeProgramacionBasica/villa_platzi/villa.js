var vp = document.getElementById("zona_de_dibujo");
var papel = vp.getContext("2d");
var xCerdo = (aleatorio(0, 5) * 80) + 10;
var yCerdo = (aleatorio(0, 5) * 80) + 10;
var cantidad = aleatorio(1, 5);

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39 
}

var fondo = {
    url: "tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false
}

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
}

document.addEventListener("keydown", moverCerdo)

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

function moverCerdo(evento) {
    switch(evento.keyCode) {
        case teclas.UP:
            yCerdo = yCerdo - 80;    
            dibujar();
        break;
        case teclas.DOWN:
            yCerdo = yCerdo + 80;   
            dibujar(); 
        break;
        case teclas.LEFT:
            xCerdo = xCerdo - 80;  
            dibujar();  
        break;
        case teclas.RIGHT:
            xCerdo = xCerdo + 80;    
            dibujar();
        break;
    }
}

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar() {
    if(fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK) {
        for(var v = 0; v < cantidad; v++) {
            var x = (aleatorio(0, 5) * 80) + 10; 
            var y = (aleatorio(0, 5) * 80) + 10;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOK) {
        papel.drawImage(cerdo.imagen, xCerdo, yCerdo)
    }
}

function aleatorio(min, max) {
    var numRandom = Math.floor(Math.random() * (max - min + 1) + min);
    return numRandom;
} 