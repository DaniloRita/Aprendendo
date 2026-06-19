let num= [9, 3, 4, 4, 5, 3, 2, 5]
console.log(num)

num.sort()
console.log(num)
/*
for(let pos= 0; pos< num.length; pos ++ ){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (let pos in num){
    console.log(`A posição ${ pos} tem valor ${num[pos]}`)
}
let pos = num.indexOf(9)
if (pos == -1){
    console.log(' O valor não foi encontrado')

}else{ 
    console.log( `A posiçaõ do ${pos} tem valor ${num[5]}`)}