import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';
import UserAvatarController from '@modules/users/infra/http/controllers/UserAvatarController';
import UsersController from '@modules/users/infra/http/controllers/UsersController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
