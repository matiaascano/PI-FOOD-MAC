const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nivel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    step: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
