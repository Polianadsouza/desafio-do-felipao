let nomeHeroi = "Oliver";
let pontosDeVida = 7002;
let nivel;

if (pontosDeVida <= 1001) {
    nivel = "ferro"
} else if (pontosDeVida <= 2000) {
    nivel = "bronze"
} else if (pontosDeVida >= 2001 && pontosDeVida <= 5000) {
    nivel = "prata"
} else if (pontosDeVida >= 5001 && pontosDeVida < 7000 ) {
    nivel = "ouro"
} else if (pontosDeVida >= 7001 && pontosDeVida < 8000) {
    nivel = "platina"
} else if (pontosDeVida >= 8001 && pontosDeVida < 9000) {
    nivel = "ascendente"
} else if (pontosDeVida >= 9001 && pontosDeVida < 10000) {
    nivel = "imortal"
} else if (pontosDeVida >= 10000) {
    nivel = "radiante"
}

console.log("O heroi " + nomeHeroi + " está no nivel " + nivel);node
