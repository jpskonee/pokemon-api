import serverDoc from './server.doc';
import pokemonDoc from './pokemon/index.doc';
import componentDoc from './components.doc';
import { API_VERSION } from '../version';

export default {
    definition: {
        openapi: '3.0.1',
        info: {
            version: `${API_VERSION}`,
            title: 'Pokemon API',
            description: 'Pokemon API Playground    ',
            contact: {
                name: 'Emmanuel Agho',
                email: 'wapemma@yahoo.com'
            }
        },
        ...serverDoc,
        ...componentDoc,
        ...pokemonDoc
    },
    apis: ['src/**/*.ts']
};
