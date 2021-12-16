// import {
//     GET_CONTRACTS
// } from '../constants/index'

const initialState = {
    contracts: [],
    currentContract: null
}

export const contractState = ( state = initialState, action) => {
    switch(action.type) {
        case "CLEAR_CONTRACTS":
            return {...state, 
                    contracts: []}
        
        case "GET_CONTRACTS": 
            console.log("Reducer GET contracts", action)
            return {...state, 
                    contracts: [ ...new Set(state.contracts.concat(action.payload)) ] }

        case "GET_CONTRACT":
            return {...state, 
                    currentContract: action.payload        
            }
        default:
            return state
    }
}