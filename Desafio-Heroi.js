let nomeHeroi = "Oliver";
let pontosDeVida = 7002;
let nivel;

if (pontosDeVida <= 1000) {
    nivel = "Ferro"
} else if (pontosDeVida >= 1001 && pontosDeVida <= 2000) {
    nivel = "Bronze"
} else if (pontosDeVida >= 2001 && pontosDeVida <= 5000) {
    nivel = "Prata"
} else if (pontosDeVida >= 5001 && pontosDeVida < 7000 ) {
    nivel = "Ouro"
} else if (pontosDeVida >= 7001 && pontosDeVida < 8000) {
    nivel = "Platina"
} else if (pontosDeVida >= 8001 && pontosDeVida < 9000) {
    nivel = "Ascendente"
} else if (pontosDeVida >= 9001 && pontosDeVida < 10000) {
    nivel = "Imortal"
} else if (pontosDeVida >= 10000) {
    nivel = "Radiante"
}

console.log("O heroi " + nomeHeroi + " está no nivel " + nivel);
