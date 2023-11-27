import { type Request, type Response } from 'express';
import { PokemonService } from '../services/pokemon.service';
import { FormatApiResponse } from '../utils/helpers/sendResponse.helper';
import { statusCode } from '../utils/constant/statusCode.constant';

export abstract class PokemonController {
    static async getPokemonVariationByName(req: Request, res: Response): Promise<void> {
        try {
            const { pokemonName } = req.params;

            const data = await PokemonService.getPokemonByName(pokemonName);

            if (data?.id === undefined) {
                FormatApiResponse.sendErrorResponse({ res, code: statusCode.NOT_FOUND, error: `No Pokemon found for : ${pokemonName}` });
                return;
            }

            const evolutionUrl = data?.evolution_chain?.url;
            if (!evolutionUrl) {
                FormatApiResponse.sendSuccessResponse({ res, data: { name: data?.name, variations: [] } });
                return;
            }

            const variationData = await PokemonService.getPokemonEvolutionTree(evolutionUrl);

            FormatApiResponse.sendSuccessResponse({ res, data: variationData });
        } catch (error: any) {
            FormatApiResponse.catchErrorAndSendResponse({ res, error });
        }
    }
}
