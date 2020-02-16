module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('register', {
      code: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      birthday: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      contact: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('register');
  },
};
