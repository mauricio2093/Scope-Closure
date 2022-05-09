/*======  
el debugger como un boton de pausa en el flujo del codigo, si ponemos los puntos de pausa en 
los lugares correctos podemos estar viendo que valores estan trayendo los parametros, s estan siendo modificados o no, 
para brindarnos la seguridad de que el flujo de codigo que estamos construyendo sea el correcto
======*/


var a = 'Hello';

function hello(){
    let b = 'Hello World';
    const c = 'Hello World';
    if(true){
        let d = ' Hello World'
        debugger
    };
}

hello();


const moneyBox1 = () => {
    debugger
    let saveCoins = 0
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
    
}
let myMoneyBox = moneyBox1();
myMoneyBox(5);
myMoneyBox(10)

// Herramientas modernas para debug
console.log(menu)
console.log(menu.firstChild)
console.log(e)
console.log(e.toElement)