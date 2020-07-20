import { combineReducers }from  'redux'
import { reducers as locationReducers } from './locations'
import {reducers as myLocationReducers} from './myLocation'

const reducers = combineReducers ({
 locationReducers,
 myLocationReducers
})

export { reducers }