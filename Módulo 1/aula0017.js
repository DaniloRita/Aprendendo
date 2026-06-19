let nom={ nome: "danilo",
     idade: 19,
      engordar(p=0){
        console.log('idade aumentou')
        this.idade += p
      }
    }
    nom.engordar(1)
console.log(`O nome ${nom.nome}, com ${nom.idade}`)