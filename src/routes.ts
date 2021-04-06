import { Router } from 'express';
import { CommentaryController } from './controllers/CommentaryController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();
const commentaryController = new CommentaryController();


router.post("/user", userController.create);
router.get("/user", userController.getAll);



export { router };