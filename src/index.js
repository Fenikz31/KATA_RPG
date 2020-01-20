import { CHARACTERS } from './descriptors'
import Store from './store';

Store.dispatch({type: CHARACTERS.CREATE, name: 'pkan' })
Store.dispatch({type: CHARACTERS.CREATE, name: 'fera' })