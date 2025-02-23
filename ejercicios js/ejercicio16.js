let  N1 = Number(prompt('digite su nota en el area de la Fisica'))
let  N2 = Number(prompt('digite su nota en el area de la Quimica'))
let  N3 = Number(prompt('digite su nota en el area de la Biologia'))
let  N4 = Number(prompt('digite su nota en el area de la Matematicas'))
let  N5 = Number(prompt('digite su nota en el area de la Informática'))

let notaF = ((N1 + N2 + N3 + N4 + N5) /50) * 100


if(notaF >= 80  ){
    console.log(`su nota  es ${notaF}, y su calificacion cualitativa es superior`)
    }else if(79<= notaF, notaF >= 60){
        console.log(`su nota  es ${notaF}, y su calificacion cualitativa es buena `)
    }
   else{
       console.log(`su nota  es ${notaF}, y su calificacion cualitativa es mala`)
    }