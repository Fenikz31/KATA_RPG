import { CHARACTERS, GAME } from './descriptors'
import Store from './store'

export function attack(target) {
    return {
        type: CHARACTERS.ATTACK,
        payload: target
    }
}

export function create() {
    return { type: CHARACTERS.CREATE }
}

// function gameStartFailure() {
//     return {
//         type: GAME.START.FAILURE
//     }
// }

// function gameStartSuccess() {
//     return {
//         type: GAME.START.SUCCESS
//     }
// }

export function gameInit() {
    return startGame()
}

function startGame() {
    const { characters } = Store.getState(),
    namesNb = Object.keys(characters)
    console.log(namesNb)
    return namesNb
}

export function gameFight() {
    return {
        type: GAME.FIGHT
    }
}

export function gameRound() {
    return {
        type: GAME.ROUND
    }
}

export function gameInitiative() {
    return {
        type: GAME.INITIATIVE
    }
}

export function gameOrder() {
    return {
        type: GAME.ORDER
    }
}

export function gameNext() {
    return {
        type: GAME.NEXT
    }
}

export function gameCheck() {
    return {
        type: GAME.CHECK
    }
}

export function gameEnd() {
    return {
        type: GAME.END
    }
}

// export function gainXp(xp) {
//     return {
//         type: CHARACTERS.GAIN_XP,
//         // payload: xp
//     }
// }

// export function heal(target) {
//     return {
//         type: CHARACTERS.HEAL,
//         payload: target
//     }
// }

// export function levelUp() {
//     return { type: CHARACTERS.LEVEL_UP }
// }

// export function move(x, y) {
//     return {
//         type: CHARACTERS.MOVE,
//         payload: { x, y }
//     }
// }