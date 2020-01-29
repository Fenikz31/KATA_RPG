export const BASE = {
  agility: 5,
  damage: 1,
  dexterity: 5,
  heal: 1,
  health: 10,
  intelligence: 5,
  mana: 5,
  stamina: 5,
  xp: 0
}

export const CHARACTER = {
  alive: true,
  level: 1,
  initiative: null,
  attacker: null,
  target: null,
  dodge: null
}

export const RACES = {
  ELF: {
    agility: 2,
    damage: 1,
    dexterity: 3,
    heal: 2,
    health: 15,
    intelligence: 5,
    mana: 3,
    stamina: -2,
    xp: 0
  },

  HUMAN: {
    agility: 0,
    damage: 1,
    dexterity: 2,
    heal: 1,
    health: 20,
    intelligence: 2,
    mana: 1,
    stamina: 1,
    xp: 0
  },

  ORC: {
    agility: -1,
    damage: 2,
    dexterity: 3,
    heal: -1,
    health: 10,
    intelligence: -2,
    mana: -2,
    stamina: 5,
    xp: 0
  }
}
