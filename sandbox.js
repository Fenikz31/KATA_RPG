import { CHARACTERS } from './src/descriptors'
import Store from './src/store'

Store.dispatch({ type: CHARACTERS.CREATE, name: 'pkan' })
Store.dispatch({ type: CHARACTERS.CREATE, name: 'fera' })