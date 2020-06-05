import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

import createRootReducer from './reducer'

const composeEnhancers = process.env.REACT_APP_REDUX_DEBUG === 'true'
  ? composeWithDevTools({ trace: true, traceLimit: 25 })
  : compose

export default () => {
  return createStore(
    createRootReducer(), /* preloadedState, */
    composeEnhancers(
      applyMiddleware(
        ...[
          ReduxThunk
        ].filter(m => !!m)
      )
    )
  )
}
