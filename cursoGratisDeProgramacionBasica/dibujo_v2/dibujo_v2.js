var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var ancho = d.width;
input_boton.addEventListener("click", dibujarPorClick);



function dibujarLinea(color, xi, yi, xf, yf) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarPorClick() {
    var color_elegido = document.getElementById("input_color").value;
    var lineas_elegidas = document.getElementById("input_lineas").value;
    var espacio = 0;
        for(i = 0; i<=lineas_elegidas; i++) {
            dibujarLinea(color_elegido, ancho / 2, ancho / 2, espacio, ancho);  
            dibujarLinea(color_elegido, ancho / 2, ancho / 2, ancho, espacio); 
            dibujarLinea(color_elegido, ancho / 2, ancho / 2, espacio, 0);  
            dibujarLinea(color_elegido, ancho / 2, ancho / 2, 0, espacio);            
            espacio = espacio + ancho / lineas_elegidas;
        }
    
}