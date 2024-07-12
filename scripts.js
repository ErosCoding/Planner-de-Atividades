// bibliotecas e codigos de terceiros
const formatador = (data) => {
    
    return {
        dia: {
            numerico: dayjs(data).format('DD'),
            semana: {
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd')
            }
        },
        mes: dayjs(data).format('MMMM'),
        hora: dayjs(data).format('HH:mm')       
    }
}
// object {}
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-08 10:00"),
    finalizada: true
  }
  
  // lista, array, vetor []
  const atividades = [
    atividade,
    {
      nome: 'Academia em grupo',
      data: new Date("2024-07-09 12:00"),
      finalizada: false
    },
    {
      nome: 'Gamming session',
      data: new Date("2024-07-09 16:00"),
      finalizada: true
    },
  ]
  
//   atividades = []
  
  // arrow function
  const criarItemDeAtividade = (atividade) => {
  
    let input = '<input type="checkbox" '
  
    if(atividade.finalizada) {
      input += 'checked'
    }
  
    input += '>'

    const formatar = formatador(atividade.data);
  
    return `
    <div>
      ${input}
      <span>${atividade.nome}</span>
      <time>${atividade.dia}, dia XX </time>
    </div>
    `
  }
  
  const atualizarListaDeAtividade = (atividade) => {
    const section = document.querySelector('section')  
  }
 
  const section = document.querySelector('section')
 
  // verificar se a minha lista esta vazia
  if(atividades.length == 0) {
    section.innerHTML = `<p>Nenhuma atividade cadastrada. </p> `
    //return
  }
  
  
  for(let atividade of atividades) {
    section.innerHTML += criarItemDeAtividade(atividade)
  }

  atualizarListaDeAtividade()

  const salvarAtividade = (event) => {
    event.preventDefault()
    const dadosDoFormulario = new FormData(event.target)

    const nome = dadosDoFormulario.get('atividade')
    const dia = dadosDoFormulario.get('dia')
    const hora = dadosDoFormulario.get('hora')
    const data = `${dia} ${hora}`

    const atividade = {
        nome,
        data, 
        finalizada: false
      }

      atividades = [atividade, ...atividades]
      atualizarListaDeAtividade()

    
    alert(nome)
  }

  const criarDiasSelecao = () => {
    const dias = [
        "2024-02-28",
        "2024-02-29",
        "2024-03-01",
        "2024-03-02",
        "2024-03-03",
    ]

    let diasSelecao = ''

    for(let dia of dias){
        const formatar = formatador(dia)
        const diaFormatado = ` 
        ${formatar.dia.numerico} de
        ${formatar.mes}
        `

        diasSelecao = diasSelecao += `
        <option value = "${dia}">${dia}</option>
        `
    }

  }
  criarDiasSelecao()

  const criarHorasSelecao = () => {
    let horasDisponiveis = ''

    for(let i = 6; i < 23; i++) {
        horasDisponiveis += `<option value="${i}:00">${i}:00</option>`
        horasDisponiveis += `<option value="${i}:30">${i}:30</option>`
    }


    document.querySelector('select[name="hora"]')
    .innerHTML = horasDisponiveis
  }
  // criarHorasSelecao()