const i = Number(prompt("hay ejercicios del 1 al 25, digite el numero para continuar: 1.mayor de edad - 2.positivo o negativo - 3.ocupacion - 4.registro - 5.semaforo - 6.termometro - 7.atencion - 8.cuenta - 9.robot - 10.carro - 11.semana - 12.salario - 13.par o impar - 14.lavadora - 15.par o impar - 16.nota final - 17.mayor - 18.subsidio - 19.gym - 20.triangulo - 21.fotocopias - 22.compu' defectuosa - 23.carro defectuoso - 24.operador - 25.sandwish"));





switch (i) {
    case 1:
        let estatura  = Number(prompt("Nesecitamos que digite su altura (cm):"))

        if (estatura >= 150){
            alert('usted puede pasar...')
        }else{
            alert(`usted no puede pasar su estatura es de ${estatura} centimetros...`)
        }
        break;

    case 2:
        let numero = Number(prompt("digite un numero:"))

        if (numero >= 0){
            alert('su numero es positivo')
        }else{
            alert('su numero es negativo')
        }
        break;

    case 3:
        let ocupacionlocal = prompt('El local se encuentra arrendado? (si) o (no)')
        let nombrelocal = prompt('como se llama el Local')

        if (ocupacionlocal == "si" ){
            alert(`el local ${nombrelocal} se encuentra arrendado`)
        }else{
            alert(`el local ${nombrelocal} se encuentra disponible`)
        }
        break;

    case 4:
        const email = prompt('digite su correo:')
        const contraseña = prompt('digite su contraseña:')

        if(email == "emmanueltapasco0@gmail.com" && contraseña == "12345"){
            alert('BIENVENIDO su ingreso fue un exito')
        }else{
            alert('su contraseña o email es invalido')
        }
            break;

    case 5:
        let colorsemaforo = prompt("De que color esta el semaforo: (verde) (amarillo) (rojo)")

        if (colorsemaforo == "verde"){
            alert(`el semaforo esta en ${colorsemaforo} puede seguir`)
        }else if(colorsemaforo == "rojo"){
            alert(`el semaforo esta en ${colorsemaforo} debe parar`)
        }else if(colorsemaforo == "amarillo"){
            alert(`el semaforo esta en ${colorsemaforo} preparese `)
        }else{
            alert('el semaforo esta dañado!!!!!!')
        }
        break;

    case 6:
        let temperatura = prompt("digite su temperatura actual:")
        temperatura >= 40 ? alert(`usted tiene fiebre su temperatura es de ${temperatura} grados`) :
        alert(`usted no tiene fiebre su temperatura es de  ${temperatura} grados`)
        break;

    case 7:
        cliente = prompt("")
        cliente == 'normal'?alert(`va hacer atendido en el madulo 1, por ser cliente ${cliente}`) :
        cliente == 'preferencial'?alert(`usted va hacer atendido en el modulo 2 y 3,por ser cliente ${cliente}`) :
            alert(`usted no es cliente del banco, porfavor dirijase al modulo 4`)
        break; 

    case 8:
        let emailbasedatos = 'emmanueltapasco07@gmail.com'
        let clavebasedatos = '1234567'
        let emailingresado = prompt("ingrese su email:")
        let claveingresada = prompt("ingrese su contraseña:")
        let nombreingresado = prompt("Cual es tu nombre?")

        emailbasedatos == emailingresado && clavebasedatos == claveingresada ? console.log(`${nombreingresado} bienvenido!, selecione opciones del sistema`) :
            alert(`acceso denegado......:(`)
        break;

    case 9:
        let direccion = prompt("en que direccion mandas al robot, derecha, izquierda, arriba, abajo.")

        direccion == 'derecha' ? alert(`robot moviendose hacia la derecha`) :
            direccion == 'izquierda'? alert(`robot moviendose hacia la izquierda`) :
                direccion == 'arriba'? alert(`robot moviendose hacia arriba`) :
                    direccion == 'abajo'? alert(`robot moviendose hacia abajo`) :
                        alert(`movimiento extraño`)
        break;

    case 10:
        let encendido = prompt("el carro esta encendido? (si) o (no)")
        let velocidad = prompt('a que velozidad va el carro')

        encendido == "si" ? alert(`su carro esta encendido`) :
            velocidad == 0 ? alert  (`carro frenado`) :
                velocidad > 0 && velocidad <=100 ? alert(`carro en marcha`) :
                    alert(`evite un accidente ... exceso de velocidad`) 
        break;

    case 11:
        let dia = 'miercoles'
        let clase = 'algoritmos'

        dia === 'miercoles' ? alert(`la clase de hoy es ${clase}`) :
            alert(`no se encuentra ningun dato agendado`)
        break;
            
    case 12:
        let usuario = prompt('ingrese su nombre');
        let horas = Number(prompt('ingrese el numero de horas'));

        let salario = Math.floor(horas * 30000);

        if (numerohoras <= 10) {
            alert(`Señor ${usuario}, la cantidad de horas trabajadas son ${horas}, por lo tanto su salario es ${salario}`);
        } else if (numerohoras >= 11) {
            salario += horas * 3000; 
            alert(`Señor ${usuario}, la cantidad de horas trabajadas son ${horas}, por lo tanto su salario es ${salario}`);
        }else{
            alert(`señor(a) ${usuario}, la cantidad de horas trabajadas son ${horas}, por lo tanto su ${salario}`)
        }
        break;
    
    case 13:
        let num = Number(prompt('digite un numero señor(a) usuario '))
        let resultado = num % 2

        if (resultado === 0){
            alert(`el numero que digito es par`)
        }else if(resultado === 1){
            alert(`el numero ingresado es impar`)
        }
        break;    
    
    case 14:
        let tipolavadora = Number(prompt('selecione el tipo de lavadora que desea utilizar tipo 1 o 2'))
        let numerodelavadoras = Number(prompt('digite la cantidad de lavadoras alquiladas'))
        let h = Number(prompt('digite la cantidad de horas de alquiler '))

        let lavadora1 = 4000
        let lavadora2 = 3000
        let total = 0

        if( tipolavadora === 1 ){
            total += lavadora1 * h * numerodelavadoras
            alert( `el costo total por alquilar ${numerodelavadoras} lavadoras de tipo ${tipolavadora} por ${horas} horas : es de ${total}`  )
            }else if (tipolavadora === 2){
                total += lavadora2 * h * numerodelavadoras
                alert( `el costo total por alquilar ${numerodelavadoras} lavadoras de tipo ${tipolavadora} por ${horas} horas : es de ${total}`  )
            }else{
                alert('ERROR.......... vuelve a intentarlo')
            }
        if (numerodelavadoras >= 3){
            let descuento = total * 0.03
            total -= descuento
            alert(`con el descuento del 3% usted debe de pagar un total de ${total}`)
        }
        break;
        
    case 15:
        let n = Number(prompt("Por favor ingresa un número:"))

        if (n % 2 === 0) {
            alert(`El número ${n} es par.`)
        } else {
            alert(`El número ${n} es Impar.`)
        }
        break;

    case 16:
        let  N1 = Number(prompt('digite su nota en el area de la Fisica'))
        let  N2 = Number(prompt('digite su nota en el area de la Quimica'))
        let  N3 = Number(prompt('digite su nota en el area de la Biologia'))
        let  N4 = Number(prompt('digite su nota en el area de la Matematicas'))
        let  N5 = Number(prompt('digite su nota en el area de la Informática'))

        let notaF = ((N1 + N2 + N3 + N4 + N5) /50) * 100


        if(notaF >= 80  ){
            alert(`su nota  es ${notaF}, y su calificacion cualitativa es superior`)
            }else if(79<= notaF, notaF >= 60){
                alert(`su nota  es ${notaF}, y su calificacion cualitativa es buena `)
            }
        else{
            alert(`su nota  es ${notaF}, y su calificacion cualitativa es mala`)
            }
        break;

    case 17:
        let num1 = Number(prompt('ingrese un numero '))
        let num2 = Number(prompt('ingrese el segundo numero'))
        let num3 = Number(prompt('ingrese el tercer numero'))


        if( num1> num2 , num1 > num3 ){
            alert('el primer numero es mayor al resto')
        }
        else if( num2> num1 , num2 > num3){
            alert('el segundo numero es mayor')
        }
        else if( num3 > num1 , num3 > num2){
            alert('el tercer numero es mayor')
        }else{
            alert('los tres numero son iguales ')
        }    
        break;

    case 18:
        let g = prompt('señor(@) usuario ingrese su genero, si es Hombre  o  si es Mujer ')
        let edad = Number(prompt('digite su edad señor(@) usuario'))


        if(g === 'mujer' , edad >= 50){
            alert('señora usuaria usted Reciben, $120,000.')
        }else if (g === 'mujer' , edad <= 50 , edad >= 30){
            alert('señora usuaria usted Reciben, $100,000.')
        }else if(g === 'mujer' , edad < 30){ 
            alert('señora usuaria usted no recibe ayuda.')
        }

        Function (seletgenero = 'hombre' )
            seletgenero==='hombre'
            alert('todo señor usuario Reciben $40,000 (sin importar la edad).')
        break;

    case 19:
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
        break;

    case 20:
        let lado1 = Number(prompt('ingrese el primer angulo'))
        let lado2 = Number(prompt('ingrese el segundo angulo'))
        let lado3 = Number(prompt('ingrese el tercer angulo'))

        let triangulo = lado1 +lado2 + lado3

        if ( triangulo === 180){
        alert('este es un triangulo valido') 
        }else{
            alert('el triangulo no es valido')
        }
        break;

    case 21:
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
        break;

    case 22:
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
        break;

    case 23:
        let modelo = Number(prompt('digite el numero de modelo de su carro'))

        if(modelo != [119, 179, 189, 195, 221, 780]){
            alert('su modelo de carro no es defectuoso')
        }else{
            alert('su modelo de carro  es defectuoso')
        }
        break;

    case 24:
        op=prompt("ingrese su operador...  (tigo)-(claro)-(movistar)")
        min=Number(prompt("digite la cantidad de minutos consumidos internacionalmente"))
        break;

    case 25:
        let san = Number(prompt('ingrese 1 si quiere Sandwich grande o 2 si quiere Sandwich pequeño...'))
        let adi = prompt('desea agregar alguna de las siguentes productos como tocineta, jalapeño, pavo, queso, ninguna  ')

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
        break;

    default:
        alert("El valor no es valido...")
        break;
}