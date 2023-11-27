import { type PokemonResponseProp } from '../../utils/constant/pokemon.constant';
import { PokemonHelpers } from '../../utils/helpers/pokemon.helper';

const dummyRawDataObject = {
    id: 1,
    species: { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
    evolution_details: [],
    is_baby: false,
    evolves_to: [
        {
            id: 2,
            evolution_details: [],
            species: { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' },
            is_baby: false,
            evolves_to: [
                {
                    id: 3,
                    species: { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon-species/4/' },
                    evolution_details: [],
                    is_baby: false,
                    evolves_to: []
                }
            ]
        }
    ]
};

describe('PokemonHelpers', () => {
    describe('mapVariationsEvolutionTree Tests', () => {
        it('should return an empty object if rawDataObject or species.name is undefined', () => {
            const result = PokemonHelpers.mapVariationsEvolutionTree({});
            expect(result).toEqual({});
        });

        it('should map variations in the evolution tree correctly, ignoring extra data.', () => {
            const result = PokemonHelpers.mapVariationsEvolutionTree(dummyRawDataObject);

            const expectedFormat: PokemonResponseProp = {
                name: 'charmander',
                variations: [
                    {
                        name: 'charmeleon',
                        variations: [
                            {
                                name: 'charizard',
                                variations: []
                            }
                        ]
                    }
                ]
            };

            expect(result).toEqual(expectedFormat);
        });
    });
});
