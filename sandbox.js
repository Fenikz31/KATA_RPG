import { CHARACTERS, GAME } from './src/descriptors'
import Store from './src/store'


// Log the initial state
console.log(Store.getState())


// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
Store.subscribe(() => console.log(Store.getState()))

Store.dispatch({ type: GAME.INIT })

Store.dispatch({ type: CHARACTERS.CREATE, name: 'pkan' })
Store.dispatch({ type: CHARACTERS.CREATE, name: 'fera' })

Store.dispatch({ type: GAME.START })

Store.dispatch({ type: GAME.FIGHT })

Store.dispatch({ type: CHARACTERS.INITIATIVE })

// Store.dispatch({ type: CHARACTERS.ORDER })


// const { action, characters, game } = Store.getState(),
// { initiative } = characters,
// names = Object.keys(characters)//.map((name) => name)
// //.reduce((a, v) => ({ ...a, ...v }), {})

// console.log('initiative: ', initiative)
// console.log('names: ', names)

// if(initiative < 0) {

// }
