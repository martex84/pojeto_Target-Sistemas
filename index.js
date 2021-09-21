function iniciarProjeto() {
    console.log("Para Iniciar o processo selecione a pergunta que deseja ver o resultado:" + "\n" +
        "Pergunta 1: Resultado da soma" + "\n" +
        "Pergunta 2: Sequência de Fibonacci" + "\n" +
        "Pergunta 3: Faturamento Diário" + "\n" +
        "Pergunta 4: Porcentual de Representação" + "\n" +
        "Pergunta 5: Inversão de Caracteres"
    )

    realizarPergunta();
}

function realizarPergunta() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Pergunta: ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Obrigado, $`);

        rl.close();
    });
}