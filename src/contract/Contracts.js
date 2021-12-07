import React, { useState} from 'react'
import { useHistory } from "react-router-dom";
import Contract from "./Contract"

function Contracts(){
    let toIndividualContract = () => {
        
    }

    return(
        <div>
            <div>
                <h1>Contract Tracker</h1>
                <button className="contract home">All Contracts</button>
                <button className="contract new">New</button>
            </div>
            <Contract />
            <Contract/>
        </div>
    )
}

export default Contracts;