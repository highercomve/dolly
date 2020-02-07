import { combineReducers } from 'redux'

import devices from './devices/reducer'
import errors from './general-errors/reducer'
import auth from './auth/reducer'

const rootReducer = () => combineReducers({
  devices,
  errors,
  auth
})

export default rootReducer
