/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tweets', [
      { body: 'Всем привет, это бот ферма', userId: null },
      { body: 'Я камень', userId: null },
      { body: 'Я ножницы', userId: null },
      { body: 'Я бумага', userId: null },
      { body: 'Ящерица и спок будут?', userId: null },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
