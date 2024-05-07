import express from 'express';
import { generatePDFController } from '../controllers/pdfController';
import { getHello } from '../controllers/welcomeController';

const router = express.Router();

router.get('/', getHello);

router.post('/generate-pdf', generatePDFController);

export default router;
