import { CHARACTERS } from './descriptors'
import { Dice } from './utils'

export const GameMiddleware = (store) => (next) => (payload) => {
  const result = next(payload),
    { character, type } = payload,
    { characters } = store.getState(),
    names = Object.keys(characters),
    alives = names.map(
      (name) => characters[name].alive
    ).reduce(
      (a, b) => a && b, true
    )


  if (names.length === 2 && alives) {
    const attacker = names[Dice(2) - 1]

    Object.keys(characters).forEach((name) => {
      console.log(name, JSON.stringify(characters[name]))
    })

    store.dispatch({
      type: CHARACTERS.ATTACK,
      character: attacker,
      target: names.filter((name) => name !== attacker)[0],
      damage: Dice(6, 2)
    })

  }
  return result
}


// export const ReportMiddleware = (store) => (next) => (payload) => {
//   const result = next(payload),
//     { character, damage, heal, target, type } = payload,
//     { characters } = store.getState()

//   if (type === CHARACTERS.ATTACK) {
//     console.log(`${character} hits ${target} for ${damage}`)

//     if (!characters[target].alive)
//       console.log(`${target} die !`)
//   }
//   else if (type === CHARACTERS.HEAL) {
//     console.log(`${character} self heal for ${heal}`)
//   }

//   if (type !== CHARACTERS.CREATE) {
//     Object.keys(characters).forEach((name) => {
//       const { health, maxHealth } = characters[name]
//       console.log(`* ${name}: ${health}/${maxHealth}`)
//     })
//   }

//   return result
// }
