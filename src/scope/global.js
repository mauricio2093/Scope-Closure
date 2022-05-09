/*======  
Global Scope : No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.

-Con var podemos re-asignar una variable pero es una mala práctica.
-Con let y const no podemos, aparecerá un error.
-Es una mala práctica crear una variable sin las palabras reservadas: var, let y const.
-Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
-La doble asignación de una variable también es una mala práctica.  

var: Permite declarar, redeclarar y reasignar.
let: Permite declarar, no permite redeclarar, y sí permite reasignar cuantas veces quieras.
const: Permite declarar, no permite redeclarar, y no permite reasignar jamás.
======*/


/* Esta declarando una variable scope global con el nombre helloWorld y le esta asignando el valor Hello
World. */
var helloWorld = 'Hello World';


/* Esta declarando una variable scope global con el nombre world y le esta asignando el valor world. */
let world = 'world';


/* Esta declarando una variable scope globañ con el nombre hello y le esta asignando el valor hello. */
const hello = 'hello';



const anotherFunction = () => {
    console.log(hello);
    console.log(world); 
    console.log(helloWorld);
}

anotherFunction()

// Esto no causa error
var hVar = 'hVar'
var hVar = 'hVar...'

// Esto genera un SyntaxError debido a que la variable hlet se intenta declarar por segunda vez.
let hlet = 'hlet'
let hlet = 'hlet...'

//Pero si podemos asignar un nuevo valor
let Hlet = 'hlet'
Hlet = 'hlet_update'

// error
const hconst = 'hconst'
const hconst = 'hconst..'

// error
const hconst = 'const' 
hconst = 'const..'

const helloWorld = () => {
    globalVar = 'im global'                         // se puede usar fuera de la funcion - mala practica
}
helloWorld();
console.log(globalVar);

const anotherFunction1 = () => {
    var localVar = globalVar = 'im global';
}

anotherFunction1()
console.log(globalVar);