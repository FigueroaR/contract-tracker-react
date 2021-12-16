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

    const [contractName, setContractName] = useState("")
    const[contractManager, setContractManager] = useState("")
    const [budget, setBudget] = useState("")
    const [dateOfcompletion, setDateOfcompletion] = useState("")
    const [employeesTotal, setEmployeesTotal] = useState("")
    const [active, setActive] = useState(false)
    const [pastDue, setPastDue]  = useState(true)

    let onClickCancel = () => {
        console.log("cancel")
        //navigate("/")
    }

    let handleClick = () => {

    }

    let handleSubmit = (e) => {
        e.preventDefault()
        props.postContract({contractName, contractManager, budget, dateOfcompletion, employeesTotal, active, pastDue})
    }

    return(
        <div>
            <h1>New Contract</h1>
            <NavBar/><br/>
            <div>
                    <form onSubmit={handleSubmit}>
                        <label>Contract Name</label>
                        <input type="text" onChange={ e => setContractName(e.target.value)}/><br/>
                        <label>contract manager:</label>
                        <input type="text" onChange={e => setContractManager(e.target.value)} /><br/>
                        <label>budget:</label>
                        <input type="text" onChange={e => setBudget(e.target.value)}/><br/>
                        <label>Employees: </label>
                        <input type="text"  onChange={e => setEmployeesTotal(e.target.value)}/><br/>
                        <label >Active</label>
                        <select defaultValue={active} onChange={e => setActive(e.target.value)}>
                            <option value={"Yes"} >Yes</option>
                            <option value={"No"} >No</option>
                        </select> <br/>
                        <label>Past Due:</label>
                        <select defaultValue={pastDue} onChange={ e => setPastDue(e.target.value)}>
                            <option >Yes</option>
                            <option >No</option>
                        </select><br/>
                        <label>Completion date</label>
                        <input type="date" onChange={e => setDateOfcompletion(e.target.value)}/> <br/>
                        
                        <input type="submit" value="Create Contract" />
                    </form>
                <button onClick={onClickCancel}>cancel</button>
                </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    postContract
  }, dispatch)

export default connect(null, mapDispatchToProps)(NewContract);