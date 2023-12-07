import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// windows._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store