import Joi from 'joi';

export const pokemonNameSchema = Joi.object({
    pokemonName: Joi.string().alphanum().required()
});
