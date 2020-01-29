import { CHARACTERS, GAME } from './descriptors'
import { Dice } from './utils'
import { CHARACTER } from './defaults'

export const GameMiddleware = ({ getState, dispatch }) => (next) => (payload) => {
  const result = next(payload),
    { type } = payload,
    { characters, game } = getState(),
    { opponents } = game


  switch (type) {

    case CHARACTERS.CREATE:

    case GAME.START:

      const count = Object.keys(characters).length

      if (count === 2) {
        dispatch({ type: GAME.READY })
      }
      else {
        const name = opponents[count]
        dispatch({ type: CHARACTERS.CREATE, name })
      }

      break

    case GAME.READY:

      dispatch({ type: CHARACTERS.INITIATIVE })

      break

    case CHARACTERS.INITIATIVE:

      dispatch({ type: GAME.ROUND })

      break

    case GAME.ROUND:

      dispatch({ type: CHARACTERS.ATTACK })

      break

    case CHARACTERS.ATTACK:

      dispatch({ type: GAME.NEXT })

      break

    case GAME.NEXT:

      dispatch({ type: CHARACTERS.CHECK })

      break

    case CHARACTERS.CHECK:

      const names = Object.keys(characters),
        character = names.map(
          (name) => characters[name].attacker
        ).reduce((a, b) => a.includes(b) ? a : [...a, b], []),
        opponent = names.map(
          (name) => characters[name].target
        ).reduce((a, b) => a.includes(b) ? a : [...a, b], []),
        alive = characters[opponent].alive

      if (alive) {
        dispatch({ type: CHARACTERS.ORDER })
      }
      else dispatch({ type: GAME.END })

      break

    case CHARACTERS.ORDER:

      dispatch({ type: GAME.ROUND })

      break

      case GAME.END:
        break
  }

  return result
}
