function pergunta1() {
    const indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
        console.log(`K = ${k} || Soma = ${soma}`)
    }

    return soma
}

console.log(pergunta1());