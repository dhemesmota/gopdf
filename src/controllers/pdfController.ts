import { Request, Response } from 'express';
import { generatePDF } from '../services/pdfService';

export const generatePDFController = async (req: Request, res: Response) => {
    try {
        const { processNumber, propertyDescription, postalCode } = req.body;
        const fileUrl = await generatePDF(processNumber, propertyDescription, postalCode);
        res.status(200).json({ url: fileUrl });
    } catch (err) {
        console.error('Erro ao gerar o PDF:', err);
        res.status(500).json({ error: 'Erro ao gerar o PDF' });
    }
};
