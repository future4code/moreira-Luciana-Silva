//Exercícios de interpretação de código

//Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil,
//pode rodar no seu computador para analisar e pensar sobre o resultado. 
//
//const respostaDoUsuario = prompt("Digite o número que você quer testar")
//const numero = Number(respostaDoUsuario)

//if (numero % 2 === 0) {
  //console.log("Passou no teste.")
//}else {
  //console.log("Não passou no teste."
//
//a) Explique o que o código faz. Qual o teste que ele realiza? 
//Se o resto da divisão de 2 for igual a 0 aparece a mensagem "Passou no teste"
// Se o resto da divisão de 2 for diferente de 0 aparece a mensagem "Não passou no teste"

//b) Para que tipos de números ele imprime no console "Passou no teste"?
// Números iguais a 0
//
//c) Para que tipos de números a mensagem é "Não passou no teste"? 
//Números diferentes de 0
//

//2)  O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas
// tarefas de um supermercado:
//
//let fruta = prompt("Escolha uma fruta")
//let preco
//switch (fruta) {
 // case "Laranja":
 //   preco = 3.5
 //   break;
 // case "Maçã":
 //   preco = 2.25
 //   break;
//  case "Uva":
//    preco = 0.30
 //   break;
//  case "Pêra":
//    preco = 5.5
 //   break; // BREAK PARA O ITEM c.
 // default:
 //   preco = 5
//    break;
//}
//console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a)Para que serve o código acima?
// O código Switch Case serve para fazer funçoes com várias condicionais.

//
//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// 2,25
//
//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no 
//console se retirássemos o break que está logo acima do default (o break indicado pelo 
//comentário "BREAK PARA O ITEM c.")?
//Ia ficar indefinido porque a funçao não parou de rodar.
//
//3)Leia o código abaixo:

//const numero = Number(prompt("Digite o primeiro número."))

//if(numero > 0) {
   //console.log("Esse número passou no teste")
   // let mensagem = "Essa mensagem é secreta!!!"
// }
 
 //console.log(mensagem)

 //a) O que a primeira linha está fazendo?
 //Chamando a funçao

 //b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? 
 //E se fosse o número -10?
 //Indefinido

 //c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo
// Sim, porque está dentro do escopo mas não está dentro do bloco.

//Exercícios de escrita de código
//
//1) Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela
// pode dirigir (apenas maiores de idade).
//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

let primeiraIdade = Number (prompt("Quantos anos você tem?"))
let segundaIdade = Number (prompt("Quantos anos você tem?"))
//
function comparaIdadeComElse(idade1,idade2) {
     if(idade1===idade2){
    console.log("Pode dirigir")
} else {
   console.log("Não pode dirigir") 
} 
}
comparaIdadeComElse(primeiraIdade,segundaIdade)


//2)Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar 
//M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!",
// "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let TurnoMatutino = "M"
let TurnoVespertino = "V"
let TurnoNoturno = "N"

let aluno = prompt ("Digite:(M) Matutino, (V) Vespetino, (N)Noturno")

if(aluno === TurnoMatutino) {
  console.log("Bom dia!")
} else if (aluno === TurnoVespertino) {
      console.log("Boa tarde!")
 }   else {
     console.log("Boa noite")
 }       
    

//3)Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turno = prompt("Escolha um turno")
switch (turno) {
        case "Matutino": 
            console.log("Bom dia!")
            break
         case "Vespertino":
            console.log("Boa tarde!")
           break
       case "Noturno":
       console.log("Boa noite!")
            break
        default:
           console.log("Escolha um turno inicial: 'Matutino', 'Vespertino' ou 'Noturno'.")
     }

     //4-4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá 
     //a um filme com você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais.
     // Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta 
     //sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
     //Caso positivo, imprima no console a mensagem: `"Bom filme!"`, caso contrário, 
     //imprima `"Escolha outro filme :("`
    

     const genero = prompt("Qual seu gênero de filme?")
     const preço = prompt("Qual o preço do ingresso?")
     const cinema = Number(genero)
     const valor = Number(preço)
     fantasia = true

     if(cinema === fantasia) {
      console.log("Bom filme")
     }else if(preço <= 15) {
     console.log("Bom filme!")
      }  else{
     console.log("Escolha outro filme")
      }
          
     
