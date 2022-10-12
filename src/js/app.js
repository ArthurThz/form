//Elementos capturados do DOM
const getCep = document.querySelector('.cep')
const elRua = document.querySelector('.rua')
const elBairro = document.querySelector('.bairro')
const elCidade = document.querySelector('.cidade')


//Consome a API ViaCep e mostra os valores no DOM
getCep.addEventListener('focusout', async () => {
    // Executa a função quando o valor do input for diferente de vazio
    if (getCep.value != '') {

        try {
            let url = `https://viacep.com.br/ws/${getCep.value}/json/`
            // Realiza a solicitação do CEP passado pelo input getCep
            const response = await fetch(url)
            // Captura os dados do CEP desejado
            const cep = await response.json()
            //  Coloca os valores resgatados da API no DOM
            elRua.value = await cep.logradouro
            elBairro.value = await cep.bairro
            elCidade.value = await cep.uf
        } catch {
            alert('Falha na consulta do CEP')
        } finally {
            console.log('finalizada')
        }
    }
    // Limpa os campos quando o input CEP estiver vazio
    if (getCep.value == '') {
        elBairro.value = ''
        elRua.value = ''
        elCidade.value = ''
    }
}
)


// outra maneira de escrever o código
    // fetch(url)
    // .then(response => response.json())
    // .then(res => {
    //     //Captura o resultado do FETCH e atribui às variáveis
    //     const bairro = res.bairro
    //     const cidade = res.localidade
    //     const cep = res.cep
    //     const rua = res.logradouro
    //     //Coloca no DOM os valores do FETCH
    // elRua.value = rua
    // elBairro.value = bairro
    // elCidade.value = cidade
    // })
    // .catch(err => alert (err))