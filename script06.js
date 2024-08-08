

let armas = ["Laser", "Misseis", "Lança-chamas", "Canhões de água", "armas de rede"];

let ataques = [];

ataques.push("KRASNY")
ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[4]);
ataques.push(armas[0]);


for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log (`Nome do robô: ${ataques[i]}`);
    } else {
        console.log(`Ataque ${i}: ${ataques[i]}`);
    }
}

