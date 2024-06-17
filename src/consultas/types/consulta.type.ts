export interface consultaType {
    tipoConsulta: string,
    pacienteId: number,
    medico: string,
    dataHora: string, // Armazenado como string no banco de dados
    descricao: string
}
