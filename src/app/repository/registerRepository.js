import Register from '../model/Register';

class RegisterRepository {
  findRecordWithRelationship(id) {
    return Register.findByPk(id);
  }

  async createRecord(payload) {
    return Register.create(payload);
  }

  async findAllRecordWithRelationship() {
    return Register.findAll();
  }

  async updateRecord(id, data) {
    const register = await this.findRecordWithRelationship(id);

    if (!register) {
      return false;
    }

    return register.update(data);
  }

  async deleteRecord(id) {
    const register = await this.findRecordWithRelationship(id);

    if (!register) {
      return false;
    }

    return register.destroy(id);
  }
}

export default new RegisterRepository();
