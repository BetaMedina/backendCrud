import Router from 'express';

/** Controller */
import registerController from '../controller/registerController';

/** Validation */
import registerValidation from '../validation/register';

const route = new Router();

/** Register Routes */
route.post('/register', registerValidation.create, registerController.create);
route.put(
  '/register/:id',
  registerValidation.update,
  registerController.update
);
route.delete('/register/:id', registerController.delete);
route.get('/register', registerController.index);
route.get('/register/:id', registerController.read);
export default route;
