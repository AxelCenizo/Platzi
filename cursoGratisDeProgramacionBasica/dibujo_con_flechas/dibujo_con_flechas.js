var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var lienzo = document.getElementById("area_de_dibujo").getContext("2d");
var x = 250;
var y = 250;

document.addEventListener("keydown", dibujarTeclado);

dibujarLinea("black", x-1, y-1, x+1, y+1);

function dibujarLinea(color, xi, yi, xf, yf) {
    lienzo.beginPath();
    lienzo.lineWidth = 3;
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    var movimiento = 10;
    var colorcito = "blue";
    switch(evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y);
            x = x + movimiento;
        break;
    }
}