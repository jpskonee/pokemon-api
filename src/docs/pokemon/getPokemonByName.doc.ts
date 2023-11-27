export default {
    get: {
        tags: ['Get Pokemon Variations'],
        description: 'Get pokemon variations by name.',
        operationId: 'getPokemonVariationByName',
        parameters: [
            {
                name: 'pokemonName',
                in: 'path',
                default: 'charmeleon',
                schema: {
                    $ref: '#/components/schemas/pokemonName'
                },
                required: true,
                description: 'Get the Pokemon variation tree.'
            }
        ],
        responses: {
            200: {
                description: 'Pokemon variation tree.',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/pokemonName'
                        }
                    }
                }
            },
            404: {
                description: 'Pokemon variation tree.',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error',
                            example: {
                                message: '  ',
                                internal_code: 'Invalid name'
                            }
                        }
                    }
                }
            }
        }
    }
};
