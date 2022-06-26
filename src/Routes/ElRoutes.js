const Controller = require('../Controllers/ElControllers');

const routes = require('express').Router();

routes.get('/', Controller.padrao);
routes.get('/paletas', Controller.getAll);
routes.get('/paletas/:id', Controller.getById);
routes.post('/create', Controller.create);
routes.put('/update/:id', Controller.update);
routes.delete('/delete/:id', Controller.apagar);

module.exports = routes;
