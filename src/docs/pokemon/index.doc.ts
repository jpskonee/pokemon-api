import getPokemonByNameDoc from './getPokemonByName.doc';

export default {
    paths: {
        '/api/pokemon/{pokemonName}': {
            ...getPokemonByNameDoc
        }
    }
};
