var lienzo = document.getElementById("area_de_dibujo").getContext("2d");
var x;
var y;
var colorcito;

document.getElementById("input_color_aleatorio").addEventListener("click", cA);

document.getElementById("area_de_dibujo").addEventListener("mousedown", function(activar) {    
    x = activar.offsetX;
    y = activar.offsetY;    
    // colorcito = document.getElementById("input_color").value; //cambiar para que se pueda usar tanto aleatorio como a elección
});

document.getElementById("area_de_dibujo").addEventListener("mousemove", function(activar) {
    if(activar.buttons == 1) {
        dibujarLinea(colorcito, x, y, activar.offsetX, activar.offsetY);        
        x = activar.offsetX;
        y = activar.offsetY;
    }
});

function dibujarLinea(color, xi, yi, xf, yf) {
    lienzo.beginPath();
    lienzo.lineWidth = 3;
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function aleatorio(min, max) {
    var numRandom = Math.floor(Math.random() * (max - min + 1) + min);
    return numRandom;
} 

function cA() {
    colorcito = "rgb(" + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ")";
    console.log(colorcito);
}
