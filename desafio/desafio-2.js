resultado(110, 5)

function resultado (numbA, numbB){
    
    rank = numbA - numbB
        if(rank < 10){
            console.log("O herói tem de saldo " + rank + " está no nível de Ferro")
        }   else if(rank >= 10 && rank <= 20){
            console.log("O herói tem de saldo " + rank + " está no nível de Bronze")
        }   else if(rank >= 21 && rank <=50){
            console.log("O herói tem de saldo " + rank + " está no nível de Prata")
        }   else if(rank >=51 && rank<= 80){
            console.log("O herói tem de saldo " + rank + " está no nível de Ouro")
        }   else if(rank >= 81 && rank <= 90){
            console.log("O herói tem de saldo " + rank + " está no nível de Diamante")
        }   else if(rank >=91 && rank <=100){
            console.log("O herói tem de saldo " + rank + " está no nível de Lendário")
        }   else{
            console.log("O herói tem de saldo " + rank + " está no nível de Imortal")
        }
         
    
     
    

}
