import readLine from "readline-sync";
import { Produto } from "./src/models/Produto.js";

const objProduto = new Produto("Corsa", 15000);

console.log("Nome:", objProduto.getNome);
console.log("Preço:", objProduto.getPreco);

objProduto.setNome = readLine.question("Digite o novo nome: ");

objProduto.setPreco = readLine.questionFloat("Digite o novo preco: ");

console.log("\n--- Produto atualizado ---");
console.log("Nome:", objProduto.getNome);
console.log("Preço:", objProduto.getPreco);