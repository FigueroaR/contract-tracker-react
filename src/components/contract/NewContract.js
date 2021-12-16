import NavBar from '../NavBar';
import { useState } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { useNavigate } from "react-router";

import {postContract} from '../../redux/actions/index'
import { useEffect } from "react/cjs/react.development";

function NewContract(props){
    console.log("PROPS CREATE", props)
    let navigate = useNavigate()
    


    let onClickCancel = () => {
        console.log("cancel")
        navigate("/")
    }

    let handleSubmit = () => {

    }

    return(
        <div>
            <h1>New Contract</h1>
            <NavBar/><br/>
            <div>
                    <form onSubmit={handleSubmit}>
                        <label>Contract Name</label>
                        <input type="text" /><br/>
                        <label>contract manager:</label>
                        <input type="text"  /><br/>
                        <label>budget:</label>
                        <input type="text" /><br/>
                        <label>Employees: </label>
                        <input type="text"  /><br/>
                        <label>Active</label>
                        <select >
                            <option  >true</option>
                            <option  >false</option>
                        </select> <br/>
                        <label>Past Due:</label>
                        <select >
                            <option >true</option>
                            <option >false</option>
                        </select><br/>
                        <label>Completion date</label>
                        <input type="date" /> <br/>
                        
                        <input type="submit" value="Create Contract" />
                    </form>
                <button onClick={onClickCancel}>cancel</button>
                </div>
        </div>
    )
}

export default NewContract;