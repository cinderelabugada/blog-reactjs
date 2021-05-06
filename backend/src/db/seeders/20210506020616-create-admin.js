'use strict';

const saltRound = process.env.SALT_ROUNDS || 10
const { v4: uuid4 } = require('uuid')
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = uuid4().replace('-', '').substring(0, 8)
    const now = new Date()
    await queryInterface.bulkInsert('Users', [{
      id: uuid4(),
      name: 'Administrator',
      email: 'admin@admin.com',
      password: bcrypt.hashSync(password, saltRound),
      createdAt: now,
      updatedAt: now
    }], {})
    console.log(password)
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
