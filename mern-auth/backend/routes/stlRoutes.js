import express from 'express';
const router = express.Router();
import { returnModel } from '../controllers/stlController.js';

router.route('/get').get(returnModel);

export default router;