let amigo = {nome:'Nicolas', 
sexo:'M', 
peso: 79.0, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)