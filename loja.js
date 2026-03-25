class produto {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
}

class carrinho{
    constructor(){
       this.produtos = []
    }

    adicionarProduto(produto){
        this.produtos.push(produto)
    }
}

class pagamento{

}

class pedido{

}

class cliente{

}