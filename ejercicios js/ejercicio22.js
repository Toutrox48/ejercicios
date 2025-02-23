let problem1 = prompt('digite si,  su computadora emite un pitido al iniciar y si su disco duro gira, sino emite ninguno digite no ')
let problem2 = prompt('digite si,  su computadora emite un pitido  y si la unidad no gira, sino emite ninguno digite no ')
let problem3 = prompt('digite si,  su computadora emite un pitido  y si el disco no gira, sino emite ninguno digite no')



if(problem1 === 'si'){
    alert('pongase en contacto con el técnico de apoyo ')
}else if(problem2 === 'si'){
    alert('verificar los contactos de la unidad')
}else if(problem3 === 'si'){
    alert('Traiga la computadora para repararla en la central')      
}else{
    alert('compruebe la conexion de los altavoces')
}