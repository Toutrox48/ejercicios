let usuario = prompt('ingrese su nombre');
let horas = Number(prompt('ingrese el numero de horas'));

let salario = Math.floor(horas * 30000);

if (numerohoras <= 10) {
    console.log(`Señor ${usuario}, la cantidad de horas trabajadas son ${horas}, por lo tanto su salario es ${salario}`);
} else if (numerohoras >= 11) {
    salario += horas * 3000; 
    console.log(`Señor ${usuario}, la cantidad de horas trabajadas son ${horas}, por lo tanto su salario es ${salario}`);
}else{
    console.log(`señor(a) ${usuario}, la cantidad de horas trabajadas son ${horas}, por lo tanto su ${salario}`)
}