/*## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let nomeDoHeroi = "Daniiyk"
let experienciaXp = 10001
let nivel

if (experienciaXp < 1000) {
    nivel = "Ferro"
} else if (experienciaXp > 1000 && experienciaXp <= 2000) {
    nivel = "Bronze"
} else if (experienciaXp > 2000 && experienciaXp <= 6000) {
    nivel = "Prata"
} else if (experienciaXp > 6000 && experienciaXp <= 7000) {
    nivel = "Ouro"
} else if (experienciaXp > 7000 && experienciaXp <= 8000) {
    nivel = "Platina"
} else if (experienciaXp > 8000 && experienciaXp <= 9000) {
    nivel = "Ascendente"
} else if (experienciaXp > 9000 && experienciaXp <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)