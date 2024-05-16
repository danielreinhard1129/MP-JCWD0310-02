import { createPromotion } from '@/controllers/promotion.controller';
import express from 'express';


const router = express.Router();

router.post('/', createPromotion);

export default router;
