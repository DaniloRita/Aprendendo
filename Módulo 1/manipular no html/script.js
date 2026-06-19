function contar(){
    let ini= document.getElementById("txtin")
    let fim= document.getElementById("txtfi")
    let passo = document.getElementById("txtpa")
    let res = document.getElementById('res')

    if ( ini.value.length== 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML= ` Impossível contar, <strong>Tente Novamente!</strong>`
    }else {
        res.innerHTML = ' Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0){
            window.alert("passo invlálido, considerando o passo 1!")
            p = 1
        }
        if (i < f){
            // contagem crescente
        for(let c= i; c<= f; c += p){
            res.innerHTML +=`${c}\u{1F449}`//  SITE: full emoji List v12.0
            
        }
        } else{
            // contagem regressiva
            for(c=i; c>=f; c -= p){
                res.innerHTML += ` ${c}\u{1F449}`
            }
                res.innerHTML += ` \u{1F3C1}`
        }
    }
}