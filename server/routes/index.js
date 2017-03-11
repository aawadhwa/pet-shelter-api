const petsController = require('../controllers').pets;

module.exports = (app) => {
  app.get('/api/pets/:petId', petsController.retrieve);
  app.post('/api/pets', petsController.create);
  app.get('/api/pets', petsController.list);
};