// Função para calcular o saldo e determinar o nível do jogador
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas; // Calcula o saldo de vitórias
    let nivel;

    // Estrutura de decisão para determinar o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel }; // Retorna um objeto com saldo e nível
}

// Função principal para interação com o usuário
function calculadoraPartidas() {
    const vitorias = parseInt(gets()); // Lê o número de vitórias
    const derrotas = parseInt(gets()); // Lê o número de derrotas

    // Chama a função para calcular saldo e nível
    const { saldoVitorias, nivel } = calcularNivel(vitorias, derrotas);

    // Imprime o resultado final
    print(`O Herói tem de saldo ${saldoVitorias} está no nível de ${nivel}`);
}

// Chama a função principal
calculadoraPartidas();
