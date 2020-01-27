import { MergeObject } from '../lib/utils'
import { BASE, CHARACTER, RACES, GAME } from './defaults.js'
import { Dice } from './utils.js'
import { CHARACTERS } from './descriptors'

export const Characters = {
  attack(s, p) {
    const { character, target } = p,
      { health, agility } = s[target],
      offense = (s[character].dexterity) * 0.3,
      defense = agility * 0.2,

      value = health - offense + defense

    return {
      ...s,
      [target]: {
        ...s[target],
        alive: value > 0,
        defense: defense,
        health: value > 0 ? value : 0,
        offense: offense
      }
    }
  },

  create(s, p) {
    const races = Object.keys(RACES),
      selection = Dice(races.length) - 1,
      race = races.filter((k, i) => i === selection)[0],
      attributes = MergeObject(Object.keys(RACES[race])
        .map((attribut) => ({
          [attribut]: RACES[race][attribut] + BASE[attribut]
        })))


    return {
      ...s,
      [p.name]: {
        ...CHARACTER,
        ...attributes,
        maxHealth: attributes.health,
        race
      }
    }
  },

  initiative(s, p) {

    const { pkan, fera } = s,
      names = Object.keys(s),
      initiative = names.map((name) => ({
        [name]: Dice(s[name].dexterity + s[name].agility)
      }))
        .reduce((a, v) => ({ ...a, ...v }), {}),
      alives = names.map(
        (name) => s[name].alive
      ).reduce(
        (a, b) => a && b, true
      )

    let attacker = null

    if (attacker !== undefined && alives) {
      if ((pkan.initiative - fera.initiative) >= 0) {
        attacker = names[0]
      } else attacker = names[1]
    }

    return {
      ...s,
      ['pkan']: {
        ...pkan,
        initiative: initiative.pkan,
        character: attacker,
        target: names.filter((name) => name !== attacker)[0],
      },
      ['fera']: {
        ...fera,
        initiative: initiative.fera,
        character: attacker,
        target: names.filter((name) => name !== attacker)[0],
      },

    }

  },

  order(s, p) {

    const { pkan, fera } = s,
      names = Object.keys(s),
      alives = names.map(
        (name) => s[name].alive
      ).reduce(
        (a, b) => a && b, true
      )

    let attacker = null


    console.log('----------------------------------------------------------')
    console.log('s:  ', s)
    console.log('----------------------------------------------------------')
    console.log('attacker:  ', attacker)
    console.log('----------------------------------------------------------')

    if (attacker !== undefined) {
      if ((pkan.initiative - fera.initiative) >= 0) {
        attacker = names[0]
      } else attacker = names[1]
    }

    return {
      ...s,
      ['pkan']: {
        ...pkan,
        character: attacker,
        target: names.filter((name) => name !== attacker)[0],
      },
      ['fera']: {
        ...fera,
        character: attacker,
        target: names.filter((name) => name !== attacker)[0],
      },

    }

  },
  /* 
  gainXP (s, p) {
    console.log('s: ', s)
    console.log('p: ', p)
      const { addXp, character } = p,
      { xp } = s[character],
      value = xp + addXp
      
      return {
        ...s,
        [ character ]: {
          ...s[character],
          xp: value 
        }
      }
      return s
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
    }, */
}

export const Game = {

  init(s, p) {

    return {
      ...s,
      ...GAME
    }
  },

  start(s, p) {
    const { initialization } = p

    return {
      ...s,
      ready: false,
      initialization: !initialization,

    }
  },

  fight(s, p) {
    const { fight } = p

    return {
      ...s,
      ready: !fight

    }
  },

  order(s, p) {
    console.log('s: ', s)
    console.log('p: ', p)
    const { fight } = p

    return {
      ...s,
      ready: !fight

    }
  },



}