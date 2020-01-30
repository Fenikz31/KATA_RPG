export const BASE = {
  agility: 1,
  dexterity: 1,
  heal: 1,
  health: 10,
  intelligence: 5,
  mana: 5,
  stamina: 5,
  strength: 1,
  xp: 0
}

export const CHARACTER = {
  alive: true,
  damage: null,
  level: 1,
  initiative: null,
  dodge: null
}

export const RACES = {
  ELF: {
    agility: 2,
    dexterity: 2,
    heal: 2,
    health: 10,
    intelligence: 5,
    mana: 3,
    stamina: -2,
    strength: 1,
    xp: 0
  },

  HUMAN: {
    agility: 0,
    dexterity: 1,
    heal: 1,
    health: 7,
    intelligence: 2,
    mana: 1,
    stamina: 1,
    strength: 1,
    xp: 0
  },

  ORC: {
    agility: -1,
    dexterity: 1,
    heal: -1,
    health: 5,
    intelligence: -2,
    mana: -2,
    stamina: 5,
    strength: 2,
    xp: 0
  }
}
