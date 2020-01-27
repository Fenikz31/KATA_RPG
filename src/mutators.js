import { MergeObject } from '../lib/utils'
import { BASE, CHARACTER, RACES, GAME } from './defaults.js'
import { Dice } from './utils.js'

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

    const characters = Object.keys(s),
    initiative = characters.map((name) => ({ [name]: Dice(s[name].dexterity + s[name].agility) }))
    .reduce((a, v) => ({ ...a, ...v }), {})
    // names = Object.keys(s).map((name) =>({...name}), {}),
    // player = characters.map(name => name),
    //initiative attributes to compare


    // console.log(names)
    return {
      ...s,
      initiative: initiative,
    }

  },

  order(s, p) {
    const { character, type, target, damage, name } = p,
    { characters, defense, offense } = s,
    names = Object.keys(s).map((name) => s[type]),//.reduce((a, v) => ({ ...a, ...v }), {})
    substractValues = obj => Object.values(obj).reduce((a, b) => a - b)

    // alives = names.map(
    //   (name) => s[name].alive
    // ).reduce(
    //   (a, b) => a && b, true
    // )

    console.log('s: ', Object.keys(s.initiative))
    console.log('p.params :', p.type)

    console.log(substractValues(s.initiative))



    if (names.length === 2 && alives) {
      const attacker = names[Dice(2) - 1]

      Object.keys(characters).forEach((name) => {
        console.log(name, JSON.stringify(characters[name]))
      })
    }
    
    return {
      ...s,
      initiative: substractValues(s.initiative)
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