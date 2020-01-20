import { CreateConnector } from '../lib/factories'

import { CHARACTERS } from "./descriptors";

export const CharacterConnector = CreateConnector(
    (state) => ({
        characters: characters.state
    }),
    
    (dispatch) => ({
        attack({target = null} = {}) {
            dispatch({ type: CHARACTERS.ATTACK, target })
        }
    }),
    
    (dispatch) => ({
        create() {
            dispatch({ type: CHARACTERS.CREATE })
        }
    }),
    
    (dispatch) => ({
        gainXp({ xp = 10}) {
            dispatch({ type: CHARACTERS.GAIN_XP, xp })
        }
    }),
    
    (dispatch) => ({
        heal(target) {
            dispatch({ type: CHARACTERS.HEAL, target })
        }
    }),
    
    (dispatch) => ({
        levelUp() {
            dispatch({ type: CHARACTERS.LEVEL_UP })
        }
    }),
    
    /* (dispatch) => ({
        move({ x = null, y= null} = {}) {
            dispatch({ type: CHARACTERS.MOVE,x ,y })
        }
    }), */
)