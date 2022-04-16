const form = document.getElementById("form");
const inputCheck = document.getElementById("inputCheck");
const inputPrecio = document.getElementById("inputPrecio");
const inputDescuentoContainer = document.getElementById("inputDescuentoContainer");
let inputDescuento = document.getElementById("inputDescuento");
const inputDescuentoContent = inputDescuentoContainer.innerHTML;
const inputCuponHTML = (`
<div id="inputDescuentoContainer">
<label for="inputCupon">Cupón de descuento</label>
<input type="text" placeholder="Ingresa el cupón aquí" id="inputCupon">
</div>
`);
let inputCupon;
const resultado = document.getElementById("resultado")

inputCheck.addEventListener("click", reemplazar);


function reemplazar() {
    console.log("Modo de descuento intercambiado");
    if (inputCheck.checked) {
        inputDescuentoContainer.innerHTML = inputCuponHTML;   
        inputCupon = document.getElementById("inputCupon");     
    } else {
        inputDescuentoContainer.innerHTML = inputDescuentoContent;
        inputDescuento = document.getElementById("inputDescuento");
    }
}

function test() {
    if (inputCheck.checked) {
        console.log(inputCupon.value);  
        if (cupones.find(cupon => cupon.codigo == inputCupon.value)) {
            const descuentoDelCupon = (cupones.find(cupon => cupon.codigo == inputCupon.value)).descuento;
            const precioFinal = inputPrecio.value * ((100 - descuentoDelCupon) / 100)
            resultado.innerHTML = "Descuento: " + descuentoDelCupon + "%<br>";
            resultado.innerHTML += "Ahorras: $" + (Math.round((inputPrecio.value - precioFinal) * 100) / 100) + "<br>";
            resultado.innerHTML += "Precio final: $" + (Math.round(precioFinal * 100) / 100);
        } else {
            resultado.innerHTML = "Cupón inválido ☹";
        }
    } else {
        console.log(document.getElementById("inputDescuento").value);
        const precioFinal = inputPrecio.value * ((100 - inputDescuento.value) / 100) 
        resultado.innerHTML = "Ahorras: $" + (Math.round((inputPrecio.value - precioFinal) * 100) / 100) + "<br>";
        resultado.innerHTML += "Precio final: $" + (Math.round(precioFinal * 100) / 100);
    }
}

const cupones = [
    {codigo: "secreto", descuento: 10},
    {codigo: "ultra_secreto", descuento: 50},
    {codigo: "soy_admin", descuento: 100},
    {codigo: "iruyam_aloh", descuento: 100}
];
