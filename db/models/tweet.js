const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'authorId' });
    }
  }
  Tweet.init({
    body: DataTypes.TEXT,
    authorId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tweet',
  });
  return Tweet;
};
