import { CHARACTERS, GAME } from './src/descriptors'
import Store from './src/store'

Store.subscribe(() => console.log(Store.getState()))

Store.dispatch({
    type: GAME.START, opponents: [
        'pkan',
        'fera'
    ]
})


/*
// Log the initial state
console.log(Store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
Store.subscribe(() => console.log(Store.getState()))

Store.dispatch({ type: CHARACTERS.CREATE, name: 'pkan' })
Store.dispatch({ type: CHARACTERS.CREATE, name: 'fera' })

// Store.dispatch({ type: GAME.START })

Store.dispatch({ type: GAME.FIGHT })

Store.dispatch({ type: CHARACTERS.INITIATIVE })

Store.dispatch({ type: GAME.ROUND })

Store.dispatch({ type: CHARACTERS.ATTACK })

Store.dispatch({ type: CHARACTERS.ORDER })

Store.dispatch({ type: CHARACTERS.CHECK })

Store.dispatch({ type: CHARACTERS.ATTACK })

Store.dispatch({ type: CHARACTERS.ORDER })

Store.dispatch({ type: CHARACTERS.CHECK })

Store.dispatch({ type: GAME.ROUND })

 */