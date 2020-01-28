import { CreateConnector } from '../lib/factories'

import { CHARACTERS, GAME } from "./descriptors";

export const CharacterConnector = CreateConnector(
    (state) => ({
        characters: characters.state
    }),

    (dispatch) => ({
        attack({ target = null } = {}) {
            dispatch({ type: CHARACTERS.ATTACK, target })
        }
    }),

    (dispatch) => ({
        create() {
            dispatch({ type: CHARACTERS.CREATE })
        }
    }),
    /* 
    (dispatch) => ({
        gainXp() {
            dispatch({ type: CHARACTERS.GAIN_XP })
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
    
    (dispatch) => ({
        move({ x = null, y= null} = {}) {
            dispatch({ type: CHARACTERS.MOVE,x ,y })
        }
    }), */

)

export const GameConnector = CreateConnector(
    (state) => ({
        characters: characters.state,
        game: game.state
    }),

    (dispatch) => ({
        init() {
            dispatch({ type: GAME.INIT })
        }
    }),

    (dispatch) => ({
        start() {
            dispatch({ type: GAME.START })
        }
    }),

    (dispatch) => ({
        fight() {
            dispatch({ type: GAME.FIGHT })
        }
    }),

    (dispatch) => ({
        round() {
            dispatch({ type: GAME.ROUND })
        }
    }),

    (dispatch) => ({
        initiative() {
            dispatch({ type: GAME.INITIATIVE })
        }
    }),

    (dispatch) => ({
        order() {
            dispatch({ type: GAME.ORDER })
        }
    }),

    (dispatch) => ({
        next() {
            dispatch({ type: GAME.NEXT })
        }
    }),

    (dispatch) => ({
        check() {
            dispatch({ type: CHARACTERS.CHECK })
        }
    }),

    (dispatch) => ({
        end() {
            dispatch({ type: GAME.END })
        }
    }),

)