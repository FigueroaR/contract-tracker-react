import {  combineReducers } from 'redux'

import {contractState} from "../reducers/contractReducer"

const rootReducer = combineReducers({
    contractState
})

export default rootReducer