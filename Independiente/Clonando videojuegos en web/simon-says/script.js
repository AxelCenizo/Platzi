//Colores apagados
const yellowOff = "#ad9900";
const blueOff = "#015b92";
const redOff = "#99001a";
const greenOff = "#069826";

//Colores encendidos
const yellowOn = "#ffed5e";
const blueOn = "#2daefd";
const redOn = "#ff3155";
const greenOn = "#49f770";

//Elementos HTML de los botones del Simon
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const red = document.getElementById("red");
const green = document.getElementById("green");

//Encender luces
const turnOn = (color) => {
    switch (color) {
        case yellow:
            color.style.backgroundColor = yellowOn;
            break;
        case blue:
            color.style.backgroundColor = blueOn;
            break;
        case red:
            color.style.backgroundColor = redOn;
            break;
        case green:
            color.style.backgroundColor = greenOn;
            break;
    }
             
}

//Apagar luces
const turnOff = (color) => {
    switch (color) {
        case yellow:
            color.style.backgroundColor = yellowOff;
            break;
        case blue:
            color.style.backgroundColor = blueOff;
            break;
        case red:
            color.style.backgroundColor = redOff;
            break;
        case green:
            color.style.backgroundColor = greenOff;
            break;
    }
             
}

//Eventos
document.getElementById("startButton").addEventListener("click", startGame)
yellow.addEventListener("click", processGame);
blue.addEventListener("click", processGame);
red.addEventListener("click", processGame);
green.addEventListener("click", processGame);

//Estado del juego
let gameIinitialized = false;
let gameColorList = [];
let buttonsPressed = [];
let score = 0;
let defaultBlinkTime = 200;

//Listas
const colorList = ["yellow", "blue", "red", "green"];

//Funciones
const pickRandom = () => colorList[Math.floor(4*Math.random())];

const blink = (color, blinkTime) => {
    const colorElement = document.getElementById(color)
    turnOn(colorElement);
    setTimeout(function() {
        turnOff(colorElement);
    },blinkTime);
}

function blinkTheList() {
    const timeBetweenBlink = 850
    for (let i = 0; i <= gameColorList.length; i++) {
        setTimeout(function() {
            blink(gameColorList[i], defaultBlinkTime);
        },timeBetweenBlink * (i)); 
    }
}

function startGame() {
    gameIinitialized = true;
    gameColorList = [];
    buttonsPressed = [];
    blink("yellow", 500);
    blink("blue", 500);
    blink("red", 500);
    blink("green", 500);
    setTimeout(addColor, 1500);
}

function processGame(event) {
    color = event.srcElement.id;
    console.log(color);
    if (gameIinitialized) {
        blink(color, defaultBlinkTime);
        buttonsPressed.push(color);
        sameListLength = buttonsPressed.length == gameColorList.length;
        for (i = 0; i < buttonsPressed.length; i++) {
            if (buttonsPressed[i] !== gameColorList[i]) {
                gameOver();
                return;
            }
        }
        if (sameListLength) {
            setTimeout(addColor, 1000);
            buttonsPressed = [];
        }
    }
} 

function addColor() {
    let colorElegido = pickRandom();
    gameColorList.push(colorElegido);
    blinkTheList();
}

function gameOver() {
    score = gameColorList.length - 1;
    gameIinitialized = false;
    alert(`
    Fin del juego
    Tu puntuación fue de: ${score}
    `);
}


//IDEAS:
//Cambiar background color (bien oscuro) cuando se acierta (momentaneamente) y cuando se falla (hasta reiniciar)
//Poner la puntuación visible todo el tiempo
//Cambiar la estetica del boton de inciar
//Cambiar el texto del boton de inicio a "Reiniciar" si el juego está activo, y poner una alerta de confirmación. Volver a "Iniciar" cuando gamerOver()
//Reemplazar la alert de gameOver() por modificación HTML.
//Agregar sonidos (tal vez música) y configuracion de sonido
//Agregar luces (sombras CSS)
//Agregar circulo en el medio xd