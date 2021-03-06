const express = require('express')
const routes = express.Router()
const WorksForController = require('../controllers/WorksForController')

//cadastrar dados
routes.post('/worksfor/add', WorksForController.add);

//buscar todos dados
routes.get('/worksfor', WorksForController.findAll);

//buscar dados pela id
routes.get('/worksfor/:id', WorksForController.findById);

//buscar dados pela letra
routes.get('/worksfor/find/:letra', WorksForController.findByLetter);

//atualizar dados pelo id
routes.put('/worksfor/update/:id', WorksForController.updateById);

//atualizar todos dados
routes.put('/worksfor/update/', WorksForController.updateAll);

//deletar dados
routes.delete('/worksfor/delete/:id', WorksForController.delete);

module.exports = routes