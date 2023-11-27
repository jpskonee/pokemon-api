export default {
    components: {
        schemas: {
            pokemonName: {
                type: 'string',
                description: 'The name of the pokemon',
                example: 'charmeleon'
            },
            Error: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    },
                    internal_code: {
                        type: 'string'
                    }
                }
            }
        }
    }
};
