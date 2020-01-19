import { CreateConnector } from '../lib/factories'
import {
    attack,
    create,
    gainXp,
    heal,
    levelUp
} from './actions'
import { CHARACTERS } from "./descriptors";

export const CharacterConnector = CreateConnector(
    (state) => ({
        characters: characters.state
    }),
    
    (dispatch) => ({
        attack
    })
)