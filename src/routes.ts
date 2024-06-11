import { Router } from 'express'
import consultaController from './consultas/controllers/consulta.controller'

const routes = Router()
routes.post('/consultas', consultaController.create)
routes.get('/consultas', consultaController.findAll)
routes.get('/consultas/:id', consultaController.findById)
routes.put('/consultas/:id', consultaController.update)
routes.delete('/consultas/:id', consultaController.delete)


export {
    routes
}