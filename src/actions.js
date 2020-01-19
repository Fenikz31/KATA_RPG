import { CHARACTERS } from './descriptors'

export function attack(target) {
    return {
        type: CHARACTERS.ATTACK,
        payload: target
    }
}

export function create() {
    { type: CHARACTERS.CREATE }
}

export function gainXp(xp) {
    return {
        type: CHARACTERS.GAIN_XP,
        payload: xp
    }
}

export function heal(target) {
    return {
        type: CHARACTERS.HEAL,
        payload: target
    }
}

export function levelUp() {
    return { type: CHARACTERS.LEVEL_UP }
}

export function move(x, y) {
    return {
        type: CHARACTERS.MOVE,
        payload: { x, y }
    }
}