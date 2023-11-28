const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Users= sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          surname: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          phone: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          profile: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          authorized: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
          },
          position: {
            type: DataTypes.STRING,
            allowNull: true,
          },
        }, {
          tableName: 'users',
          timestamps: false,
        });
    return Users
  };