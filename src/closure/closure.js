/*======  
Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). 
En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. 
En JavaScript, las clausuras se crean cada vez que una función es creada.
======*/
const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);
moneyBox(10);

const moneyBox1 = () => {
    let saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
    
}
let myMoneyBox = moneyBox1();
myMoneyBox(5);
myMoneyBox(10)

//lo que esta pasando es que al llamar la funcion MoneyBox() y guardarlo en la variable myMoneyBox 
//lo que hace es solo guardar la función de retorno que es el countCoins, y cada vez que se llama myMonyBox 
//lo que hace es solo sumar, lo cual está en la función de retorno.

const papa = () =>{
    let cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(1)  // cantidad de engendritos = 2
traigamosHijosAlMundo(1)  // cantidad de engendritos = 3