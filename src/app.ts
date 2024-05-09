import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import pdfRoutes from './routes/pdfRoutes';

const app = express();
const port = 4001;


app.use(cors()); 

app.use(bodyParser.json());
app.use(pdfRoutes);

app.use('/files', express.static(path.join(__dirname, '../files')));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
