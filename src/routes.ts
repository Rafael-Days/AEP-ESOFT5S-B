import { Router } from 'express';
import consultaController from './consultas/controllers/consulta.controller';
import pacienteController from './pacientes/controllers/paciente.controller';

const routes = Router();

// Rotas de Consulta
routes.post('/consultas', consultaController.create);
routes.get('/consultas', consultaController.findAll);
routes.get('/consultas/:id', consultaController.findById);
routes.put('/consultas/:id', consultaController.update);
routes.delete('/consultas/:id', consultaController.delete);

// Rotas de Paciente
routes.post('/pacientes', pacienteController.create); // Corrigido para /pacientes
routes.get('/pacientes', pacienteController.findAll); // Corrigido para /pacientes
routes.get('/pacientes/:id', pacienteController.findById); // Corrigido para /pacientes
routes.put('/pacientes/:id', pacienteController.update); // Corrigido para /pacientes
routes.delete('/pacientes/:id', pacienteController.delete); // Corrigido para /pacientes

export { routes };
