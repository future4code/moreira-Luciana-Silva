//Exercícios de interpretação de código

//Tente responder os exercícios dessa seção sem executar o código.Se ficar muito 
//difícil, pode rodar no seu computador para analisar e pensar sobre o resultado. 

//1) 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
    
      // let valor = 0
    //for(let i = 0; i < 5; i++) {
    //  valor += i
    //}
    //console.log(valor)
//
//Resultado impresso = 10


//2. Leia o código abaixo:
    
//const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//for (let numero of lista) {  o for off lê a lista um por um e verifica se cada um é maior que 18 
// eu entro dentro do if e imprimo o loop maior que 18
 // if (numero > 18) {
      //  console.log(numero)
   // }
//}

//a) O que vai ser impresso no console?
// 19, 21, 23, 25,27,30 ou seja os valores maiores que 18

//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
//é suficiente? Se sim, o que poderia ser usado para fazer isso?
//Não, porque somente o for percorre os valores contidos em uma array

//3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
//*
//**
//***
//**** 

//const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//let quantidadeAtual = 0
//while(quantidadeAtual < quantidadeTotal){
 //// let linha = ""
 // for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
 //   linha += "*"
 // }
 // console.log(linha)
 // quantidadeAtual++
//}
   
  //  Exercícios de escrita de código

  //1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em 
  //uma variável. 
    
 // a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
  //b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, 
  //um por um, e guarde esses nomes em um array
   
  //  c) Por fim, imprima o array com os nomes dos bichinhos no console

   
  //const bichinhosDeEstimação = Number(prompt("Quantos bichinhos de estimação você tem?"))
  //if(bichinhosDeEstimação === 0){
  //  console.log( "Que pena! Você pode adotar um pet!")
 // }

 // if(bichinhosDeEstimação > 0){
 //   const listaDeBichos = []
    
//for(let i=0; i<bichinhosDeEstimação; i++){
  //  const bichinhosDeEstimaçãoDoUsuario = prompt("Digite o nome do seu bichinho de estimaçao")
  //  listaDeBichos.push(bichinhosDeEstimaçãoDoUsuario)

  //  }
//console.log(listaDeBichos)
 // }

//function imprimeValores(array){
  //  for(let valor of array)
      //  console.log(valor)
//}

  //   imprimeValores(array)
     

//2)Considere que você tenha acesso a um array  (chamado de 'array original') que é composto
// somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, 
//realizando as operações pedidas:
//a) Escreva um programa que **imprime** cada um dos valores do array original.

const arrayOriginal = [10,30,40,12,46,90,28,90]
function imprimeValores(array){
        for(let valor of array)
        console.log(valor)
}

     imprimeValores(arrayOriginal)

//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

//function imprimeValoresDividiosPorDez(array){

    //for(let valor of array)
   // const valorDividido = valor/10
   // console.log(valorDividido)
//}   
 //imprimeValoresDividiosPorDez(arrayOriginal)


//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array
// original e **imprima** esse novo array
function imprimirPares(array){
    const listaDePares = []

    for(let numero of array){
        if(numero % 2 ===0){
            listaDePares.push(numero)
        }
    }
    console.log(listaDePares)
}
imprimirPares(arrayOriginal)

//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento 
//do índex `i` é: `numero`". Depois, **imprima** este novo array.

let item = 0

function imprimirStrins(arrayItem){
    let listaString = []

    for(lista  of arrayOriginal){
      
      if( lista >=0){

      listaString.push(lista)
      
      console.log('O elemento do índex', item,'é', lista )
      }
      item++
    }

}
imprimirStrins(arrayOriginal)

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

//const arrayOriginal = [10,30,40,12,46,90,28,90]

function imprimeNumerosMaior(arrayMaiorNumero)
let arrayMaiorNumero = []

for(lista  of arrayOriginal){

 if(lista > array.lenght){

  arrayMaiorNumero.push()

  arrayMaiorNumero++
  console.log(arrayMaiorNumero)

  }
      }
    
      imprimeNumerosMaior(arrayOriginal) 
  
    
   

)
  







//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
//"O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// Escreva um programa que imprima no console o maior e o menor números contidos no array
//original