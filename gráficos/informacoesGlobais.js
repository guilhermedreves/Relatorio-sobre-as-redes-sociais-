const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectadas = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente 
    <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas e ${minutos} minutos</span> conectadas.
    <br> Dessa forma, o índice de porcentagem de pessoas que estão conectadas às redes sociais chega a uma taxa
    de <span>${porcentagemConectadas}%</span>. <br>Diversas são as consequências do elevado tempo presente nessas redes,
    entre elas estão, <span>vício constante, sedentarismo, mau estar na visão ocasionando dor de cabeça, maiores chances
    de desenvolver ansiedade e problemas psicológicos,</span> entre outras. Nessas ocasiões, há necessidade de <span>impor limites
    de tempo</span> na hora do uso, além de estabelecer <span>foco</span>, em particular, para outras <span>atividades mais saúdaveis</span>, sendo assim, 
    se realiza uma vida mais próspera e saúdavel.`
    
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
  }
  
  vizualizarInformacoesGlobais()