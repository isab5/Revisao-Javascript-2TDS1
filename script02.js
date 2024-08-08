let quantidadeIngressos = 3;

let batata = 0;

let nome = "Isabella";

for (let i = 1; i <= quantidadeIngressos; i++){
    if (i % 3 === 0){
        batata++;
    }
} 
console.log ( "Parabéns " + nome + "! Você ganhou = " + batata + " batatas na promoção relâmpago!" );