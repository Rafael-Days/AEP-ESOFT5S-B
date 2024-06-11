import { Request, Response } from 'express'
import consultaService from "../services/consulta.service"

class consultaController {
    async create(req: Request, res: Response) {
        const createdconsulta = await consultaService.create(req.body)
        res.status(201)
        return res.json(createdconsulta)
    }

    async findAll(req: Request, res: Response) {
        const findedconsultas = await consultaService.findAll()
        res.status(200)
        return res.json(findedconsultas)
    }

    async findById(req: Request, res: Response) {
        const findedconsulta = await consultaService.findById(req.params.id)
        res.status(200)
        return res.json(findedconsulta)
    }

    async update(req: Request, res: Response) {
        const updatedconsulta = await consultaService.update(req.params.id, req.body)
        res.status(200)
        return res.json(updatedconsulta)
    }

    async delete(req: Request, res: Response) {
        const deleted = await consultaService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }
}

export default new consultaController()