import { CHARACTERS } from './descriptors'
import { Dice, countXp } from './utils'

export const GameMiddleware = (store) => (next) => (payload) => {
  const result = next(payload),
    { character, type, target, damage } = payload,
    { characters, defense, offense } = store.getState(),
    names = Object.keys(characters),
    alives = names.map(
      (name) => characters[name].alive
    ).reduce(
      (a, b) => a && b, true
    )
  console.log('---------------------------')
  console.log('payload: ', payload)
  console.log('store: ', store.getState())

  switch (type) {
    case CHARACTERS.ATTACK:
    case CHARACTERS.CREATE:
      if (names.length === 2 && alives) {
        const attacker = names[Dice(2) - 1]

        Object.keys(characters).forEach((name) => {
          console.log(name, JSON.stringify(characters[name]))
        })

        store.dispatch({
          ...characters,
          type: CHARACTERS.ATTACK,
          character: attacker,
          target: names.filter((name) => name !== attacker)[0],
          // damage: Dice(6, 2)
        })
        console.log(`CHARACTER------------------`)
        console.log('characters: ', characters[target])
        console.log(`------------------`)
        console.log('defense: ', defense)
        console.log('offense: ', offense)
        console.log(`${character} hit ${target} for ${damage}`)
        console.log(`${target} health is ${characters[target].health}`)

        if (!characters[target].alive)
          console.log(`${target} die !`)

      }
      break

    case CHARACTERS.GAIN_XP:
      if (!characters[target].alive) {
        console.log(`------------------`)
        console.log(`${target} dies`)
        console.log(`${character} wins!`)
        console.log('--------------------------------------')
        console.log(characters)
        console.log('--------------------------------------')
      }
      // store.dispatch({
      //   type: CHARACTERS.GAIN_XP,
      //   character: characters.alive,
      //   xp: characters[attacker].xp + 10,
      // })
      break

    default:
      break
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
