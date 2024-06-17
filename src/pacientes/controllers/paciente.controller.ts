import { Request, Response } from 'express';
import PacienteService from '../services/paciente.service';

class PacienteController {
    async create(req: Request, res: Response) {
        const createdPaciente = await PacienteService.create(req.body);
        res.status(201).json(createdPaciente);
    }

    async findAll(res: Response) {
        const pacientes = await PacienteService.findAll();
        res.status(200).json(pacientes);
    }

    async findById(req: Request, res: Response) {
        const paciente = await PacienteService.findById(Number(req.params.id));
        res.status(200).json(paciente);
    }

    async update(req: Request, res: Response) {
        const updatedPaciente = await PacienteService.update(Number(req.params.id), req.body);
        res.status(200).json(updatedPaciente);
    }

    async delete(req: Request, res: Response) {
        const message = await PacienteService.delete(Number(req.params.id));
        res.status(200).json({ message });
    }
}

export default new PacienteController();
