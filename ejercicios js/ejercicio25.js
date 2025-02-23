let san = Number(prompt('ingrese 1 si quiere Sandwich grande o 2 si quiere Sandwich pequeño...'))
let adi = prompt('desea agregar alguna de las siguentes productos como tocineta, jalapeño, pavo, queso, ninguna  ')
let total
if( san=== 1 && adi==='ninguna' ){
    total = 12000 
    alert('el total a pagar por su sandwich es de ${total}')
}else if(san=== 1 && adi ==='tocineta'){
    total = 12000 + 3000 
    alert('el total a pagar por su sandwich con adicion de tocineta es de ${total}')
}else if(san=== 1 && adi === 'pavo'){
    total = 12000 + 3000
    alert('el total a pagar por su sandwich con adicion de pavo  es de ${total}')
}else if(san === 1 && adi === 'queso'){
    total = 12000 + 2500
    alert('el total a pagar por su sandwich con adicion de queso  es de ${total}')
}else if(san === 1 && adi === 'jalapeño'){
    total = 12000 + 0
    alert('el total a pagar por su sandwich con adicion de jalapeño es de ${total}')
}else if(san === 2 && adi==='ninguna'){
    total = 6000 
    alert('el total a pagar por su sandwich es de ${total}')
}else if(san === 2 && adi==='tocineta'){
    total = 6000 + 3000
    alert('el total a pagar por su sandwich es de ${total}')
}else if(san=== 2 && adi==='pavo'){
    total = 6000 + 3000
    alert('el total a pagar por su sandwich es de ${total}')
}else if(san=== 2 && adi==='queso'){
    total = 6000 + 2500
    alert('el total a pagar por su sandwich es de ${total}')
}else if(san=== 2 && adi==='jalapeño'){
    total = 6000 + 0
    alert('el total a pagar por su sandwich es de ${total}')
}else{
    alert('por favor haga su orden segun las reglas ')
}