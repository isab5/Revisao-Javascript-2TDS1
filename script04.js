let quantidadePalmas = 16;

let mensagem = "";

for (let i = 1; i <= quantidadePalmas; i++) {
    mensagem += "👏";
    if (i % 5 === 0) {
        mensagem += "🎉";
        
    }
}
console.log(mensagem);