import { Factories } from 'fpu'

export function GetFromStore (name) {
  return (state) => state[ name ]
}

export const MergeObject = Factories.reduce( (a, b) => ({ ...a, ...b }) )
