let lado1 = Number(prompt('ingrese el primer angulo'))
let lado2 = Number(prompt('ingrese el segundo angulo'))
let lado3 = Number(prompt('ingrese el tercer angulo'))

let triangulo = lado1 +lado2 + lado3

if ( triangulo === 180){
   alert('este es un triangulo valido') 
}else{
    alert('el triangulo no es valido')
}