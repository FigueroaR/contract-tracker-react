import React, { useState} from 'react'
import { useHistory } from "react-router-dom";
import Contract from "./Contract"
import NavBar from '../NavBar';

function Contracts(){

    return(
        <div className="all-Contracts">
            
            
            <Contract />
        </div>
    )
}

export default Contracts;