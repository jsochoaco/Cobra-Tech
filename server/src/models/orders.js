const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Order = sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
          actual_event: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          data : {
            type: DataTypes.JSON,
            allowNull: true
          }
        }, {
          tableName: 'orders',
          timestamps: false,
        });
    return Order
  };