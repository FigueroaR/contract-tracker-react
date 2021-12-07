import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Contracts from "./contract/Contracts"

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getContracts} from "../redux/actions/index"

function Home(props) {
    useEffect(() =>{
        props.getContracts()
    }, []
    )
    return(
        <div className="Home">
            
            <div className="title-holder">
                <h1 className="main-title">Contract Tracker</h1>
            </div>
            <NavBar/>
            <Contracts/>
        </div>
    )
    
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getContracts,
}, dispatch )

export default connect(null, mapDispatchToProps)(Home)