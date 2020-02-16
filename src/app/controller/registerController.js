import registerRepository from '../repository/registerRepository';

class RegisterController {
  async create(req, res) {
    const { id_status, ...data } = req.body;

    try {
      const createdRegister = await registerRepository.createRecord({
        id_status,
        ...data,
      });

      return res.json({ msg: 'Register created', register: createdRegister });
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  async index(req, res) {
    try {
      const registers = await registerRepository.findAllRecordWithRelationship();

      if (!registers.length) {
        return res.status(204).json();
      }

      return res.json(registers);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  async read(req, res) {
    const { id } = req.params;

    try {
      const register = await registerRepository.findRecordWithRelationship(id);
      if (!register) {
        return res.status(204).json();
      }
      return res.json(register);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { ...data } = req.body;

    try {
      const updatedRegister = await registerRepository.updateRecord(id, data);

      if (!updatedRegister) {
        return res.status(400).json({ err: 'Register cannot be found' });
      }

      return res.json({
        msg: 'Register has been updated',
      });
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const response = await registerRepository.deleteRecord(id);

      if (!response) {
        return res.status(400).json({ err: 'Register cannot be found' });
      }

      return res.json({
        msg: 'Register has been deleted',
      });
    } catch (err) {
      return res.status(500).json({ err });
    }
  }
}

export default new RegisterController();
