import bodyParser from 'body-parser';
import express from 'express';
import pdfRoutes from './routes/pdfRoutes';

const app = express();
const port = 3333;

app.use(bodyParser.json());
app.use(pdfRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
