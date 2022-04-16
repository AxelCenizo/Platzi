// Valores
// piedra = 1
// papel = 2
// tijera = 3
// 
// Empates
// 1 - 1 = 0
// 2 - 2 = 0
// 3 - 3 = 0
// 
// Ganar 
// piedra - tijera = 1 - 3 = -2
// papel - piedra = 2 - 1 = 1
// tijera - papel = 3 - 2 = 1
// 
// Perder 
// tijera - piedra = 3 - 1 = 2
// piedra - papel = 1 - 2 = -1
// papel - tijera = 2 - 3 = -1


const Jugador = Number(prompt(
    "Elija una opción: 1-Piedra ✊, 2-Papel 🤚 o 3-Tijeras ✌.\n" +
    "Si escribe mal la opción, gana la máquina 🤖(a menos que tengas buena suerte 🍀).")); //Puedes tener suerte si, por ej, eliges 4 y la máquina elige 3, resultando en un 1, caso ganador.
const Maquina = Math.floor((Math.random() * 3) + 1); 
switch (Jugador - Maquina) {
    case 0: //Ej: Piedra(1) - Piedra(1) = 0
        alert("Empate");
        break; 
    case -2: //Piedra(1) - Tijeras(3) = -2
    case 1: //Tijeras(3) - Papel(2) = 1 | Papel(2) - Piedra(1) = 1
        alert("Ganó el jugador");
        break;
    default: //Esto también podría ser "case 2: case -1: ..."
        alert("Ganó la máquina"); 
        break;
}