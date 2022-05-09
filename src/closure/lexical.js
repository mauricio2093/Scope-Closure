/*
El ámbito léxico es cuando las funciones se ejecutan utilizando la cadena del alcance donde estaban vigente en su momento.
Esto significa que podemos acceder al valor “count” dentro de la función porque es el alcance donde está asignado.
Podemos tener varias formas de manejar la constante “buildCount”, significa que la podemos asignar a myCount y myOtherCount. 
Trabajaremos con el scope(alcance) que tiene esta variable, poder ejecutarla y empezar a contar desde donde necesitemos.
 */

const buildCount = (i) => {
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    };
    return displayCount;    
}

const myCount = buildCount(1);

myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

