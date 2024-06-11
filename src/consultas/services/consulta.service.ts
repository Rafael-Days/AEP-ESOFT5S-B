import consultaModel from '../schemas/consulta.schema'
import { consultaType } from '../types/consulta.type'

class consultaService {

    async create(consulta: consultaType) {
        const createdconsulta = await consultaModel.create(consulta)
        return createdconsulta
    }

    async findAll() {
        const findedconsultas = await consultaModel.find()
        return findedconsultas
    }

    async findById(id: string) {
        const findedconsulta = await consultaModel.findById(id)
        return findedconsulta
    }

    async update(id: string, consulta: consultaType) {
        const updatedconsulta = await consultaModel.findByIdAndUpdate(id, {
            tipoConsulta: consulta.tipoConsulta,
            paciente: consulta.paciente,
            medico: consulta.medico,
            dataHora: consulta.dataHora,
            descricao: consulta.descricao
        }, { new: true })

        return updatedconsulta
    }

    async delete(id: string) {
        try {
            await consultaModel.findByIdAndDelete(id)
            return "Consulta removida com sucesso"
        } catch (error) {
            throw new Error(`Ocorreu um erro ao remover a consulta: ${error}`)
        }
    }

}


export default new consultaService()