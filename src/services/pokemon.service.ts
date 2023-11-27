import axios from 'axios';
import { PokemonHelpers } from '../utils/helpers/pokemon.helper';
import { envVariables } from '../utils/constant/envVariables.constant';

export abstract class PokemonService {
    static async getPokemonByName(name: string): Promise<any> {
        try {
            const { data } = await axios.get(`${envVariables.POKEMON_SPECIE_URL}/${name}`);
            return data;
        } catch (error: any) {
            console.log(error.message);
            return {};
        }
    }

    static async getPokemonEvolutionTree(url: string, format: boolean = true): Promise<any> {
        try {
            const { data } = await axios.get(url);
            if (!format) return data;

            if (!data?.chain) return {};
            return PokemonHelpers.mapVariationsEvolutionTree(data?.chain);
        } catch (error: any) {
            console.log(error.message);
            return {};
        }
    }
}
