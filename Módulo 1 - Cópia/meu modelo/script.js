 function carregar(){
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
msg.innerHTML= ` Agora são ${hora} horas`
if ( hora >=0 && hora < 12){
    // bom dia
    img.src= "modelomanha1.jpg"
    document.body.style.background=" #7C7269"
}
 else if (hora >=12 && hora < 18){
    // boa tarde
    img.src= "modeotarde13.jpg"
    document.body.style.background="#B59C7E"
 }else {
    // boa noite
    img.src="modelnoite1.png"
    document.body.style.background= "#F6B086"
 }
 }