"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("transactions", [
      {
        transaction_no: "TRANS000001",
        total_amount: 50_000,
        created_user_id: 2,
        updated_user_id: 2,
      },
    ]);
    await queryInterface.bulkInsert("transaction_details", [
      {
        price: 35_000,
        qty: 20,
        subtotal: 130_000,
        product_variant_id: 1,
        transaction_id: 1,
        created_user_id: 2,
        updated_user_id: 2,
      },
      {
        price: 10_000,
        qty: 20,
        subtotal: 100_000,
        product_variant_id: 2,
        transaction_id: 1,
        created_user_id: 2,
        updated_user_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("transactions", null);
    await queryInterface.bulkDelete("transaction_details", null);
  },
};
