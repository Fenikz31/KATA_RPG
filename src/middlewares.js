import { CHARACTERS, GAME } from './descriptors'
import { Dice } from './utils'
import { CHARACTER } from './defaults'

export const GameMiddleware = ({ getState, dispatch }) => (next) => (payload) => {
  const result = next(payload),
    { type } = payload,
    { characters, game } = getState(),
    { opponents, turn, round } = game


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

      const scores = Object.keys(characters).map((name) => ({
        name, value: characters[name].initiative
      }))

        , attacker = scores.reduce(
          (a, b) => a.value < b.value ? b : a,
          { value: 0 }
        ).name

        , defender = Object.keys(characters).filter(
          (name) => name !== attacker
        )[0]

      dispatch({
        type: GAME.ROUND.BEGIN,
        attacker: attacker,
        defender: defender
      })

      break

    case GAME.ROUND.BEGIN:


      dispatch({
        ...payload,
        type: CHARACTERS.ATTACK
      })

      break

    case CHARACTERS.ATTACK:

      dispatch({
        ...payload,
        type: GAME.ROUND.NEXT
      })

      break

    case GAME.ROUND.NEXT:

      if (characters[payload.defender].alive) {
        dispatch({
          ...payload,
          type: CHARACTERS.CHECK
        })
      }
      else dispatch({
        ...payload,
        type: GAME.END
      })


      break

    case CHARACTERS.CHECK:

      if (turn % 2 !== 1) {

        dispatch({
          ...payload,
          type: CHARACTERS.ORDER
        })
      }
      else {
        dispatch({
          ...payload,
          type: GAME.ROUND.END
        })
      }

      break

    case CHARACTERS.ORDER:

      dispatch({
        ...payload,
        type: CHARACTERS.ATTACK,
        attacker: payload.defender,
        defender: payload.attacker
      })

      break

    case GAME.ROUND.END:

      dispatch({ type: CHARACTERS.INITIATIVE })

      break


    case GAME.END:
      break
  }

  return result
}

export const ReportMiddleware = ({ getState }) => (next) => (payload) => {
  const result = next(payload),
    { attacker, defender, type } = payload,
    { characters, game } = getState(),
    { round, turn } = game

  // console.log( '++++++++++++++++++++++++++++++++++++++' )
  // console.log( 'Characters: ', characters )
  // console.log( '++++++++++++++++++++++++++++++++++++++' )

  switch (type) {

    case GAME.READY:

      Object.keys(characters).forEach((name) => {

        const {
          agility, dexterity, heal, health, intelligence, mana, stamina, strength, race
        } = characters[name]

        console.log()
        console.log(name, ':', race, { agility, dexterity, heal, health, intelligence, mana, strength, stamina })
        console.log()

      })

      break

    case GAME.ROUND.BEGIN:

      console.log(`-- Round ${round} -- `)

      break

    case CHARACTERS.ATTACK:

      console.log(`-- Turn ${turn} -- `)

      console.log()
      console.log(`-------- ++++++++ --------`)
      console.log(`${attacker} hits ${defender} for ${characters[attacker].damage} damage.`)
      console.log(`${defender} health is ${characters[defender].health} / ${characters[defender].maxHealth}. `)
      console.log(`-------- ++++++++ --------`)
      console.log()

      break

    case GAME.END:
      console.log(`${characters[payload.defender].race} ${payload.defender} dies!!`)
      console.log(`**** ++++++++++ ****`)
      console.log(`${characters[payload.attacker].race} ${payload.attacker} wins!!`)
      break
  }
}