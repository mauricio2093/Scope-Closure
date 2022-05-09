/*======  

Hoisting: Eleva las declaraciones, esto pasa en el momento en que se compila nuestro 
código antes de ser interpretado por el navegador.

De esta forma podemos asignar nuestros valores o acceder a un valor que previamente 
no ha sido declarado dentro de esta estructura.

Lo que se hace en realidad es tomar ‘registros’ en memoria de donde está cada declaración
(todo esto previo a que se ejecute el código en sí) y depende si es var, let, const o una función, 
JS va a asignarle referencias a cada una.

var : asigna la referencia undefined (si de acá viene el famoso undefined)

let/const: asigna la referencia uninitialized(declarado pero no inicializado)

función: guarda un registro con la función entera(por eso la podemos llamar antes de que este creada)
======*/

a=2;
var a;
console.log(a);//2

console.log(b); //undefine
var b = 2;

c = 3;
let c;
console.log(c); // Error No puede acceder antes de ser inicializada

let d;
d = 3;
console.log(d); //3

console.log(e); //Error No puede acceder antes de ser inicializada
let e;
e = 3;

console.log(f); // Error No puede acceder antes de ser inicializada
const f = 3;

const g = 4;        
console.log(g); // 4


function nameOfDog(name){
    console.log(name);
}

nameOfDog('Tomy') // Tomy


nameOfDog1('Tomy') // Tomy

function nameOfDog1(name){
    console.log(name);
}

