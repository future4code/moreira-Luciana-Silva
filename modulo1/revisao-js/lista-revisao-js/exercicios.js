// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
       return array.length
    
    }

// EXERCÍCIO 02

let array = [9, 2, 1, 15, 20]
function retornaArrayInvertido(array) {
    let arrayInvertido = []
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i])
    }
    return arrayInvertido
  }

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    return array.sort((a, b) => a - b)
   
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPar = array.filter((item) => {
        return item % 2 === 0
     })
     return arrayPar
  }
        
  
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPar = []
    array.filter((item) => {
       if (item%2 === 0){
          arrayPar.push(item*item)
       }
    })
    return arrayPar
 }



// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const max = Math.max(...array)
  return max
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    let arrayNum =[array[array.length-2], array[1]]
  return arrayNum
  }


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let objeto = {
        nome: "O Diabo Veste Prada",
        ano: 2006,
        diretor: "David Frankel", 
        atores: [ "Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
     }
     
   return objeto
  
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const objeto = {
    nome: "Astrodev",
	idade: 25,  
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
}
return objeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const autorizados = pessoas.filter((item) => {
        if (item.idade > 14 && item.idade < 60 && item.altura > 1.5) {
           return item
        }
     })
     return autorizados
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const naoAutorizados = pessoas.filter((item) => {
        if (item.idade < 14 || item.idade > 60 || item.altura < 1.5) {
           return item
        }
     })
     return naoAutorizados
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}