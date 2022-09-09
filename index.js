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

const objetos = []

if(filme1.remake){
    objetos.push(filme1)
}else{
    alert(filme1.nome + ' não adicionado ao Array de Objetos')
}

if(filme2.remake){
    objetos.push(filme2)
}else{
    alert(filme2.nome + ' não adicionado ao Array de Objetos')
}

if(filme3.remake){
    objetos.push(filme3)
}else{
    alert(filme3.nome + ' não adicionado ao Array de Objetos')
}

console.log('Array de Objetos\n',objetos)

const mediaDuracao = (filme1.duracao + filme2.duracao + filme3.duracao)/3
console.log('A média de duração dos filmes é de', mediaDuracao, 'minutos.')

const verificaRemake = filme1.remake && filme2.remake && filme3.remake
console.log('Todos os filmes são remakes?', verificaRemake)

console.log(`
${filme1.nome.toUpperCase()}
Sinopse: ${filme1.sinopse}
Duração: ${filme1.duracao} minutos
Ano de Lançamento: ${filme1.anoLancamento}
Gênero: ${filme1.genero}
É um remake? ${filme1.remake}
Elenco: ${filme1.elenco}`)

console.log(`
${filme2.nome.toUpperCase()}
Sinopse: ${filme2.sinopse}
Duração: ${filme2.duracao} minutos
Ano de Lançamento: ${filme2.anoLancamento}
Gênero: ${filme2.genero}
É um remake? ${filme2.remake}
Elenco: ${filme2.elenco}`)

console.log(`
${filme3.nome.toUpperCase()}
Sinopse: ${filme3.sinopse}
Duração: ${filme3.duracao} minutos
Ano de Lançamento: ${filme2.anoLancamento}
Gênero: ${filme3.genero}
É um remake? ${filme3.remake}
Elenco: ${filme3.elenco}`)