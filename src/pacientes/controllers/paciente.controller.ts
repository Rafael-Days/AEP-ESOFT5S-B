import { Request, Response } from 'express'
import pacienteService from "../services/paciente.service"

class pacienteController {
    async create(req: Request, res: Response) {
        const createdpaciente = await pacienteService.create(req.body)
        res.status(201)
        return res.json(createdpaciente)
    }

    async findAll(req: Request, res: Response) {
        const findedpacientes = await pacienteService.findAll()
        res.status(200)
        return res.json(findedpacientes)
    }

    async findById(req: Request, res: Response) {
        const findedpaciente = await pacienteService.findById(req.params.id)
        res.status(200)
        return res.json(findedpaciente)
    }

    async update(req: Request, res: Response) {
        const updatedpaciente = await pacienteService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedpaciente)
    }

    async delete(req: Request, res: Response) {
        const deleted = await pacienteService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }
}

export default new pacienteController()