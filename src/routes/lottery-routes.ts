import { Router } from 'express';
import {LotteryController} from "../controllers/lottery-controller.js";

const router = Router();
const lotteryController = new LotteryController();

router.get('/', lotteryController.getAll.bind(lotteryController));
router.get('/active', lotteryController.getActive.bind(lotteryController));
router.get('/:id', lotteryController.getById.bind(lotteryController));
router.get('/user/:metamaskId', lotteryController.getByUser.bind(lotteryController));

export default router;