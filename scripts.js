// object {}
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-10 10:00"),
    finalizada: false
}

// arrow function
const criarItemDeAtividade = (atividade) => {
    return `
     <div>
        <input type="checkbox">
        <span>${atividade.nome}</span>
        <time>${atividade.data}</time>
    </div>
    `
}
const section = document.querySelector('section')
console.log(section)
section.innerHTML = criarItemDeAtividade(atividade)
