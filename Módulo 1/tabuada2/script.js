function tabuada(){
    let num= document.getElementById("txtn")
    let tabuada= document.getElementById("seltab")

    if (num.value.length == 0){
        window.alert(" Digite o número e tente novamente!")
    } else{
        let n = Number(num.value)
        tabuada.innerHTML=''
        for(c=1; c<=10; c++){
        let item= document.createElement('option')
        item.text=`${n} x ${c} = ${c*n}`
        tabuada.appendChild(item)}
    }
}