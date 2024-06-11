import { Router } from 'express'
import consultaController from './consultas/controllers/consulta.controller'
import pacienteController from './pacientes/controllers/paciente.controller'

const routes = Router()
//CONSULTA
routes.post('/consultas', consultaController.create)
routes.get('/consultas', consultaController.findAll)
routes.get('/consultas/:id', consultaController.findById)
routes.put('/consultas/:id', consultaController.update)
routes.delete('/consultas/:id', consultaController.delete)

//PACIENTE
routes.post('/pacientes', pacienteController.create)
routes.get('/pacientes', pacienteController.findAll)
routes.get('/pacientes/:id', pacienteController.findById)
routes.put('/pacientes/:id', pacienteController.update)
routes.delete('/pacientes/:id', pacienteController.delete)

export {
    routes
}