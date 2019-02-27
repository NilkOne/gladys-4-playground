
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('t_device', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      service_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 't_service',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      room_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 't_room',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

    await queryInterface.addIndex('t_device', ['service_id']);
    await queryInterface.addIndex('t_device', ['room_id']);
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('t_device'),
};
