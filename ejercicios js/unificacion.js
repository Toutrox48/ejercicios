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
                                                            
    default:
        break;
}