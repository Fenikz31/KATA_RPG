import { MergeObject } from '../lib/utils'
import { BASE, CHARACTER, RACES, GAME } from './defaults.js'
import { Dice } from './utils.js'

export const Characters = {
  attack(s, p) {
    const names = Object.keys(s),

      target = names.map((name) => s[name].target)
        .reduce((a, b) => a.includes(b) ? a : [...a, b], []),
      character = names.map((name) => s[name].character)
        .reduce((a, b) => a.includes(b) ? a : [...a, b], []),
      { health, agility, maxHealth} = s[target],
      offense = (s[character].dexterity + s[character].damage) * 3,
      defense = agility * 4,

      value = health - offense + defense

    console.log([character] + ' hits for ' + offense + ' ' + [target])
    console.log([target] + ' defense is ' + defense + '. ' + [target] + ' takes ' + (health - value) + ' damage.')


    return {
      ...s,
      [target]: {
        ...s[target],
        alive: value > 0,
        health: (value > maxHealth) ? maxHealth: (value > 0) ? value : 0
      }
    }
  },

  create(s, p) {
    const races = Object.keys(RACES),
      selection = Dice(races.length) - 1,
      race = RACES[races[selection]],
      attributes = MergeObject(Object.keys(race)
        .map((attribut) => ({
          [attribut]:race[attribut] + BASE[attribut]
        })))


    return {
      ...s,
      [p.name]: {
        ...CHARACTER,
        ...attributes,
        maxHealth: attributes.health,
      }
    }
  },

  initiative(s, p) {

    const names = Object.keys(s),
      initiativeArr = names.map((name) => ({
        player: name,
        score: Dice(s[name].dexterity + s[name].agility)
      }))
      ,
      fastest = initiativeArr
        .reduce((a, b) => (a.score || 0) >= b.score ? a : b, {}),
      target = initiativeArr
        .reduce((a, b) => (b.score || 0) > a.score ? a : b, {})

    return {
      ...s,
      [fastest.player]: {
        ...s[fastest.player],
        initiative: fastest.score,
        character: fastest.player,
        target: names.filter((name) => name !== fastest.player)[0]
      },
      [target.player]: {
        ...s[target.player],
        initiative: target.score,
        character: fastest.player,
        target: names.filter((name) => name !== fastest.player)[0]
      }
    }
  },

  order(s, p) {

    const names = Object.keys(s),
      character = names.map(
        (name) => s[name].character
      ).reduce((a, b) => a.includes(b) ? a : [...a, b], []),
      target = names.map(
        (name) => s[name].target
      ).reduce((a, b) => a.includes(b) ? a : [...a, b], [])

    const attacker = attacker !== (character || undefined) ? target[0] : character[0],
      opponent = opponent !== (target || undefined) ? character[0] : target[0]

    return {
      ...s,
      [character]: {
        ...s[character],
        character: attacker,
        target: opponent
      },
      [target]: {
        ...s[target],
        character: attacker,
        target: opponent
      }
    }
  },

  check(s, p) {

    const names = Object.keys(s),
      character = names.map(
        (name) => s[name].character
      ).reduce((a, b) => a.includes(b) ? a : [...a, b], []),
      target = names.map(
        (name) => s[name].target
      ).reduce((a, b) => a.includes(b) ? a : [...a, b], []),

      health = names.map(
        (name) => s[name].health
      ),

      alive = s[target].health > 0 ? s[target].alive : !s[target].alive


    return {
      ...s,
      [target]: {
        ...s[target],
        alive: alive,
      }
    }

  },

}

export const Game = {

  start(s, p) {

    return {
      ...s,
      initialization: true
    }
  },

  fight(s, p) {
    return {
      ...s,
      ready: true

    }
  },

}