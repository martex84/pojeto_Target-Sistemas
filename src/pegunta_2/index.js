function sequenciaFibonacci(valorDesejado) {
    let valorAnterior = 0;
    let valorPosterior = 1;
    let valorTransicao = 1;
    let resultado = false;

    while (valorDesejado >= valorPosterior) {
        valorTransicao = valorPosterior;
        valorPosterior = valorAnterior + valorPosterior;

        console.log(`Valor Anterior = ${valorAnterior} + Valor Atual = ${valorTransicao} == ${valorPosterior}`)

        valorAnterior = valorTransicao;

        if (valorDesejado == valorPosterior) resultado = true;
    }

    if (resultado == true) return `\n\nO valor ${valorDesejado} está presente na sequência`;
    else return `\n\nO valor ${valorDesejado} não está presente na sequência`;
}

console.log(sequenciaFibonacci(21));