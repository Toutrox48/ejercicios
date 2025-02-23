let copias = Number(prompt('ingrese la cantidad de copias para saber el valor a pagar.... desde 1 a mas de  1000 copias '))
let precio = 0
if(copias > 0 , copias <= 499){
    precio = copias * 120
    alert(`el valor a pagar por la cantidad de copias es ${precio}`)
}else if(copias > 499, copias <= 749){
    precio = copias * 100
    alert(`el valor a pagar por la cantidad de copias es ${precio}`)
}else if(copias > 749, copias <= 999){
    precio = copias * 80
    alert(`el valor a pagar por la cantidad de copias es ${precio}`)
}else if(copias >1000){
    precio = copias * 50
    alert(`el valor a pagar por la cantidad de copias es ${precio}`)
}else{
    alert('error no hay numero de copias ')
}