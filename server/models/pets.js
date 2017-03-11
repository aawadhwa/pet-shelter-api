'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pet = sequelize.define('Pet', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    }
  }, {
     uniqueKeys: {
     actions_unique: {
                    fields: ['name', 'breed']
                }
    }
  });
  return Pet;
};