import { Router } from 'express';
import { CommentaryController } from '../controllers/CommentaryController';
import { UserController } from '../controllers/UserController';

const router = Router();

const userController = new UserController();
const commentaryController = new CommentaryController();


router.get('validate', userController.validateToken)
router.get('validate', userController.register)
router.get('validate', userController.login)
router.get('validate', userController.getAllusers)



export { router };