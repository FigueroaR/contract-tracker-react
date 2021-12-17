import NavBar from "../NavBar";
import { useState } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { useNavigate } from "react-router";

import {editContract} from '../../redux/actions/index'
import { useEffect } from "react/cjs/react.development";


function EditContract(props){
    console.log("PROPS EDIT", props)
    let navigate = useNavigate()
    let [newContractName, setNewContractName] = useState("")
    const[newContractManager, setNewContractManager] = useState("")
    const [newBudget, setNewBudget] = useState("")
    const [newDateOfcompletion, setNewDateOfcompletion] = useState("")
    const [newEmployeesTotal, setNewEmployeesTotal] = useState("")
    const [newActive, setNewActive] = useState("")
    const [newPastDue, setNewPastDue]  = useState("")

    

    let onClickCancel = () => {
        console.log("cancel")
        navigate("/")
    }
    useEffect(() => {
        if(props.contract == null){
            return navigate("/")
        }
    })
    

    if(props.contract){
        
        const {active,budget,
            contractManager,
            contractName,
            dateOfcompletion,
            employeesTotal,
            pastDue} = props.contract.data;
        const {id} = props.contract
        
        let handleSubmit = (e) => {
            e.preventDefault()
            console.log("HANDLE SUBMIT")
            
            props.editContract({newContractName , 
                                newContractManager, 
                                newBudget, 
                                newEmployeesTotal, 
                                newActive, 
                                newPastDue,
                                newDateOfcompletion})
        }
        console.log("edit ",props, active, newContractName, "n.e.l.: ",newEmployeesTotal)
        return(
            <div>
                <NavBar/><br/>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>Edit Contract Name</label>
                        <input type="text"  placeholder={contractName} onBlur={ newContractName.length === 0 ? () => setNewContractName(contractName) : null} onChange={e => setNewContractName(e.target.value)} /><br/>
                        <label>Edit contract manager:</label>
                        <input type="text" placeholder={contractManager} onBlur={newContractManager.length === 0 ? () => setNewContractManager(contractManager) : null} onChange={ e => setNewContractManager(e.target.value)} /><br/>
                        <label>Edit budget:</label>
                        <input type="text" placeholder={budget} onBlur={newBudget.length === 0 ? () => setNewBudget(budget) : null } onChange={e => setNewBudget(e.target.value)} /><br/>
                        <label>Edit Employees: </label>
                        <input type="text" placeholder={employeesTotal} onBlur={newEmployeesTotal.length === 0 ? setNewEmployeesTotal(employeesTotal) : null} onChange={e => setNewEmployeesTotal(e.target.value)}  /><br/>
                        <label>Edit Active</label>
                        <select value={active} onChange={ e => setNewActive(e.target.value)} >
                            <option >Yes</option>
                            <option >No</option>
                        </select> <br/>
                        <label>Edit Past Due:</label>
                        <select value={pastDue} onChange={ e => setNewPastDue(e.target.value)} >
                            <option >Yes</option>
                            <option >No</option>
                        </select><br/>
                        <label>Edit Completion date: {dateOfcompletion}</label><br/>
                        <input type="date" pvalue={newDateOfcompletion} onChange={e => setNewDateOfcompletion(e.target.value)}/> <br/>
                        
                        <input type="submit" value="Edit Contract" />
                    </form>
                <button onClick={onClickCancel}>cancel</button>
                </div>
            </div>
        )
    } else{
        return <div>loading</div>
    }
}

const mapStateToProps = (store) => ({
    contract: store.contractState.currentContract
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    editContract
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditContract);