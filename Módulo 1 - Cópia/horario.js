agora_hora= new Date()
agora_min= new Date()
agora_segun= new Date()

var hora =agora_hora.getHours()
var minuto= agora_min.getMinutes()
var segundo = agora_segun.getSeconds()

console.log(`Agora são exatamente ${hora}:${minuto}:${segundo}.`)
if (hora >0 && hora <7){
    console.log(" Boa Madrugada")
}
else if (hora < 12){
    console.log(`Bom dia.`)
}
else if (hora >= 12 && hora < 18)
{ 
    console.log(` Boa Tarde.`)
}
else if (hora >= 18 && hora <24){
    console.log(` Boa Noite.`)
}
else{
    console.log("Error, Não existe!")
}