// Aprendiendo sobre valores por defecto e intentando crear una función que puede ser invocado y saltearse un parametro

function prueba(param1 = "param1", param2 = "param2", param3 = "param3") {
    if (param3 == "param3") {
        param3 = param2;
        param2 = "param2";
    }
    console.log(param1, param2, param3);
}

prueba();         // param1 param2 param2
prueba(1, 3);     // 1 'param2' 3
prueba(1, 2, 3);  // 1 2 3

// Concatenación pre-ES6 vs Concatenación post-EC6

const hello = "Hello";
const world = "World";
const epicPhrase = hello + " " + world;
const epicPhraseEC6 = `${hello} ${world}`;
console.log(`Frase epica: ${epicPhrase}.`, `Frase épica versión EC6+: ${epicPhraseEC6}.`);

const person = {
    $name: "Kikai",
    age: 21,
    country: "Argentina"
};

console.log(person.$name, person.age, person.country);

const {$name, age, country} = person;
console.log($name, age, country);

const nombre = "Kikai";
const edad = "21"
// ES5
const obj1 = {nombre: nombre, edad: edad};
// ES6
const obj2 = {nombre, edad};
console.log(obj1, obj2);

// Generadores ES6

function* counter() {
    let count = 0;
    while(count < 5) {
        yield count++;
    }    
    return "DONE";
}

let contador = (veces) => {
    let generador = counter();
    for (i = 0; i <= veces; i++) {
        console.log(generador.next());
    }
}

contador(5);

function* fibonacci() {
    let x = 0;
    let y = 1;
    yield x;
    yield y;
    while(true) {
        yield x += y;
        yield y += x;
    }
}

let fibona = (veces) => {
    let generador = fibonacci();
    for (i = 0; i < veces; i++) {
        console.log(generador.next());
    }
    generador.return("finished")
}

fibona(20);