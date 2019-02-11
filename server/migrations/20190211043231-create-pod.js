
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_pod', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      room_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 't_room',
          key: 'id',
        },
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      selector: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_pod'),
};
