import { CHARACTERS } from './descriptors'

function attack(target) {
    return {
        type: CHARACTERS.ATTACK,
        payload: target
    }
}

function create() {
    { type: CHARACTERS.CREATE }
}

function gainXp(xp) {
    return {
        type: CHARACTERS.GAIN_XP,
        payload: xp
    }
}

function heal(target) {
    return {
        type: CHARACTERS.HEAL,
        payload: target
    }
}

function levelUp() {
    return { type: CHARACTERS.LEVEL_UP }
}

function move(x, y) {
    return {
        type: CHARACTERS.MOVE,
        payload: { x, y }
    }
}