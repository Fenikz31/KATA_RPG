import { MergeObject } from '../lib/utils'
import { BASE, CHARACTER, RACES } from './defaults.js'
import { Dice } from './utils.js'

export const Characters = {
  attack (s, p) {
    const { damage, target } = p,
          { health } = s[target],
          value = health - damage

    return {
      ...s,
      [ target ]: {
        ...s[target],
        alive: value > 0,
        health: value > 0 ? value : 0
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

  /* heal (s, p) {
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
  } */
}
