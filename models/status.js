'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
    }
  }
  Status.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};