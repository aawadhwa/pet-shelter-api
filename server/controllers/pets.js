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
};