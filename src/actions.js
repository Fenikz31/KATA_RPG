import { CHARACTERS } from './descriptors'

const attack = (target) => ({
    type: CHARACTERS.ATTACK,
    payload: target
})

const create = () => ({
    type: CHARACTERS.CREATE,
})

const gainXp = (xp) => ({
    type: CHARACTERS.GAIN_XP,
    payload: xp
})

const heal = (target) => ({
    type: CHARACTERS.HEAL,
    payload: target
})

const levelUp = () => ({
    type: CHARACTERS.LEVEL_UP,
})

const move = (x, y) => ({
    type: CHARACTERS.MOVE,
    payload: { x, y}
})