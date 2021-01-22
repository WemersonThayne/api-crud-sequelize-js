'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Gruop extends Model {
    static associate(models) {
    }
  }
  Gruop.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gruop',
  });
  return Gruop;
};