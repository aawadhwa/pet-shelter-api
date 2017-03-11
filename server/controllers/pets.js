    "use strict"
    const Pet = require('../models').Pet;

    module.exports = {
      create(req, res) {
        return Pet
          .create({
            name: req.body.name,
            type: req.body.type,
            breed: req.body.breed,
            location: req.body.location,
            latitude: req.body.latitude,
            longitude: req.body.longitude
          })
          .then(pet => res.status(201).send(pet))
          .catch(error => res.status(400).send(error));
      },

      list(req, res) {
       return Pet
          .all()
          .then(pet => res.status(200).send(pet))
          .catch(error => res.status(400).send(error));
      },

      retrieve(req, res) {
       return Pet
          .findById(req.params.petId)
          .then(pet => {
            if (!pet) {
              return res.status(404).send({
               message: 'Pet Not Found',
            });
          }
          return res.status(200).send(pet);
        })
        .catch(error => res.status(400).send(error));
    },
    };