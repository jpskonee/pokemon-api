import { createServer } from 'http';
import supertest from 'supertest';
import app from '../../index';

const server = createServer(app);
const request = supertest(server);

describe('GET /pokemon/:pokemonName', () => {
    it('should return a 200 status and found pokemon variation object tree', async () => {
        const response = await request.get('/pokemon/charmeleon');
        expect(response.status).toBe(200);
        expect(response.body?.message).toBe('Operation Successful!');
        expect(response.body?.data?.name).toBe('charmander');
    });

    it('should return a 404 status for unknown pokemon', async () => {
        const response = await request.get('/pokemon/james');
        expect(response.status).toBe(404);
        expect(response.body?.error).toBe('No Pokemon found for : james');
    });

    it('should validate params to be a valid string - return a 400 status (Bad request)', async () => {
        const response = await request.get('/pokemon/akkr&*%5E');
        expect(response.status).toBe(400);
        expect(response.body?.error).toBe('"pokemonName" must only contain alpha-numeric characters');
    });
});
