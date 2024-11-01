class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Define o tipo de ataque de acordo com o tipo do herói
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        // Exibe a mensagem de ataque
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi("Gandalf", 100, "mago");
heroi1.atacar(); // Saída: o mago atacou usando magia

const heroi2 = new Heroi("Aragorn", 87, "guerreiro");
heroi2.atacar(); // Saída: o guerreiro atacou usando espada

const heroi3 = new Heroi("Master Oogway", 1000, "monge");
heroi3.atacar(); // Saída: o monge atacou usando artes marciais

const heroi4 = new Heroi("Naruto", 17, "ninja");
heroi4.atacar(); // Saída: o ninja atacou usando shuriken
