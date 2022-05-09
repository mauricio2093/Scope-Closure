/*======    
Nos permite acceder a una variable en un bloque de código o una función, sólo tenemos acceso a ella en esa estructura.
======*/

var Scope = 'im global';

const functionScope = () => {
    var scope = "i am just local";
    const func = () => {
        return scope
    }
    console.log(func());
};

functionScope();