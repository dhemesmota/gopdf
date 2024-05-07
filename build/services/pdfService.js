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
const pdfkit_1 = __importDefault(require("pdfkit"));
const generatePDF = (processNumber, propertyDescription, postalCode) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const doc = new pdfkit_1.default();
        const fileName = `files/${processNumber}_${Date.now()}.pdf`;
        const filePath = `${__dirname}/../../${fileName}`;
        doc.pipe(fs_1.default.createWriteStream(filePath));
        doc.fontSize(12).text(`Número do Processo: ${processNumber}`);
        doc.text(`Descrição da Propriedade: ${propertyDescription}`);
        doc.text(`Código Postal: ${postalCode}`);
        doc.end();
        doc.on('finish', () => resolve(`http://localhost:3000/${fileName}`));
        doc.on('error', reject);
    });
});
exports.generatePDF = generatePDF;
