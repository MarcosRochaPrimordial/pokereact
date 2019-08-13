import { Controller } from 'decorated-router';

@Controller({url: '/pokemon', cors: '*'})
export class PokemonController {

    constructor() {}
}