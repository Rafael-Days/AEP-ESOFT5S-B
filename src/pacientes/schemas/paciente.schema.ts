import { Schema, model } from 'mongoose'

const pacienteSchema = new Schema({
    nomePaciente: String,
    idade: Number
}, {
    timestamps: true
});

export default model("Paciente", pacienteSchema)