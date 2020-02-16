import Sequelize, { Model } from 'sequelize';

class Register extends Model {
  static init(sequelize) {
    super.init(
      {
        code: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        name: Sequelize.STRING,
        address: Sequelize.STRING,
        contact: Sequelize.STRING,
        status: Sequelize.STRING,
        birthday: Sequelize.STRING,
      },
      {
        tableName: 'register',
        timestamps: false,
        sequelize,
      }
    );
    return this;
  }
}
export default Register;
