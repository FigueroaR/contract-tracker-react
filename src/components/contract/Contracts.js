import React, { useState} from 'react'
import { useHistory } from "react-router-dom";
import Contract from "./Contract"
import NavBar from '../NavBar';

import {connect} from 'react-redux'

function Contracts(props){
    console.log(props.contracts)
    let list = props.contracts.map( item =>{
        console.log("item", item)
        return <li key={item.id}><Contract details={item} key={item.id}/></li>
    })
    return(
        <div className="all-Contracts">
            <ul>{list}</ul>
        </div>
    )
}

const mapStateToProps = (store) => ({
    contracts: store.contractState.contracts
})

export default connect(mapStateToProps, null)(Contracts);