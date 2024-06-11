import { Schema, model } from 'mongoose'

const bookSchema = new Schema({
    tipoConsulta: String,
    paciente: String,
    medico: String,
    dataHora: Date
}, {
    timestamps: true
});

export default model("Consulta", bookSchema)