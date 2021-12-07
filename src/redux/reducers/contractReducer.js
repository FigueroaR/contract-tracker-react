import {
    GET_CONTRACTS
} from '../constants/index'

const initialState = {
    contracts: [],
    currentContract: null
}

export const contractState = ( state = initialState, action) => {
    switch(action.type) {
        
        case "GET_CONTRACTS": 
            console.log("Reducer GET contracts", action)
            return {...state, contracts: [...state.contracts, action.payload.data]}

        default:
            return state
    }
}