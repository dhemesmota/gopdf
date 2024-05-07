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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePDFController = void 0;
const pdfService_1 = require("../services/pdfService");
const generatePDFController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { processNumber, propertyDescription, postalCode } = req.body;
        const fileUrl = yield (0, pdfService_1.generatePDF)(processNumber, propertyDescription, postalCode);
        res.status(200).json({ url: fileUrl });
    }
    catch (err) {
        console.error('Erro ao gerar o PDF:', err);
        res.status(500).json({ error: 'Erro ao gerar o PDF' });
    }
});
exports.generatePDFController = generatePDFController;
