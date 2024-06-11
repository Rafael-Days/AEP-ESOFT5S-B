import { Schema, model } from 'mongoose'

const consultaSchema = new Schema({
    tipoConsulta: String,
    paciente: String,
    medico: String,
    dataHora: Date,
    descricao: String
}, {
    timestamps: true
});

export default model("Consulta", consultaSchema)