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
listarProdutos() {
  return this.produtos
 }

calcularTotal(){
    return this.produtos.reduce((total, p) => total + p.preco, 0)
 }
}
class pagamento{

}

class pedido{

}

class cliente{

}