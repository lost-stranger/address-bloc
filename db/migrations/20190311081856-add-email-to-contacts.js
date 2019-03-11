'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Contacts',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    )
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn({
      tableName: 'Person',
      schema: 'public'
    },
    'signature',
    Sequelize.STRING
  )
}
};