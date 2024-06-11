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
routes.post('/paciente', pacienteController.create)
routes.get('/paciente', pacienteController.findAll)
routes.get('/paciente/:id', pacienteController.findById)
routes.put('/paciente/:id', pacienteController.update)
routes.delete('/paciente/:id', pacienteController.delete)

export {
    routes
}