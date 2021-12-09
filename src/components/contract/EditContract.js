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


    console.log("edit ",props, active, newContractName, "n.e.l.: ",newEmployeesTotal.length)
    return(
        <div>
            <NavBar/>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Edit Contract Name</label>
                    <input type="text"  placeholder={contractName} onBlur={ newContractName.length === 0 ? () => setNewContractName(contractName) : null} onChange={e => setNewContractName(e.target.value)} value={newContractName}/>
                    <label>Edit contract manager:</label>
                    <input type="text" placeholder={contractManager} onBlur={newContractManager.length === 0 ? () => setNewContractManager(contractManager) : null} onChange={ e => setNewContractManager(e.target.value)} value={newContractManager}/>
                    <label>Edit budget:</label>
                    <input type="text" placeholder={budget} onBlur={newBudget.length === 0 ? () => setNewBudget(budget) : null } onChange={e => setNewBudget(e.target.value)} value={newBudget}/>
                    <label>Edit Employees: </label>
                    <input type="text"  value={newEmployeesTotal} placeholder={employeesTotal} onBlur={newEmployeesTotal.length === 0 ? setNewEmployeesTotal(employeesTotal) : null} onChange={e => setNewEmployeesTotal(e.target.value)}  />
                    <label>Edit Active</label>
                    <input type="text" placeholder={active} onBlur={newActive.length === 0? setNewActive(active) : null} onChange={e =>  setNewActive(e.target.value)} value={newActive}/>
                    <label>Edit Past Due:</label>
                    <input type="text" placeholder={pastDue} onBlur={newPastDue.length === 0 ? setNewPastDue(pastDue) : null} onChange={e => setNewPastDue(e.target.value)} value={newPastDue}/>
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