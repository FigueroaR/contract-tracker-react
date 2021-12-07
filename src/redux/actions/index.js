import firebase from 'firebase'

import {GET_CONTRACTS,  GET_CONTRACT} from "../constants"

export const getContracts = () => {
    return (dispatch) => {
        console.log("GET CONTRACTS")
        firebase.firestore()
        .collection("contracts")
        .get()
        .then((snapshot) => {
            snapshot.forEach( inContract => {
                
                let contract = {data: inContract.data()}
                console.log(inContract.id, contract.data)
                dispatch({type: "GET_CONTRACTS" , payload: contract})
            })
            
        }).catch((error) => {
            console.log("Get Locations ERR:  =>  ", error)
        })
    }
}

export const getContract = () => {
    return (dispatch) => {
        
    }
}

export const postContract = () => {
    return (dispatch) => {
        
    }
}

export const editContract = () => {
    return (dispatch) => {
        
    }
}

export const deleteContract = () => {
    return (dispatch) => {
        
    }
}