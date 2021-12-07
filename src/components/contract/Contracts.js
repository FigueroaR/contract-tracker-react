import React, { useState} from 'react'
import { useHistory } from "react-router-dom";
import Contract from "./Contract"
import NavBar from "../NavBar"

function Contracts(){

    return(
        <div className="all-Contracts">
            <div className="title-holder">
                <h1 className="main-title">Contract Tracker</h1>
            </div>
            
            <NavBar />
            
            <Contract />
        </div>
    )
}

export default Contracts;