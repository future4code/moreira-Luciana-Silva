// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
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
const maiorNumero = Math.max(num1, num2)
const menorNumero = Math.min(num1, num2)

const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;

const diferença = Math.abs(num1 - num2);

const objeto = {
maiorNumero: maiorNumero,
maiorDivisivelPorMenor: maiorDivisivelPorMenor,
diferença:diferença
}

return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = [0]
    while (array.length < n){
        array.push(array.length * 2)
    }
    return array  
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
        return "Escaleno"
    }else return "Isósceles"
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    let arrayNum =[array[array.length-2], array[1]]
  return arrayNum
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`   
     
   return objeto
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let pessoaAnoninizada = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return pessoaAnoninizada
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const permissaoParaEntrar = pessoas.filter((item, index, array) => {
        return item.nome, item.altura > 1.5 && item.idade > 14 && item.idade < 60 
      })
      return permissaoParaEntrar
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoTemPermissaoParaEntrar = pessoas.filter((item, index, array) => {
        return item.nome, item.altura <= 1.5 || item.idade <= 14 || item.idade >= 60 
      })
      return naoTemPermissaoParaEntrar
                  
 }
    
// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    const array = contas;

    array.forEach((contaCliente) => {
        let totalCompras = 0;
        
        contaCliente.compras.forEach((compra) => {
            total +- compra;
        });

        contaCliente.saldoTotal -= total;
        contaCliente.compras - [];
    });
        return array

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort(function(a, b){
        if(a.nome < b.nome){
            return -1
        }else {
            return true
        }
    })   
    
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function (a, b) {
        return a.dataDaConsulta > b.dataDaConsulta
    })
    
    return consultas
}