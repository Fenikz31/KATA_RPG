import { CHARACTERS } from './descriptors'
import { Dice } from './utils'
/* 
export const GameMiddleware = (store) => (next) => (payload) => {
  const result = next( payload ),
        { character, type } = payload,
        { characters } = store.getState(),
        names = Object.keys( characters ),
        alives = names.map(
          (name) => characters[name].alive
        ).reduce(
          (a, b) => a && b, true
        )
  
  switch (type) {
    case CHARACTERS.CREATE:
      if (names.length === 2) {
        const attacker = names[Dice( 2 ) - 1]

        Object.keys( characters ).forEach( (name) => {
          console.log( name, JSON.stringify( characters[name] ))
        })

        store.dispatch({
          type: CHARACTERS.ATTACK,
          character: attacker,
          target: names.filter( (name) => name !== attacker)[0],
          damage: Dice( 6, 2 )
        })
      }

      break

    case CHARACTERS.ATTACK:
    case CHARACTERS.HEAL:
      if (alives) {
        const current = names.filter( (name) => name !== character)[0],
              healing = Dice( 100 ),
              maxed = characters[current].health === characters[current].maxHealth

        if (healing <= 20 && characters[current].heal > 0 && !maxed) {
          store.dispatch({
            type: CHARACTERS.HEAL,
            character: current,
            heal: Dice( 6, characters[current].heal )
          })
        }
        else {
          store.dispatch({
            type: CHARACTERS.ATTACK,
            character: current,
            target: character,
            damage: Dice( 6, characters[current].damage )
          })
        }
      }
  }

  return result
}

export const ReportMiddleware = (store) => (next) => (payload) => {
  const result = next( payload ),
        { character, damage, heal, target, type } = payload,
        { characters } = store.getState()

  if (type === CHARACTERS.ATTACK) {
    console.log( `${character} hit ${target} for ${damage}` )

    if (!characters[target].alive)
      console.log( `${target} die !` )
  }
  else if (type === CHARACTERS.HEAL) {
    console.log( `${character} self heal for ${heal}` )
  }

  if (type !== CHARACTERS.CREATE) {
    Object.keys( characters ).forEach( (name) => {
      const { health, maxHealth } = characters[name]
      console.log( `* ${name}: ${health}/${maxHealth}` )
    })
  }

  return result
}
 */