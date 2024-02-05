/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tweets', [
      { body: 'Всем привет, это бот ферма', authorId: null },
      { body: 'Я камень', authorId: null },
      { body: 'Я ножницы', authorId: null },
      { body: 'Я бумага', authorId: null },
      { body: 'Ящерица и спок будут?', authorId: null },
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
