'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('users',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        first_name: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        last_name: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        email: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        password: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        image: {
          type: Sequelize.TEXT
        },
        user_roles_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'user_roles',
            key: 'id'
          }
        }
      });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
