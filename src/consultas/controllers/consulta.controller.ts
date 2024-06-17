import { Request, Response } from 'express';
import consultaService from '../services/consulta.service';

class ConsultaController {
    async create(req: Request, res: Response) {
        const createdConsulta = await consultaService.create(req.body);
        res.status(201).json(createdConsulta);
    }

    async findAll( res: Response) {
        const consultas = await consultaService.findAll();
        res.status(200).json(consultas);
    }

    async findById(req: Request, res: Response) {
        const consulta = await consultaService.findById(Number(req.params.id));
        res.status(200).json(consulta);
    }

    async update(req: Request, res: Response) {
        const updatedConsulta = await consultaService.update(Number(req.params.id), req.body);
        res.status(200).json(updatedConsulta);
    }

    async delete(req: Request, res: Response) {
        const message = await consultaService.delete(Number(req.params.id));
        res.status(200).json({ message });
    }
}

export default new ConsultaController();
