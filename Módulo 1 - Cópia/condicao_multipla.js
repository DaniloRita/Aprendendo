var semana = new Date()
var mes = new Date()
var ano = new Date()

var dia_sem = semana.getDay()
var dia_mes = mes.getMonth()
var dia_ano = ano.getFullYear()

/*
0= Domingo
1= segunda 
2 = terça
3= quarta*/

switch(dia_sem){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda-Feira")
        break
    case 2:
        console.log("Terça-Feira")
        break
    case 3:
        console.log("Quarta-Feira")
        break
    case 4:
        console.log("Quinta-Feira")
        break
    case 5:
        console.log("Sexta-Feira")
        break
    case 6:
        console.log("Sábado")
        break
    default:
        console.log("Error, Dia inválido")

}
switch(dia_mes){
    case 0:
        console.log("Janeiro")
        break
    case 1:
        console.log("Fevereiro")
        break
    case 2:
        console.log("Março")
        break
    case 3:
        console.log("Abril")
        break
}
console.log(` ${dia_sem}/${dia_mes}: ${dia_ano}`)