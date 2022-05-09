/*======  
Function Scope:
Es el alcance que tienen las variables dentro de una función. 
Concretamente lo que se define para la existencia de dichas variables.

Accedemos a las variables que solamente habiten dentro de la función que no es establecida de forma global.

Se puede ver como el alcance que tienen variables que son declaradas dentro de una función.
((Recuerda: evita redeclarar en lo que más puedas. puedes reasignar, pero no redeclarar))

======*/
let fruit;
const fruits = () => {
    fruit = 'apple';
    return fruit;
}

fruits()
console.log(fruit);

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    y = 2;
    console.log(x);
    console.log(y);
}
anotherFunction()