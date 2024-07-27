
class atributo{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo 
        
    }
    
    dano(){
        let ataque 
        
        switch(this.tipo){
            case "mago" :
                ataque = "magia"
            break
            case "guerreiro" :
                ataque = "espada"
                break
            case "monge" :
                ataque = "artes marciais"
                break
            case "ninja" :
                ataque = "shuriken"
                break
            default :
                console.log("O aventureiro está sem classe")
                console.log(`uso de armas sem classe ${-5} de ataque`)
                ataque = "lança"
    	}
        
            
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        
    } 
        
    
}

const personagem = new atributo("Raul", 28, "noob")
personagem.dano()



