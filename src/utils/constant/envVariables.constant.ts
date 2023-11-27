import dotenv from 'dotenv';
dotenv.config();

export const envVariables = {
    PORT: process.env.PORT || 5050,
    POKEMON_SPECIE_URL: process.env.POKEMON_SPECIE_URL || 'https://pokeapi.co/api/v2/pokemon-species'
};
