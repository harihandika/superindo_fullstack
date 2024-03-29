"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("product_categories", [
      {
        name: "Makanan",
        created_user_id: 1,
        updated_user_id: 1,
      },
      {
        name: "Minuman",
        created_user_id: 1,
        updated_user_id: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_categories", null);
  },
};
