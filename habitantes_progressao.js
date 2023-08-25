/*

Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3%,
e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. 
Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

*/

let PaisA = 80000;
let PaisB = 200000;

let contadorAnos = 0;

const taxaAnualPaisA = 0.03;
const taxaAnualPaisB = 0.015;

for (let i = 1; PaisA < PaisB; i++){

    if((PaisA = PaisA + Math.floor(PaisA * taxaAnualPaisA)) >= (PaisB = PaisB + Math.floor(PaisB * taxaAnualPaisB)))
    {
        console.log(`O país A possui uma população igual ou superior ao país B, após decorridos ${i} anos.`)
        console.log(`População país A = ${PaisA} depois de 63 anos.`)
        console.log(`População país B = ${PaisB} depois de 63 anos.`)
    }
}

/* RESPOSTA: A população do país A, será maior ou igual após decorridos 63 anos */

