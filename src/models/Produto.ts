export class Produto {
    private nome: string;
    private preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    public get getNome(): string {
        return this.nome;
    }

    public get getPreco(): number {
        return this.preco;
    }

    public set setNome(novoNome: string) {
        if (novoNome.length === 0) {
            console.log("\nERRO: O nome do produto não pode ser vazio!");
            return;
        }

        this.nome = novoNome;

        console.log("\nNome alterado com sucesso!");
    }

    public set setPreco(novoPreco: number) {
        if (novoPreco < 0) {
            console.log("\nERRO: O preço não pode ser negativo! Bloqueado.");
            return;
        }

        this.preco = novoPreco;

        console.log("\nPreço atualizado com sucesso!");
    }
}