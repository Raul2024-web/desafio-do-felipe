const nome = "Raul"
let xp = 1000
const mensagem = "O herói de nome " + nome + " está no nível "  

if (xp < 1000){
    console.log(mensagem + "Ferro")
} else if (xp >= 1001 && xp <= 2000){
    console.log(mensagem + "Bronze")
} else if (xp >= 2001 && xp<=5000){
    console.log(mensagem + "Prata")
} else if (xp >= 6001 && xp <= 7000){
    console.log(mensagem + "Ouro")
} else if (xp >= 7001 && xp <= 8000){
    console.log(mensagem + "Platina")
} else if (xp >= 8001 && xp <= 9000){
    console.log(mensagem + "Ascendente")
} else if (xp >= 9001 && xp <= 10000){
    console.log(mensagem + "Imortal")
} else if (xp >= 10001){
    console.log(mensagem + "Radiante")
} else {
    console.log(mensagem + "Jhon Travolta")
}
