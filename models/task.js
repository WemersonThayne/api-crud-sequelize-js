'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.hasMany(models.Status, { foreignKey: 'id' });
      Task.hasMany(models.Gruop, { foreignKey: 'id' });
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    dateInitial: DataTypes.DATE,
    dateFinal: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
