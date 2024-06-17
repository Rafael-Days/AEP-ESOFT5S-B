const baseURL = 'http://localhost:3000'; // URL base do seu backend

// Função para buscar todas as consultas
async function fetchConsultas() {
    try {
        const response = await fetch(`${baseURL}/consultas`);
        if (!response.ok) {
            throw new Error('Erro ao buscar consultas');
        }
        const consultas = await response.json();
        const consultasList = document.getElementById('consultas-list');
        consultasList.innerHTML = '';
        consultas.forEach(consulta => {
            const li = document.createElement('li');
            li.textContent = `${consulta.tipoConsulta} - ${consulta.paciente}`;
            consultasList.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao buscar consultas:', error);
    }
}

// Função para criar uma nova consulta
async function createConsulta(event) {
    event.preventDefault();
    const form = event.target;
    const tipoConsulta = form.querySelector('#tipoConsulta').value;
    const paciente = form.querySelector('#paciente').value;
    const medico = form.querySelector('#medico').value;
    const dataHora = form.querySelector('#dataHora').value;
    const descricao = form.querySelector('#descricao').value;

    try {
        const response = await fetch(`${baseURL}/consultas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tipoConsulta,
                paciente,
                medico,
                dataHora,
                descricao
            })
        });
        if (!response.ok) {
            throw new Error('Erro ao criar consulta');
        }
        fetchConsultas(); // Atualiza a lista de consultas após criação
        form.reset();
    } catch (error) {
        console.error('Erro ao criar consulta:', error);
    }
}

// Função para inicializar o script
function init() {
    fetchConsultas(); // Busca as consultas ao carregar a página

    const formConsulta = document.getElementById('form-consulta');
    formConsulta.addEventListener('submit', createConsulta);
}

init(); // Inicializa o script ao carregar a página
