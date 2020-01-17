import { CreateReducer, ConnectMutator } from '../lib/factories'
import { CHARACTERS } from './descriptors'
import { Characters } from './mutators'

const CharactersReducerCreator = CreateReducer({})

export const CharactersReducer = CharactersReducerCreator(
  ConnectMutator( Characters.attack,
    CHARACTERS.ATTACK
  ),

  ConnectMutator( Characters.create,
    CHARACTERS.CREATE
  ),

  /* ConnectMutator( Characters.heal,
    CHARACTERS.HEAL
  ) */
)
