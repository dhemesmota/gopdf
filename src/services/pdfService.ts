import fs from 'fs';
import PDFDocument from 'pdfkit';

export const generatePDF = async (processNumber: number, propertyDescription: string, postalCode: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const fileName = `files/${processNumber}_${Date.now()}.pdf`;
        const filePath = `${__dirname}/../../${fileName}`;
        
        doc.pipe(fs.createWriteStream(filePath));
        doc.fontSize(12).text(`Número do Processo: ${processNumber}`);
        doc.text(`Descrição da Propriedade: ${propertyDescription}`);
        doc.text(`Código Postal: ${postalCode}`);
        doc.end();

        doc.on('finish', () => resolve(`http://localhost:3000/${fileName}`));
        doc.on('error', reject);
    });
};
