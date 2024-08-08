let metaLivros = 5;

let livrosLidos = ["Teto para dois", "Noiva", "A razão do amor", "A hipótese do amor"];

let quantidade = metaLivros - livrosLidos.length;

for (let i = 0; i < livrosLidos.length; i++) {
        console.log (`Livros Lidos: ${livrosLidos[i]}`);
}

if (livrosLidos.length >= metaLivros){
    console.log("Parabéns! Você atingiu sua meta de leitura!")
} else {
    console.log("Você está progredindo! Faltam " + quantidade + " livros para atingir sua meta.")
}
