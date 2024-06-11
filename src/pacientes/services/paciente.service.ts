import pacienteModel from '../schemas/paciente.schema'
import { pacienteType } from '../types/paciente.type'

class pacienteService {

    async create(paciente: pacienteType) {
        const createdpaciente = await pacienteModel.create(paciente)
        return createdpaciente
    }

    async findAll() {
        const findedpacientes = await pacienteModel.find()
        return findedpacientes
    }

    async findById(id: string) {
        const findedpaciente = await pacienteModel.findById(id)
        return findedpaciente
    }

    async update(id: string, paciente: pacienteType) {
        const updatedpaciente = await pacienteModel.findByIdAndUpdate(id, {
            nomePaciente: paciente.nomePaciente,
            idade: paciente.idade
        }, { new: true })

        return updatedpaciente
    }

    async delete(id: string) {
        try {
            await pacienteModel.findByIdAndDelete(id)
            return "paciente removido com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover o paciente: ${error}`)
        }
    }

}


export default new pacienteService()