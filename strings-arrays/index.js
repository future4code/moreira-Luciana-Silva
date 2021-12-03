//EXERCICIO STRINGS

//1- Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

//a)let array
//console.log('a. ', array)
//indefinido

//b)array = null
//console.log('b. ', array)
//null

//c)array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//c)onsole.log('c. ', array.length)
//11

//d)let i = 0
//console.log('d. ', array[i])
//3

//e)array[i+1] = 19
//console.log('e. ', array)
//Array(11) 
//0: 3
//1: 19
//2: 5
//3: 6
//4: 7
//5: 8
//6: 9
//7: 10
//8: 11
//9: 12
//10: 13
//length: 1

//f)const valor = array[i+6]
//console.log('f. ', valor)
//9
//VIMOS ESTUDIR 13


//2 Leia o código abaixo com atenção 

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//Qual será o valor impresso no console se a entrada do usuário for: 
//"Subi num ônibus em Marrocos"`?

//SUBI NO ONIBUS EM MARROCOS


//Exercícios de escrita de código

//1-
//const nomeDoUsuario = prompt("Qual seu nome?")
//const emailDoUsuario = prompt("Qual seu email?")
 
//const fraseTemplateString = `O e-mail ${nomeDoUsuario}) foi cadastrado com sucesso. Seja bem-vinda(o),${nomeDoUsuario}`
//console.log(fraseTemplateString)

//const fraseConcatenada = "O e-mail de " + nomeDoUsuario + "foi cadastrado com sucesso. Seja bem-vinda(o),"+ nomeDoUsuario + "."
//console.log(fraseConcatenada)


//2-
//a)Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
const listadecomidasPreferidas = ["frango", "lasanha", "coxinha", "estrogonofe", "almondegas"]

//const Umacomida = listadecomidasPreferidas[0]
//console.log(Umacomida)
//console.log(listadecomidasPreferidas)

const comidasPreferidas = prompt("Qual sua comida favorita?")
console.log(comidasPreferidas)


//b)




//const comidasPreferidas = prompt("Qual sua comida favorita")
//console.log(comidasPreferidas)

//a) Crie um array com vazio e guarde-o em uma variável, chamada listaDeTarefas
//const listaDeTarefas

//const corFavorita = prompt("Qual sua cor favorita")
//const nome = prompt("Qual seu nome")

//const fraseUsuario = prompt("Escreva uma frase")