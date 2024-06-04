let tenis = {
    // chave: valor
    cor: "branco",
    tamanho: 42,
    emEstoque: true
}

console.log(tenis);

//ACESSANDO PROPRIEDADES DO OBJETO - NOTAÇÃO DE PONTO

console.log(tenis.cor);
console.log(tenis.tamanho);
console.log(tenis.emEstoque);

//ACESSANDO PROPRIEDADES DO OBJETO - COLCHETES

console.log(tenis["cor"]);
console.log(tenis["tamanho"]);
console.log(tenis["emEstoque"]);

//CRIANDO NOVAS PROPRIEDADES PARA O OBJETO

tenis.valor = 200;
console.log(tenis);

//ALTERANDO PROPRIEDADES JÁ EXISTENTES

tenis.cor = "azul";
console.log(tenis.cor);