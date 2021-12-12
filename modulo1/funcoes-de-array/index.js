// EXERCICIOS DE FUNCOES ARRAYS

//Exercícios de interpretação de código

//1.  Leia o código abaixo
    
//const usuarios = [
  //{ nome: "Amanda Rangel", apelido: "Mandi" },
 // { nome: "Laís Petra", apelido: "Laura" },
//  { nome: "Letícia Chijo", apelido: "Chijo" }
///]

//const novoArrayA = usuarios.map((item, index, array) => {
  // console.log(item, index, array)
//})

//a) O que vai ser impresso no console?

//Objetc 0 Array(3)  0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
//         1: {nome: 'Laís Petra', apelido: 'Laura'}
//         2: {nome: 'Letícia Chijo', apelido: 'Chijo'}
//length: 3
//[[Prototype]]: Array(0)
// Object 1 Array(3)0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
//         1: {nome: 'Laís Petra', apelido: 'Laura'}
//         2: {nome: 'Letícia Chijo', apelido: 'Chijo'}
//length: 3
//[[Prototype]]: Array(0)
// Object 2 
//         0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
//         1: {nome: 'Laís Petra', apelido: 'Laura'}
//         2: {nome: 'Letícia Chijo', apelido: 'Chijo'}
//length: 3
//[[Prototype]]: Array(0)



//2) Leia o código abaixo: 

//const usuarios = [
   // { nome: "Amanda Rangel", apelido: "Mandi" },
  //  { nome: "Laís Petra", apelido: "Laura" },
  //  { nome: "Letícia Chijo", apelido: "Chijo" },
 // ]
  
 // const novoArrayB = usuarios.map((item, index, array) => {
 //    return item.nome
 // })
  
 // console.log(novoArrayB)

  //a) O que vai ser impresso no console?

  //(3) ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']
// Sendo que o retorn pediu para receber somente o item nome

//
//3)Leia o código abaixo:

//const usuarios = [
  //  { nome: "Amanda Rangel", apelido: "Mandi" },
   // { nome: "Laís Petra", apelido: "Laura" },
  //  { nome: "Letícia Chijo", apelido: "Chijo" },
 // ]
  
  //const novoArrayC = usuarios.filter((item, index, array) => {
 //    return item.apelido !== "Chijo"
 // })
  
 // console.log(novoArrayC)

 // a) O que vai ser impresso no console?

 // {nome: 'Amanda Rangel', apelido: 'Mandi'}
//{nome: 'Laís Petra', apelido: 'Laura'}

// A funçao filter pede para aparecer somente os apelidos, entretando sem o apelido Chijo.

//////////////////////////////////////////////////////////////////////////////////////////

////////////   Exercícios de escrita de código

//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    
//const pets = [
  // { nome: "Lupin", raca: "Salsicha"},
   //{ nome: "Polly", raca: "Lhasa Apso"},
   //{ nome: "Madame", raca: "Poodle"},
   //{ nome: "Quentinho", raca: "Salsicha"},
   //{ nome: "Fluffy", raca: "Poodle"},
   //{ nome: "Caramelo", raca: "Vira-lata"},
//]
    
      

//a) Crie um novo array que contenha apenas o nome dos doguinhos

//const pets = [
   /// { nome: "Lupin", raca: "Salsicha"},
  //  { nome: "Polly", raca: "Lhasa Apso"},
  //  { nome: "Madame", raca: "Poodle"},
   // { nome: "Quentinho", raca: "Salsicha"},
  //  { nome: "Fluffy", raca: "Poodle"},
  //  { nome: "Caramelo", raca: "Vira-lata"},
 //]

//const novoArray = pets.map((item, index, array) => {
    //return item.nome 
//})
//console.log(novoArray)
  

//b) Crie um novo array apenas com os [cachorros salsicha]

////const pets = [
   // { nome: "Lupin", raca: "Salsicha"},
   // { nome: "Polly", raca: "Lhasa Apso"},
   // { nome: "Madame", raca: "Poodle"},
  //  { nome: "Quentinho", raca: "Salsicha"},
  //  { nome: "Fluffy", raca: "Poodle"},
  //  { nome: "Caramelo", raca: "Vira-lata"},
 //]

 //const novoArrayA = pets.filter((item, index, array) => {
 //   return item.raca == "Salsicha"
 //})
 
 //console.log(novoArrayA)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são
// poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar
// o/a `[NOME]`!"

//const pets = [
 // { nome: "Lupin", raca: "Salsicha"},
 // { nome: "Polly", raca: "Lhasa Apso"},
 // { nome: "Madame", raca: "Poodle"},
 // { nome: "Quentinho", raca: "Salsicha"},
 // { nome: "Fluffy", raca: "Poodle"},
 // { nome: "Caramelo", raca: "Vira-lata"},
//]
 
//const novoArrayB = pets.filter((item) => {
  //  return item.raca === "Poodle"
//})

//const CupomDesconto = novoArrayB.map((item) =>{
   // return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.raca}`
//})
//console.log(CupomDesconto)
//
//2)Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo 
//utilizando as funções de array map e filter:

//const produtos = [
   // { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   // { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    ///{ nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   // /{ nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   // { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  //  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  //  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  //  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   // { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   // { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 //]

 //a) Crie um novo array que contenha apenas o nome de cada item:

 //const ItensMercados = produtos.map((item) => {
   // return item.nome
 //})
 //console.log(ItensMercados)

 //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
 // aplicando 5% de desconto em todos eles

//const produtosDescontos = produtos.map((item) => {
 // const precoMenosCinco = item.preco * 0.95 
 // return item.nome + '' + precoMenosCinco
//})
//console.log(produtosDescontos)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
//const produtosBebidas = produtos.filter((item)=> {
  //  return item.categoria === "Bebidas"
//})
//console.log(produtosBebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
//const produtosIpe = produtos.filter((item)=> {
 //   return item.nome.includes ("Ypê")
//})
//console.log(produtosIpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array 
//deve conter frases apenas  dos itens cujo nome contenha a palavra "Ypê".

//function contenhaProdutoIpe (item, indice, array){
   // if(item.nome.includes("Ypê"))
  //  return  `Compre ${item.nome} por ${item.preco}`
//}

//const imprimirComIpe = produtos.filter(contenhaProdutoIpe)
//const imprimirComPreco = produtos.map(imprimirComIpe)
//console.log(imprimirComPreco)
    

const numerosPrimos = (1.2, 3, 5, 6, 11, 13, 15, 17, 19, 21)
for(numerosPrimos = 1; numero <= 25; numero++) {
  se (numero % 2 != 0) 
      imprime(numerosPrimos);
  }

  