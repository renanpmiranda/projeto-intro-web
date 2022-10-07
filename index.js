const filme1 = {
    nome: 'The Batman',
    sinopse: 'Quando um sádico serial killer começa a assassinar figuras políticas centrais de Gotham, o Batman é forçado a investigar a corrupção oculta da cidade e questionar o envolvimento de sua família.',
    duracao: 176,
    anoLancamento: 2022,
    genero: 'Ação/Policial/Drama/Mistério',
    remake: false,
    elenco: ['Robert Pattinson', 'Paul Dano', 'Zoë Kravitz']
}

const filme2 = {
    nome: 'Interstellar',
    sinopse: 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço, na tentativa de garantir a sobrevivência da humanidade.',
    duracao: 169,
    anoLancamento: 2014,
    genero: 'Aventura/Drama/Sci-Fi',
    remake: false,
    elenco: ['Matthew McConaughey', 'Jessica Chastain', 'Anne Hathaway']
}

const filme3 = {
    nome: 'It: A Coisa',
    sinopse: 'Um grupo de garotos maltratados se une para destruir um monstro que se disfarça de palhaço e ataca as crianças de sua pequena cidade.',
    duracao: 135,
    anoLancamento: 2017,
    genero: 'Terror',
    remake: true,
    elenco: ['Bill Skarsgard', 'Finn Wolfhard', 'Jaeden Martell']
}

const arrayFilmes = []
arrayFilmes.push(filme1,filme2,filme3)

const arrayRemakes = []
for(let i in arrayFilmes){
    if(arrayFilmes[i].remake === true){
        arrayRemakes.push(arrayFilmes[i])
//     }else{
//         alert(arrayFilmes[i].nome + ' não adicionado ao Array de Remakes.')
//     }
// }

const mediaDuracao = (filme1.duracao + filme2.duracao + filme3.duracao)/3
console.log('A média de duração dos filmes é de', mediaDuracao, 'minutos.')

const verificaRemake = filme1.remake && filme2.remake && filme3.remake
console.log('Todos os filmes são remakes?', verificaRemake)

for(let i in arrayFilmes){
    let elenco = ''
    for(let j in arrayFilmes[i].elenco){
        if(arrayFilmes[i].elenco[j] !== arrayFilmes[i].elenco[2]){
            elenco += `${arrayFilmes[i].elenco[j]}, `
        }else{
            elenco += `${arrayFilmes[i].elenco[j]}`
        }
    }
    arrayFilmes[i].elenco = elenco
}

for(let i in arrayFilmes){
    console.log(`
${arrayFilmes[i].nome.toUpperCase()}
Sinopse: ${arrayFilmes[i].sinopse}
Duração: ${arrayFilmes[i].duracao} minutos
Ano de Lançamento: ${arrayFilmes[i].anoLancamento}
Gênero: ${arrayFilmes[i].genero}
É um remake? ${arrayFilmes[i].remake}
Elenco: ${arrayFilmes[i].elenco}
`)
}

// const devolveString = (objeto) => {
//     return JSON.stringify(objeto)
// }

// const filtraOsNomesDoArray = arrayFilmes.filter((titulo) => {
//     return titulo.nome === 
// })

console.log(filtraOsNomesDoArray)

// ,string) => {
//     novoArray = []
//     for(let i of arrayObjetos){
//         for(let j in arrayObjetos[i]){
//             if(j === string){
//                 novoArray.push(j)
//             }else{
//                 alert('Nenhum item foi encontrado.')
//             }
//         }
//     }
// return novoArray
// }

// console.log(retornaItensComMesmoTitulo(arrayFilmes,devolveString(filme1)))