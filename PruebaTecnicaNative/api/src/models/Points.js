const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("point", {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    CVC: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expirationDate: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};