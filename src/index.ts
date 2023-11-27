import express, { type Application, type Request, type Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import allRoutes from './routes/index.route';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './docs/index.doc';
import swaggerJsDoc from 'swagger-jsdoc';
import dotenv from 'dotenv';
import { envVariables } from './utils/constant/envVariables.constant';
dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

const specs = swaggerJsDoc(swaggerDoc);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css' }));

app.use('/api', allRoutes);

app.use('*', async (_: Request, res: Response) => {
    res.status(404).json({ message: 'Invalid Route. Please visit our doc for guides.' });
});

const PORT = envVariables.PORT;
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});

process.on('uncaughtException', (err: Error) => {
    console.error('Uncaught Exception', err);
});

process.on('unhandledRejection', (reason: any) => {
    console.error('Unhandled Rejection', reason);
});

export default app;
