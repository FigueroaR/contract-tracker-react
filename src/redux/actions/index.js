import firebase from 'firebase'
import uuid from 'react-uuid'

//import {GET_CONTRACTS,  GET_CONTRACT} from "../constants"

export const clearContracts = () => {
    return (dispatch) => {
        dispatch({type: "CLEAR_CONTRACTS"})
    }
}

export const getContracts = () => {
    return (dispatch) => {
        console.log("GET CONTRACTS")
        firebase.firestore()
        .collection("contracts")
        .get()
        .then((snapshot) => {
            snapshot.forEach( inContract => {
                
                let contract = {id: inContract.id, data: inContract.data()}
                console.log(inContract.id, contract.data)
                dispatch({type: "GET_CONTRACTS" , payload: contract})
            })
            
        }).catch((error) => {
            console.log("Get Locations ERR:  =>  ", error)
        })
    }
}

export const getContract = (obj) => {
    return (dispatch) => {
        console.log("Action", obj)
        dispatch({type: "GET_CONTRACT", payload: obj})
    }
}

export const postContract = (obj) => {
    console.log("POST", obj, )
    return (dispatch) => {
        firebase.firestore()
        .collection("contracts")
        .doc(uuid())
        .set({
            active: obj.active,
            budget: obj.budget,
            contractManager: obj. contractManager,
            contractName: obj.contractName,
            dateOfcompletion: obj.dateOfcompletion,
            employeesTotal: obj.employeesTotal,
            pastDue: obj.pastDue
        })
    }
}

export const editContract = (obj) => {
    console.log("EDIT CONTRACT  ", obj)
    return (dispatch) => {
        
    }
}

export const deleteContract = () => {
    return (dispatch) => {
        
    }
}