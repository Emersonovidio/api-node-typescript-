import express  from "express";
import { StatusCodes } from 'http-status-codes';
import BooksRoutes from './routes/books.routes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).send('Express+Typescript')
});

app.listen(PORT, () => {
    console.log( `Server ir running on ${PORT}`);
});
app.use(BooksRoutes);