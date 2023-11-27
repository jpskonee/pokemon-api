import { type Request, type Response, Router } from 'express';
import pokemonRoutes from './pokemon.route';
import { statusCode } from '../utils/constant/statusCode.constant';
import path from 'path';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(statusCode.SUCCESS_OK).sendFile(path.join(__dirname, '../../public', 'index.html'));
});

router.use('/pokemon', pokemonRoutes);

export default router;
