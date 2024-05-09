"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const pdfRoutes_1 = __importDefault(require("./routes/pdfRoutes"));
const app = (0, express_1.default)();
const port = 4001;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(pdfRoutes_1.default);
app.use('/files', express_1.default.static(path_1.default.join(__dirname, '../files')));
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
