const petsController = require('../controllers').pets;

module.exports = (app) => {
  app.post('/api/pets', petsController.create);
};