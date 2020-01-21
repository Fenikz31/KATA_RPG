import { MergeObject } from '../lib/utils'
import { BASE, CHARACTER, RACES } from './defaults.js'
import { Dice } from './utils.js'

export const Characters = {
  attack (s, p) {
    const { character, target } = p,
          { health, agility } = s[target],
          offense = (s[character].dexterity)*0.3,
          defense = agility * 0.2,

          value = health - offense - defense

    return {
      ...s,
      [ target ]: {
        ...s[target],
        alive: value > 0,
        defense: defense,
        health: value > 0 ? value : 0,
        offense: defense
      }
    }
  },

  create (s, p) {
    const races = Object.keys( RACES ),
          selection = Dice( races.length ) - 1,
          race = races.filter( (k, i) => i === selection )[0],
          attributes = MergeObject( Object.keys( RACES[race] ).map( (attribut) => ({
            [ attribut ]: RACES[race][attribut] + BASE[attribut]
          })))

    return {
      ...s,
      [ p.name ]: {
        ...CHARACTER,
        ...attributes,
        maxHealth: attributes.health,
        race
      }
    }
  },

  gainXP (s, p) {
    console.log('s: ', s)
    // console.log('p: ', p)
    // const { addXp, character } = p,
    //       { xp } = s[character],
    //       value = xp + addXp

    // return {
    //   ...s,
    //   [ character ]: {
    //     ...s[character],
    //     xp: value 
    //   }
    // }
  },

  heal (s, p) {
    const { heal, character } = p,
          { health, maxHealth } = s[character],
          value = health + heal

    return {
      ...s,
      [ character ]: {
        ...s[character],
        health: value > maxHealth ? maxHealth : value
      }
    }
  },

  levelUp (s, p) {
    const { level } = s

    return {
      ...s,
      [ character ]: {
        ...s[character],
        level: level
      }
    }
  },
}
