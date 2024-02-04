const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Tweet }) {
      this.hasMany(Tweet, { foreignKey: 'authorId' });
    }
  }
  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    hashpass: DataTypes.STRING,
    img: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
