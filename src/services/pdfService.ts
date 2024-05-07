import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

export const generatePDF = async (processNumber: number, propertyDescription: string, postalCode: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();

        // Caminho para a pasta files na raiz do projeto
        const filePath = path.join(__dirname, '../../files');

        // Certifique-se de que a pasta existe, se não, crie-a
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath, { recursive: true });
        }

        // Nome do arquivo
        const fileName = `${processNumber}_${Date.now()}.pdf`;
        const fileFullPath = path.join(filePath, fileName);
        
        const writeStream = fs.createWriteStream(fileFullPath);
        doc.pipe(writeStream);
        doc.fontSize(12).text(`Número do Processo: ${processNumber}`);
        doc.text(`Descrição da Propriedade: ${propertyDescription}`);
        doc.text(`Código Postal: ${postalCode}`);
        doc.end();

        writeStream.on('close', () => {
            const fileUrl = `http://localhost:3333/files/${fileName}`;
            resolve(fileUrl);
        });

        writeStream.on('error', reject);
    });
};
