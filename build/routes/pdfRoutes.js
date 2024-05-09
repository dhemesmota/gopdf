"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pdfController_1 = require("../controllers/pdfController");
const welcomeController_1 = require("../controllers/welcomeController");
const router = express_1.default.Router();
router.get('/', welcomeController_1.getHello);
router.post('/generate-pdf', pdfController_1.generatePDFController);
exports.default = router;
