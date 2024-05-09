"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePDF = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pdfkit_1 = __importDefault(require("pdfkit"));
const generatePDF = (processNumber, propertyDescription, postalCode) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const doc = new pdfkit_1.default();
        // Caminho para a pasta files na raiz do projeto
        const filePath = path_1.default.join(__dirname, '../../files');
        // Certifique-se de que a pasta existe, se não, crie-a
        if (!fs_1.default.existsSync(filePath)) {
            fs_1.default.mkdirSync(filePath, { recursive: true });
        }
        // Nome do arquivo
        const fileName = `${processNumber}_${Date.now()}.pdf`;
        const fileFullPath = path_1.default.join(filePath, fileName);
        const writeStream = fs_1.default.createWriteStream(fileFullPath);
        doc.pipe(writeStream);
        doc.fontSize(12).text(`Número do Processo: ${processNumber}`);
        doc.text(`Descrição da Propriedade: ${propertyDescription}`);
        doc.text(`Código Postal: ${postalCode}`);
        doc.end();
        writeStream.on('close', () => {
            const fileUrl = `https://gopdf.js029587168gb.com/files/${fileName}`;
            resolve(fileUrl);
        });
        writeStream.on('error', reject);
    });
});
exports.generatePDF = generatePDF;
