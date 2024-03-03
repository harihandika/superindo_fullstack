"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("product_variants", [
      {
        product_id: 1,
        code: "PDCT00000020001",
        name: "Indomie Goreng Original",
        qty: 1000,
        price: 3000,
        image_location: "indomie_goreng.png",
        created_user_id: 1,
        updated_user_id: 1,
      },
      {
        product_id: 2,
        code: "PDCT00000020002",
        name: "Indomie Ayam Bawang",
        qty: 500,
        price: 2700,
        image_location: "indomie_ayam_bawang.png",
        created_user_id: 1,
        updated_user_id: 1,
      },
      {
        product_id: 2,
        code: "PDCT00000020003",
        name: "Indomie Goreng Aceh",
        qty: 1000,
        price: 3200,
        image_location: "indomie_goreng_aceh.png",
        created_user_id: 1,
        updated_user_id: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_variants", null);
  },
};
