// object {}
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-10 10:00"),
    finalizada: false
}

// lista, array, vetor
const atividades = [
    atividade,
    {
        nome: 'Academia em grupo',
        data: new Date("2024-07-10 12:00"),
        finalizada: false
    },
    {
        nome: 'Gaming Session',
        data: new Date("2024-07-10 16:00"),
        finalizada: true 
    }
]

// arrow function
const criarItemDeAtividade = (atividade) => {

    let input = '<input type="checkbox" '

    if(atividade.finalizada) {
        input += 'checked'
    }

    input += input + '>'
    
    return `
     <div>
        ${input}
        <span>${atividade.nome}</span>
        <time>${atividade.data}</time>
    </div>
    `
}
const section = document.querySelector('section')

for(let atividade of atividades) {
    section.innerHTML += criarItemDeAtividade(atividade)
}


