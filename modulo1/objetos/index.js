// 

//1 - Exercícios de interpretação de código

// Leia o código abaixo:

//const filme = {
//	nome: "Auto da Compadecida", 
	//ano: 2000, 
//	elenco: [
//		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//		"Virginia Cavendish"
//		], 
//	transmissoesHoje: [
//		{canal: "Telecine", horario: "21h"}, 
//		{canal: "Canal Brasil", horario: "19h"}, 
//		{canal: "Globo", horario: "14h"}
//    ]
//}
//console.log(filme.elenco[0])
//console.log(filme.elenco[filme.elenco.length - 1])
//console.log(filme.transmissoesHoje[2])
//
//
//a) O que vai ser impresso no console?

// Matheus Nachtergaele
//Virginia Cavendish
//canal: "Globo"
//horário: "14h"
//
//
//	2) Leia o código abaixo:

//const cachorro = {
	//nome: "Juca", 
//	idade: 3, 
	//raca: "SRD"
//}

//const gato = {...cachorro, nome: "Juba"}

//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//console.log(cachorro)
//console.log(gato)
//console.log(tartaruga)

//
//a) O que vai ser impresso no console?

//{nome:"Juca", idade: 3, raça: "SRD"}

//{nome: "Juba", idade:3, raça: "SRD"}

//{nome: Jubo, idade:3, raça: "SRD"}

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//Essa sintaxe é chamanda de espalhamento(ou SPREAD) quer permite realizar uma cópia de um objeto (ou arrays) inteiro.
//Feita essa cópia podemos manipular ela da maneira que quisermos.
//
//

// Leia o código abaixo:

//function minhaFuncao(objeto, propriedade) {
//	return objeto[propriedade]
//}

//const pessoa = {
 // nome: "Caio", 
 // idade: 23, 
  //backender: false
//}

//console.log(minhaFuncao(pessoa, "backender"))
//console.log(minhaFuncao(pessoa, "altura"))

//
//a) O que vai ser impresso no console?
//False
//Indefinida


//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

//False porque na backender tem a condição que seria false e não true
//
//Indefinida, porque não tem dados de altura e sim de idade
//
//////////////////////////////////////////////////////////////////////////////////////

//////Exercícios de escrita de código/////
//
//1) Resolva os passos a seguir:
//
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos
// (um array que sempre terá exatamente três apelidos). Depois, escreva uma função
// que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
//
//Exemplo de entrada
//const pessoa = {
	//	nome: "Amanda", 
//	apelidos: ["Amandinha", "Mandinha", "Mandi"]
 //}
 // Exemplo de saída
 //"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

 //console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}, `)

 //const pessoa1 = {
//	 nome1: "Luciana",
//	 apelidos: ["Lu", "Luluzinha", "Ciana"]
 //}
 //console.log(`Eu sou ${pessoa1.nome1}, mas pode me chamar de ${pessoa1.apelidos}, `)


 //b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
 //mas com uma nova lista de três apelidos.
 // Depois, chame a função feita no item anterior passando como argumento o novo objeto.

 //function novaPessoa(Pessoa) {
  //  const novaPessoa = {
   //   ...Pessoa} // SPREAD OPERATOR
///	  NovosApelidos:  ["Angel", "Deca", "Dequinha"]
	//	  {
	//	  nome: "Angelica"
	//  }
	//}  

 
	//console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de ${novaPessoa.apelidos2[0]}, ${novaPessoa.apelidos2[1]}, ${novaPessoa.apelido2[2]}`)
// }
 
 
 
	
//2) Resolva os passos a seguir: 

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
//const pessoa = {
	//nome: "Bruno", 
 // /idade: 23, 
//	profissao: "Instrutor"
//}
//const novaPessoa = {
//	nome: "Bruno",
//	idade: 23,
//	profissao: "Instrutor"
//}
//return (pessoa)
//console.log(pessoa)

///minhaFuncao(pessoa)

// Retorno: ["Bruno", 5, 23, "Instrutor", 9]

//b)Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

//function novaPessoa (Pessoa)
//const novaPessoa = {
	//...Pessoa,

//}
//1. O valor de `nome`
//{nome: "Bruno"}

//2. O numero de caracteres do valor `nome`
//{}

//3. O valor de `idade`
///{idade:"23"}

//4. O valor de `profissão`
///profissao: "Instrutor"}

//5. O numero de caracteres do valor `profissão`

//3)Resolva os passos a seguir: 

//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
//nome (string) e disponibilidade (boolean - devem começar como true)
//c)Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
//Invoque essa função passando os três objetos criados.
//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.
//
const nome = "carrinho"
console.log(nome)

const fruta1 = "banana"
const fruta2 = "goiaba"
const fruta3 = "melão"
console.log()

const listaDeCompras = ["goiaba", "melão", "banana", "laranja"]
const ItemDaLista = [listaDeCompras]
console.log(ItemDaLista)

function imprimirFrutas(fruta1, fruta2, fruta3)
imprimirFrutas("banana", "goiaba", "melão")

//
//
//