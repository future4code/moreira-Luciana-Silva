
//Exercícios de interpretação de código

//1. Leia o código abaixo
    

 //function minhaFuncao(variavel) {
  //return variavel * 5
  // }
    
 //console.log(minhaFuncao(2))

 // console.log(minhaFuncao(10))

 // a) O que vai ser impresso no console?
   //  10 // 2*5
    //  50// 10*5


 // b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função 
//minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// .. Não apareceria nada, porque o console.log server para exibir os valores das varíaveis

//2 - 2. Leia o código abaixo
 
   // let textoDoUsuario = prompt("Insira um texto");
    
   // const outraFuncao = function(texto) {
  //	return texto.toLowerCase().includes("cenoura")
  // }
    
  //const resposta = outraFuncao(textoDoUsuario)
   // console.log(resposta)

    
  //  a. Explique o que essa função faz e qual é sua utilidade
// o  toLoWerCase deixa o texto tudo minúsculo
// e o comando includes vai procurae no texto se existe a palavar cenoura colocando true ou false
  //
    
   // b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:

  // i.   `Eu gosto de cenoura`
 //toLoWerCase = eu gosto de cenoura
 //includes true
  // 
  // ii.  `CENOURA é bom pra vista`
//toLoWerCase = cenoura é bom pra vista
 //includes false
//
// iii. `Cenouras crescem na terra`
//toLoWerCase = cenouras crescem na terra
 //includes false



 //        Exercícios de escrita de código
//1 - Escreva as funções explicadas abaixo:

 //a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

//function imprimirNomes (nome, idade, cidade, profissao) {
 //console.log("Eu sou" (nome), "tenho" (anos), "moro em "(cidade), "e sou" (profissao)

   // }
    //return frase

    //imprimirNomes (nome, idade, cidade, profissao)

     //   console.log(imprimirNomes("Luciana", "46", "Montes Claros", "estudante"))

// b)         

//2) Escreva as funções explicadas abaixo:

//a) a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function somaDoisnumeros (numero1, numero2)
const soma = numero1 + numero2
return soma

const resultado = somaDoisnumeros (Number(prompt("6")
   console.log(resultado)





/// 3)
