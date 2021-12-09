import NavBar from "../NavBar";
import { useState } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { useNavigate } from "react-router";

import {editContract} from '../../redux/actions/index'


function EditContract(props){
    let navigate = useNavigate()
    const [newContractName, setNewContractName] = useState("")
    const[newContractManager, setNewContractManager] = useState("")
    const [newBudget, setNewBudget] = useState("")
    const [newDateOfcompletion, setNewDateOfcompletion] = useState("")
    const [newEmployeesTotal, setNewEmployeesTotal] = useState("")
    const [newActive, setNewActive] = useState("")
    const [newPastDue, setNewPastDue]  = useState("")

    const {active,budget,
        contractManager,
        contractName,
        dateOfcompletion,
        employeesTotal,
        pastDue} = props.contract.data;
    const {id} = props.contract

    let onClickCancel = () => {
        console.log("cancel")
        navigate("/")
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log("HANDLE SUBMIT")
        props.editContract({newContractName, newContractManager, newBudget, newEmployeesTotal, newActive, newPastDue})
    }

    console.log("edit ",props, active, newContractName)
    return(
        <div>
            <NavBar/>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Edit Contract Name</label>
                    <input type="text" value={newContractName !== "" ?  newContractName : contractName} onChange={e => setNewContractName(e.target.value)} placeholder={contractName}/>
                    <label>Edit contract manager:</label>
                    <input type="text" value={contractManager} onChange={ e => setNewContractManager(e.target.value)} />
                    <label>Edit budget:</label>
                    <input type="text" value={budget} onChange={e => setNewBudget(e.target.value)} />
                    <label>Edit Employees: </label>
                    <input type="text" value={employeesTotal} onChange={e => setNewEmployeesTotal(e.target.value)} />
                    <label>Edit Active</label>
                    <input type="text" value={active} onChange={e =>  setNewActive(e.target.value)} />
                    <label>Edit Past Due:</label>
                    <input type="text" value={pastDue} onChange={e => setNewPastDue(e.target.value)} />
                    <input type="submit" value="Edit Contract" />
                </form>
            <button onClick={onClickCancel}>cancel</button>
            </div>
        </div>
    )
}

const mapStateToProps = (store) => ({
    contract: store.contractState.currentContract
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    editContract
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditContract);