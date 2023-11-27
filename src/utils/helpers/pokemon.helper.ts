import { type PokemonResponseProp } from '../constant/pokemon.constant';

export class PokemonHelpers {
    static mapVariationsEvolutionTree(rawDataObject: any): PokemonResponseProp {
        if (!rawDataObject?.species?.name) return {};

        const result: PokemonResponseProp = { name: rawDataObject.species.name, variations: [] };

        if (rawDataObject?.evolves_to?.length > 0) {
            for (const evolution of rawDataObject.evolves_to) {
                const variation = this.mapVariationsEvolutionTree(evolution);
                if (variation?.name !== undefined) {
                    if (!result?.variations) result.variations = [];
                    result.variations.push(variation);
                }
            }
        }
        return result;
    }
}
