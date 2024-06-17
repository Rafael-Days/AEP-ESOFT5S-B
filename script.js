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

// Função para buscar todos os pacientes
async function fetchPacientes() {
    try {
        const response = await fetch(`${baseURL}/pacientes`);
        if (!response.ok) {
            throw new Error('Erro ao buscar pacientes');
        }
        const pacientes = await response.json();
        const pacientesList = document.getElementById('pacientes-list');
        pacientesList.innerHTML = '';
        pacientes.forEach(paciente => {
            const li = document.createElement('li');
            li.textContent = `${paciente.id} - ${paciente.nomePaciente}`;
            pacientesList.appendChild(li);
        });
    } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
    }
}

// Função para criar um novo paciente
async function createPaciente(event) {
    event.preventDefault();
    const form = event.target;
    const nomePaciente = form.querySelector('#nomePaciente').value;
    const idade = form.querySelector('#idade').value;
    const id = form.querySelector('#id').value;

    try {
        const response = await fetch(`${baseURL}/pacientes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomePaciente,
                idade,
                id
            })
        });
        if (!response.ok) {
            throw new Error('Erro ao criar paciente');
        }
        fetchPacientes(); // Atualiza a lista de pacientes após criação
        form.reset();
    } catch (error) {
        console.error('Erro ao criar paciente:', error);
    }
}

// Função para inicializar o script
function init() {
    fetchConsultas(); // Busca as consultas ao carregar a página
    fetchPacientes(); // Busca os pacientes ao carregar a página

    const formConsulta = document.getElementById('form-consulta');
    formConsulta.addEventListener('submit', createConsulta);

    const formPaciente = document.getElementById('form-paciente');
    formPaciente.addEventListener('submit', createPaciente);
}

init(); // Inicializa o script ao carregar a página
