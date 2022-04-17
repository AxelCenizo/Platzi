// var imagenes = [];
// imagenes["Cauchin"] = "vaca.png"; 
// imagenes["Pokacho"] = "pollo.png"; 
// imagenes["Tocinauro"] = "cerdo.png"; 
// 

class Pokiman {
    constructor(n, v, a, i) {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.imagen.src = i;
    }
    
    mostrar() {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<b>" + this.nombre + "</b>");
        document.write("<br>Vida: " + this.vida);
        document.write("<br>Ataque: " + this.ataque);
        document.write("</p><hr>");
    }
}

var cauchin = new Pokiman("Cauchin", 100, 30, "vaca.png");
var pokacho = new Pokiman("Pokacho", 50, 60, "pollo.png");
var tocinauro = new Pokiman("Tocinauro", 80, 45, "cerdo.png");

console.log(cauchin, pokacho, tocinauro);

coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);
// coleccion.push(new Pokiman("holi", 10, 10, "https://www.himgs.com/imagenes/hola/comunes/hola-2017.gif"));

for(var p in coleccion) {
    if(p == 0) {
        document.write("<hr>");
    }
    coleccion[p].mostrar();
    console.log(p);
}
