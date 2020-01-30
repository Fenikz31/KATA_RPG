import { MergeObject } from '../lib/utils'
import { BASE, CHARACTER, RACES } from './defaults.js'
import { Dice, JtagDice } from './utils.js'

export const Characters = {
  attack(s) {
    const names = Object.keys(s),

      target = names.map((name) => s[name].target)
        .pop(),
      character = names.map((name) => s[name].attacker)
        .pop(),
      { health, maxHealth } = s[target],
      { strength } = s[character],
      offense = JtagDice(3, strength),
      damage = offense,

      value = health - damage

    return {
      ...s,
      [character]: {
        ...s[character],
        damage: damage
      },
      [target]: {
        ...s[target],
        alive: value > 0,
        health: (value > maxHealth) ? maxHealth : (value > 0) ? value : 0
      }
    }
  },

  create(s, p) {
    const races = Object.keys(RACES),
      selection = Dice(races.length) - 1,
      race = RACES[races[selection]],
      raceSelected = races[selection],
      attributes = MergeObject(Object.keys(race)
        .map((attribut) => ({
          [attribut]: race[attribut] + BASE[attribut]
        })))

    return {
      ...s,
      [p.name]: {
        ...CHARACTER,
        ...attributes,
        maxHealth: attributes.health,
        race: raceSelected
      }
    }
  },

  initiative(s) {

    const names = Object.keys(s),
      initiativeArr = names.map((name) => ({
        player: name,
        score: JtagDice(6,s[name].dexterity + s[name].agility)
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
        attacker: fastest.player,
        target: names.filter((name) => name !== fastest.player)[0]
      },
      [target.player]: {
        ...s[target.player],
        initiative: target.score,
        attacker: fastest.player,
        target: names.filter((name) => name !== fastest.player)[0]
      }
    }
  },

  order(s) {

    const names = Object.keys(s),
      character = names.map(
        (name) => s[name].attacker
      ).reduce((a, b) => a.includes(b) ? a : [...a, b], []),
      target = names.map(
        (name) => s[name].target
      ).reduce((a, b) => a.includes(b) ? a : [...a, b], [])

    const attacker = attacker !== (character || undefined) ? target[0] : character[0],
      opponent = opponent !== (target || undefined) ? character[0] : target[0]

      console.log('TEST: ')
    return {
      ...s,
      [character]: {
        ...s[character],
        attacker: attacker,
        target: opponent
      },
      [target]: {
        ...s[target],
        attacker: attacker,
        target: opponent
      }
    }
  },
}

export const Game = {

  fight(s, p) {
    return {
      ...s,
      ready: true

    }
  },

  next (property) {
    return (s) => {
      return {
        ...s,
        [ property ]: s[ property ] + 1
      }
    }
  },

  ready(s) {

    return {
      ...s,
      ready: true
    }
  },

  start(s, p) {

    const { opponents } = p

    return {
      ...s,
      initialization: true,
      opponents
    }
  },

}