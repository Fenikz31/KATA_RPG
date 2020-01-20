import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import ThunkMiddleware from 'redux-thunk'

import {
    ErrorMiddleware
} from '../lib/middlewares'

import {
  GameMiddleware,
  ReportMiddleware
} from './middlewares'

import {
  ActionReducer,
} from '../lib/reducers'

import {
    CharactersReducer,
  } from './reducers'
  
  // const composer = WEBPACK_MODE === 'development' ? composeWithDevTools : compose
  const composer = compose
  
  const middlewares = composer( applyMiddleware(
    ThunkMiddleware,
    ErrorMiddleware,
    GameMiddleware,
    // ReportMiddleware
  ))
  
  const reducers = combineReducers({
    action: ActionReducer,
    characters: CharactersReducer
  })
  
  export default createStore( reducers, middlewares )