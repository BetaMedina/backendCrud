import * as Yup from 'yup';

module.exports = {
  async create(req, res, next) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .max(30)
          .required(),
        address: Yup.string()
          .max(100)
          .required(),
        contact: Yup.string()
          .max(15)
          .required(),
        birthday: Yup.string()
          .min(10)
          .max(10)
          .required(),
        status: Yup.string()
          .matches(/(ativo|excluido|inativo, { excludeEmptyString: true })/)
          .max(10)
          .required(),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (err) {
      return res
        .status(400)
        .json({ error: 'Validation fail', message: err.inner });
    }
  },
  async update(req, res, next) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().max(30),
        address: Yup.string().max(100),
        contact: Yup.string().max(11),
        status: Yup.string().max(10),
      });

      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (err) {
      return res
        .status(400)
        .json({ error: 'Validation fail', message: err.inner });
    }
  },
};
