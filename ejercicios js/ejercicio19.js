let mensualidad = Number(prompt('ingrese su tipo de mensualidad sabiendo que son de; 15, 30, 3 meses'))

if(mensualidad === 15){
    alert('su valor a pagar por la mensualidad de 15 dias es de 18,000.')
}else if(mensualidad === 30){
    alert('su valor a pagar por la mensualidad de 30 dias es de 35,000.')
}else if(mensualidad=== 3){
    alert('su valor a pagar por la mensualidad de 3 meses es de 86,000.')
}else{
    alert('no se encuentra ninguna mensualidad con los datos ingresados')
}