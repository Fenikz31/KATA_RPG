import { CreateReducer, ConnectMutator } from '../lib/factories'
import { CHARACTERS, GAME } from './descriptors'
import { Characters, Game  } from './mutators'

const CharactersReducerCreator = CreateReducer({})

const GameReducerCreator = CreateReducer({})

export const CharactersReducer = CharactersReducerCreator(
  ConnectMutator( Characters.attack,
    CHARACTERS.ATTACK
  ),

  ConnectMutator( Characters.create,
    CHARACTERS.CREATE
  ),

  ConnectMutator( Characters.initiative,
    CHARACTERS.INITIATIVE
  ),

  ConnectMutator( Characters.order,
    CHARACTERS.ORDER
  ),
  /* 
  ConnectMutator( Characters.gainXP,
    CHARACTERS.GAIN_XP
    ),

    ConnectMutator( Characters.heal,
      CHARACTERS.HEAL
  ),
  
  ConnectMutator( Characters.levelUp,
    CHARACTERS.LEVEL_UP
    ),
 */
)

export const GameReducers = GameReducerCreator(
  ConnectMutator( Game.init,
    GAME.INIT 
  ),

  ConnectMutator( Game.start,
    GAME.START
  ),

  ConnectMutator( Game.fight,
    GAME.FIGHT
  ),
  
)