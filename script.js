// Dados
const lista = {
    usa: ['New York', 'California', 'Texas'],
    india: ['Maharashtra', 'Karnataka', 'Delhi'],
};

function selecionar() {

    //pega as tags no html
    const tipoDeServico = document.getElementById('tipoDeServico')
    const estadoFocal = document.getElementById('estadoFocal')

    //limpa o proximo select
    estadoFocal.innerHTML = '<option value="">Selecione</option>';

    //cria variavel e atribui o VALOR do variavel selecao
    const tipoDeServicoValor = tipoDeServico.value

    if (tipoDeServicoValor == 'reparo') {
        //converte objeto para ser exibido no select
        Object.entries(lista).forEach(([valor, chave]) => {

            const opcao = document.createElement('option')
            opcao.value = valor;
            opcao.textContent = chave;
            estadoFocal.appendChild(opcao);
        })
    }

    console.log(tipoDeServicoValor)
}



const estados = {
    usa: ['New York', 'California', 'Texas'],
    india: ['Maharashtra', 'Karnataka', 'Delhi'],
};

const cidades = {
    'New York': ['New York City', 'Buffalo'],
    California: ['Los Angeles', 'San Francisco'],
    Texas: ['Houston', 'Dallas'],
    Maharashtra: ['Mumbai', 'Pune'],
    Karnataka: ['Bengaluru', 'Mysore'],
    Delhi: ['New Delhi', 'Noida'],
};

// Elementos do DOM
const pais = document.getElementById('pais');
const estadoSelecionado = document.getElementById('estado');
const cidadeSelecionada = document.getElementById('cidade');

// Função para popular estados
function populateState() {
    estadoSelecionado.innerHTML = '<option value="">Select a State</option>';
    cidadeSelecionada.innerHTML = '<option value="">Select a City</option>';

    const pais_selecionado = pais.value;

    if (pais_selecionado && estados[pais_selecionado]) {
        const estado = estados[pais_selecionado];
        estado.forEach(function (estado) {
            const opcao = document.createElement('option');
            opcao.value = estado;
            opcao.text = estado;
            estadoSelecionado.appendChild(opcao);
        });
    }
}


// Função para popular cidades
function populateCities() {
    cidadeSelecionada.innerHTML = '<option value="">Select a City</option>';

    const estado_selecionado = estadoSelecionado.value;

    if (estado_selecionado && cidades[estado_selecionado]) {
        const selectedCities = cidades[estado_selecionado];
        selectedCities.forEach(function (cidade) {
            const opcao = document.createElement('option');
            opcao.value = cidade;
            opcao.text = cidade;
            cidadeSelecionada.appendChild(opcao);
        });
    }
}